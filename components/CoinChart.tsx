"use client";

import React, { useEffect, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

type ChartPeriod = "24h" | "1w" | "1m" | "3m" | "1y" | "ALL";

interface ChartDataItem {
  timestamp: number;
  dateLabel: string;
  price_toman: number;
  price_usd: number;
  dollar_rate: number;
}

interface CoinChartProps {
  symbol?: string;
  defaultPeriod?: ChartPeriod;
  className?: string;
}

const periodLabelMap: Record<ChartPeriod, string> = {
  "24h": "۲۴ ساعت",
  "1w": "۱ هفته",
  "1m": "۱ ماه",
  "3m": "۳ ماه",
  "1y": "۱ سال",
  ALL: "ALL",
};

const CoinChart: React.FC<CoinChartProps> = ({
  symbol = "BTC",
  defaultPeriod = "1y",
  className = "",
}) => {
  const [periods, setPeriods] = useState<ChartPeriod[]>([
    "24h",
    "1w",
    "1m",
    "3m",
    "1y",
    "ALL",
  ]);
  const [selectedPeriod, setSelectedPeriod] =
    useState<ChartPeriod>(defaultPeriod);
  const [data, setData] = useState<ChartDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const formatDateLabel = (ts: number, period: ChartPeriod) => {
    const d = new Date(ts);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (period === "24h") {
      return `${d.getHours()}:00`;
    }
    return `${d.getDate()} ${monthNames[d.getMonth()]}`;
  };

  const generateFallbackData = (period: ChartPeriod): ChartDataItem[] => {
    const items: ChartDataItem[] = [];
    const now = new Date();
    let start = new Date(now);
    if (period === "24h") {
      start.setDate(now.getDate() - 1);
    } else if (period === "1w") {
      start.setDate(now.getDate() - 7);
    } else if (period === "1m") {
      start.setMonth(now.getMonth() - 1);
    } else if (period === "3m") {
      start.setMonth(now.getMonth() - 3);
    } else if (period === "1y") {
      start.setFullYear(now.getFullYear() - 1);
    } else {
      start.setFullYear(now.getFullYear() - 2);
    }

    const diffMs = now.getTime() - start.getTime();
    const roughPoints =
      period === "24h"
        ? 24
        : period === "1w"
        ? 50
        : period === "1m"
        ? 60
        : period === "1y"
        ? 120
        : 200;

    for (let i = 0; i < roughPoints; i++) {
      const ts = start.getTime() + Math.round((diffMs / roughPoints) * i);
      const baseUsd = 28000 + i * (90000 / roughPoints);
      const noiseUsd = Math.sin(i / 4) * 2000 + (Math.random() - 0.5) * 1500;
      const usd = Math.max(1000, baseUsd + noiseUsd);

      const dollarRateBase = 24000000 + i * (2000000 / roughPoints);
      const dollarRate = Math.max(
        20000000,
        dollarRateBase + Math.sin(i / 6) * 200000
      );

      const toman = usd * (dollarRate / 1);

      items.push({
        timestamp: ts,
        dateLabel: formatDateLabel(ts, period),
        price_toman: Math.round(toman),
        price_usd: Math.round(usd),
        dollar_rate: Math.round(dollarRate),
      });
    }
    return items;
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("https://b.wallet.ir/coinlist/chart-period");
        if (!res.ok) throw new Error("periods fetch failed");
        const json = await res.json();
        if (json && Array.isArray(json.items) && mounted) {
          const valid = (json.items as string[]).filter((i) =>
            ["24h", "1w", "1m", "1y"].includes(i)
          ) as ChartPeriod[];
          if (valid.length) setPeriods(valid);
        }
      } catch (err) {}
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const url = `https://b.wallet.ir/coinlist/chart?period=${selectedPeriod}&symbol=${encodeURIComponent(
          symbol
        )}`;
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`chart fetch failed (${res.status})`);
        }
        const json = await res.json();

        let mapped: ChartDataItem[] = [];

        if (Array.isArray(json.items) && json.items.length) {
          mapped = (json.items as any[]).map((it: any) => {
            const ts = it.timestamp
              ? Number(it.timestamp)
              : new Date(it.date || it.time).getTime();
            return {
              timestamp: ts,
              dateLabel: formatDateLabel(ts, selectedPeriod),
              price_toman: Number(
                it.price_toman ?? it.toman ?? it.price_toman_raw ?? 0
              ),
              price_usd: Number(it.price_usd ?? it.usd ?? it.price ?? 0),
              dollar_rate: Number(it.dollar_rate ?? it.rate ?? it.dollar ?? 0),
            } as ChartDataItem;
          });
        } else if (Array.isArray(json.data) && json.data.length) {
          mapped = (json.data as any[]).map((it: any) => {
            const ts = it.t
              ? Number(it.t)
              : new Date(it.date || it.time).getTime();
            return {
              timestamp: ts,
              dateLabel: formatDateLabel(ts, selectedPeriod),
              price_toman: Number(it.toman ?? it.price_toman ?? it[1] ?? 0),
              price_usd: Number(it.usd ?? it.price_usd ?? it[2] ?? 0),
              dollar_rate: Number(it.rate ?? it.dollar_rate ?? it[3] ?? 0),
            } as ChartDataItem;
          });
        }

        if (!mapped.length) {
          mapped = generateFallbackData(selectedPeriod);
        }

        mapped.sort((a, b) => a.timestamp - b.timestamp);

        if (mounted) setData(mapped);
      } catch (err: any) {
        const fallback = generateFallbackData(selectedPeriod);
        if (mounted) {
          setData(fallback);
          setError("خطا در دریافت داده از سرور — نمایش داده نمونه");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [selectedPeriod, symbol]);

  const echartsOption = useMemo(() => {
    const xData = data.map((d) => d.dateLabel);
    const tomanSeries = data.map((d) => d.price_toman);
    const usdSeries = data.map((d) => d.price_usd);
    const rateSeries = data.map((d) => d.dollar_rate);

    return {
      backgroundColor: "#ffffff",
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
        backgroundColor: "#fff",
        borderColor: "#e6eefb",
        borderWidth: 1,
        textStyle: { color: "#000" },
        formatter: (params: any) => {
          const date = params && params.length ? params[0].axisValue : "";
          const lines = [`<div style="direction:rtl;font-family:iranSans">`];
          lines.push(
            `<div style="font-weight:600;margin-bottom:4px">${date}</div>`
          );
          params.forEach((p: any) => {
            if (!p || p.value == null) return;
            let label = p.seriesName;
            let value = p.value;
            if (p.seriesName === "قیمت بیت‌کوین (تومان)") {
              value =
                new Intl.NumberFormat("fa-IR").format(Number(p.value)) +
                " تومان";
            } else if (p.seriesName === "برابری دلار (USD)") {
              value =
                new Intl.NumberFormat("en-US").format(Number(p.value)) + " USD";
            } else if (p.seriesName === "نرخ دلار (تومان)") {
              value =
                new Intl.NumberFormat("fa-IR").format(Number(p.value)) +
                " تومان";
            }
            lines.push(
              `<div style="display:flex;justify-content:space-between"><span>${label}</span><span style="font-weight:600">${value}</span></div>`
            );
          });
          lines.push("</div>");
          return lines.join("");
        },
      },
      grid: [
        { left: 40, top: 40, right: 80, height: "60%" },
        { left: 40, right: 40, top: "75%", height: "18%" },
      ],
      xAxis: [
        {
          type: "category",
          data: xData,
          boundaryGap: false,
          gridIndex: 0,
          axisLine: { lineStyle: { color: "#e6eefb" } },
          axisLabel: { color: "#7b8aa6", fontSize: 12 },
          axisTick: { show: false },
        },
        {
          type: "category",
          gridIndex: 1,
          data: xData,
          boundaryGap: false,
          axisLine: { lineStyle: { color: "#e6eefb" } },
          axisLabel: { show: false },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "دلار",
          position: "left",
          offset: 0,
          gridIndex: 0,
          nameTextStyle: { color: "#7b8aa6", fontSize: 12 },
          axisLabel: {
            formatter: (v: number) =>
              v >= 1000 ? `${Math.round(v / 1000)}k` : `${v}`,
            color: "#7b8aa6",
          },
          splitLine: { lineStyle: { color: "#f4f7fb" } },
        },
        {
          type: "value",
          name: "تومان",
          position: "right",
          gridIndex: 0,
          nameTextStyle: { color: "#7b8aa6", fontSize: 12 },
          axisLabel: {
            formatter: (v: number) => {
              if (Math.abs(v) >= 1e9) return `${(v / 1e9).toFixed(1)}B`;
              if (Math.abs(v) >= 1e6) return `${(v / 1e6).toFixed(1)}M`;
              if (Math.abs(v) >= 1e3) return `${(v / 1e3).toFixed(0)}k`;
              return v;
            },
            color: "#7b8aa6",
          },
          splitLine: { show: false },
        },
        {
          type: "value",
          gridIndex: 1,
          axisLabel: { show: false },
          axisLine: { show: false },
          splitLine: { show: false },
        },
      ],
      dataZoom: [
        {
          type: "inside",
          xAxisIndex: [0, 1],
          start: 0,
          end: 100,
        },
        {
          show: false,
          xAxisIndex: [0, 1],
          type: "slider",
          top: "92%",
          start: 0,
          end: 100,
        },
      ],
      legend: {
        show: true,
        bottom: 6,
        itemGap: 20,
        textStyle: { color: "#6b7280", fontSize: 12, fontFamily: "iranSans" },
        data: [
          "قیمت بیت‌کوین (تومان)",
          "برابری دلار (USD)",
          "نرخ دلار (تومان)",
        ],
      },
      series: [
        {
          name: "قیمت بیت‌کوین (تومان)",
          type: "line",
          smooth: true,
          showSymbol: false,
          xAxisIndex: 0,
          yAxisIndex: 1,
          data: tomanSeries,
          lineStyle: {
            width: 2,
            color: "#F6A21E",
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(246,162,30,0.18)" },
              { offset: 1, color: "rgba(246,162,30,0.02)" },
            ]),
          },
        },
        {
          name: "برابری دلار (USD)",
          type: "line",
          smooth: true,
          showSymbol: false,
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: usdSeries,
          lineStyle: {
            width: 2,
            color: "#1652F0",
          },
          areaStyle: {
            color: "rgba(22,82,240,0.02)",
          },
        },
        {
          name: "نرخ دلار (تومان)",
          type: "line",
          smooth: true,
          showSymbol: false,
          xAxisIndex: 1,
          yAxisIndex: 2,
          data: rateSeries,
          lineStyle: { width: 1.6, color: "#16A34A" },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(22,163,74,0.16)" },
              { offset: 1, color: "rgba(22,163,74,0.02)" },
            ]),
          },
        },
      ],
      textStyle: { fontFamily: "iranSans, sans-serif" },
    };
  }, [data]);

  return (
    <div className={`w-full  ${className}`}>
      <div className="border border-blue-200 rounded-lg p-4 bg-white shadow-sm">
        <div className="flex items-center justify-start  mb-2 ">
          <div className="text-sm text-gray-500"></div>
          <div className="flex items-center gap-4  ">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPeriod(p)}
                className={`text-sm px-2 py-1 rounded-md transition-all duration-150 ${
                  selectedPeriod === p
                    ? "text-blue-600 font-semibold underline decoration-blue-400 decoration-2"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {periodLabelMap[p]}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          {loading ? (
            <div className="py-20 text-center text-gray-400">
              در حال بارگذاری...
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-2 text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
                  {error}
                </div>
              )}
              <ReactECharts
                echarts={echarts}
                option={echartsOption}
                style={{ height: 520, width: "100%" }}
                notMerge={true}
                lazyUpdate={true}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinChart;
