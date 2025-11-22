"use client";

import React, { useEffect, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ChartPeriod = "24h" | "1w" | "1m" | "3m" | "1y" | "ALL";

interface ChartDataItem {
  timestamp: number;
  dateLabel: string;
  price_toman: number;
  price_usd: number;
  dollar_rate: number;
  coin?: {
    fa_name: string;
  };
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
  ALL: "همه",
};

const CoinChart: React.FC<CoinChartProps> = ({
  symbol,
  defaultPeriod = "24h",
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
  const [currentSymbol, setCurrentSymbol] = useState<string>(symbol || "BTC");

  useEffect(() => {
    const getSymbolFromURL = () => {
      if (symbol) return symbol;
      
      const pathname = window.location.pathname;
      const pathParts = pathname.split('/').filter(part => part.trim() !== '');
      
      const possibleSymbol = pathParts[pathParts.length - 1];
      if (possibleSymbol && possibleSymbol.length <= 10) {
        return possibleSymbol.toUpperCase();
      }
      
      return "BTC";
    };

    const newSymbol = getSymbolFromURL();
    setCurrentSymbol(newSymbol);
  }, [symbol]);

  useEffect(() => {
    if (!periods.includes(selectedPeriod)) {
      setSelectedPeriod("24h");
    }
  }, [periods, selectedPeriod]);

  const formatDateLabel = (ts: number, period: ChartPeriod) => {
    const d = new Date(ts);
    const monthNames = [
      "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
      "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
    ];
    if (period === "24h") {
      return `${d.getHours().toString().padStart(2, '۰')}:۰۰`;
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

  const fetchPeriods = async () => {
    const { data } = await axios.post("https://b.wallet.ir/coinlist/chart-period", {
      items: ["24h", "1w", "1m", "3m", "1y", "ALL"],
      success: true,
      status: 200
    });
    return data;
  };

  const { data: periodsData } = useQuery({
    queryKey: ['chartPeriods'],
    queryFn: fetchPeriods,
  });

  useEffect(() => {
    if (periodsData && Array.isArray(periodsData.items)) {
      const valid = (periodsData.items as string[]).filter((i) =>
        ["24h", "1w", "1m", "1y"].includes(i)
      ) as ChartPeriod[];
      if (valid.length) setPeriods(valid);
    }
  }, [periodsData]);

  const fetchChartData = async () => {
    const { data } = await axios.post("https://b.wallet.ir/coinlist/chart", {
      period: selectedPeriod,
      currency_code: currentSymbol
    });
    return data;
  };

  const { data: chartData, isLoading, error: chartError } = useQuery({
    queryKey: ['chartData', selectedPeriod, currentSymbol],
    queryFn: fetchChartData,
  });

  useEffect(() => {
    if (chartData) {
      let mapped: ChartDataItem[] = [];

      if (Array.isArray(chartData.items) && chartData.items.length) {
        mapped = (chartData.items as any[]).map((it: any) => {
          const ts = it.time ? Number(it.time) * 1000 : new Date(it.date || it.time).getTime();
          const price_usd = Number(it.price || it.usd_price || 0);
          const dollar_rate = Number(it.usd_price || it.rate || 84625);
          const price_toman = Number(it.irt_price || it.price_toman || 0);

          return {
            timestamp: ts,
            dateLabel: formatDateLabel(ts, selectedPeriod),
            price_toman: price_toman,
            price_usd: price_usd,
            dollar_rate: dollar_rate,
          } as ChartDataItem;
        });
      } else if (Array.isArray(chartData.data) && chartData.data.length) {
        mapped = (chartData.data as any[]).map((it: any) => {
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
      setData(mapped);
      setLoading(false);
    }
  }, [chartData, selectedPeriod]);

  useEffect(() => {
    if (chartError) {
      const fallback = generateFallbackData(selectedPeriod);
      setData(fallback);
      setError("خطا در دریافت داده از سرور — نمایش داده نمونه");
      setLoading(false);
    }
  }, [chartError, selectedPeriod]);

  const echartsOption = useMemo(() => {
    const xData = data.map((d) => d.dateLabel);
    const tomanSeries = data.map((d) => d.price_toman);
    const usdSeries = data.map((d) => d.price_usd);
    const rateSeries = data.map((d) => d.dollar_rate);

    const getCoinName = () => {
      return currentSymbol;
    };

    return {
      backgroundColor: "#ffffff",
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
        backgroundColor: "#fff",
        borderColor: "#e6eefb",
        borderWidth: 1,
        textStyle: { 
          color: "#000",
          fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif"
        },
        formatter: (params: any) => {
          const date = params && params.length ? params[0].axisValue : "";
          const lines = [`<div style="direction:rtl;  font-family:var(--font-iran-sans), 'IranSans', 'Tahoma', sans-serif">`];
          lines.push(
            `<div style="font-weight:600;margin-bottom:4px">${date}</div>`
          );
          params.forEach((p: any) => {
            if (!p || p.value == null) return;
            let label = p.seriesName;
            let value = p.value;
            if (p.seriesName === `قیمت ${getCoinName()} (تومان)`) {
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
              `<div style="display:flex;justify-content:space-between;gap:20px; "><span>${label}</span><span style="font-weight:600">${value}</span></div>`
            );
          });
          lines.push("</div>");
          return lines.join("");
        },
      },
      grid: [
        { 
          left: 50, 
          top: 40, 
          right: 50, 
          height: "60%",
          backgroundColor: "#fafafa"
        },
        { 
          left: 50, 
          right: 50, 
          top: "80%", 
          height: "10%",
          backgroundColor: "#f8f8f8"
        },
      ],
      xAxis: [
        {
          type: "category",
          data: xData,
          boundaryGap: false,
          gridIndex: 0,
          axisLine: { lineStyle: { color: "#e6eefb" } },
          axisLabel: { 
            color: "#7b8aa6", 
            fontSize: 12,
            interval: 'auto',
            fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif"
          },
          axisTick: { show: false },
        },
        {
          type: "category",
          gridIndex: 1,
          data: xData,
          boundaryGap: false,
          axisLine: { lineStyle: { color: "#e6eefb" } },
          axisLabel: { 
            show: true,
            color: "#7b8aa6",
            fontSize: 10,
            interval: 'auto',
            fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif"
          },
          axisTick: { show: true },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "دلار",
          position: "left",
          gridIndex: 0,
          nameTextStyle: { 
            color: "#7b8aa6", 
            fontSize: 12,
            fontFamily: "var(--font-iran-sans), 'IranSans', 'Tahoma', sans-serif"
          },
          axisLabel: {
            formatter: (v: number) =>
              v >= 1000 ? `${Math.round(v / 1000)}k` : `${v}`,
            color: "#7b8aa6",
            fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif"
          },
          splitLine: { lineStyle: { color: "#f4f7fb" } },
        },
        {
          type: "value",
          name: "تومان",
          position: "right",
          gridIndex: 0,
          nameTextStyle: { 
            color: "#7b8aa6", 
            fontSize: 12,
            fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif"
          },
          axisLabel: {
            formatter: (v: number) => {
              if (Math.abs(v) >= 1e9) return `${(v / 1e9).toFixed(1)}B`;
              if (Math.abs(v) >= 1e6) return `${(v / 1e6).toFixed(1)}M`;
              if (Math.abs(v) >= 1e3) return `${(v / 1e3).toFixed(0)}k`;
              return v;
            },
            color: "#7b8aa6",
            fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif"
          },
          splitLine: { show: false },
        },
        {
          type: "value",
          gridIndex: 1,
          name: "نرخ دلار",
          nameTextStyle: { 
            color: "#7b8aa6", 
            fontSize: 12,
            fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif"
          },
          axisLabel: { 
            show: true,
            color: "#7b8aa6",
            fontSize: 10,
            fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif",
            formatter: (v: number) => {
              if (Math.abs(v) >= 1e7) return `${(v / 1e7).toFixed(1)}M`;
              if (Math.abs(v) >= 1e4) return `${(v / 1e4).toFixed(0)}K`;
              return v;
            }
          },
          axisLine: { show: true, lineStyle: { color: "#e6eefb" } },
          splitLine: { 
            show: true, 
            lineStyle: { 
              color: "#f0f0f0",
              type: "dashed"
              
            } 
          },
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
          top: "%",
          height: 20,
          start: 0,
          end: 100,
          backgroundColor: "#f8f8f8",
          borderColor: "#e6eefb",
          fillerColor: "rgba(22,82,240,0.1)",
          textStyle: { 
            color: "#7b8aa6",
            fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif"
          },
        },
      ],
      legend: {
        show: true,
        top: 10,
        itemGap: 20,
        textStyle: { 
          color: "#6b7280", 
          fontSize: 12, 
          fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif"
        },
        data: [
          `قیمت ${getCoinName()} (تومان)`,
          "برابری دلار (USD)",
          "نرخ دلار (تومان)",
        ],
      },
      series: [
        {
          name: `قیمت ${getCoinName()} (تومان)`,
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
          lineStyle: { 
            width: 1.6, 
            color: "#16A34A" 
          },
          areaStyle: {
            
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(22,163,74,0.16)" },
              { offset: 1, color: "rgba(22,163,74,0.02)" },
            ]),
          },
        },
      ],
      textStyle: { 
        fontFamily: "var(--font-number-sans-regular), 'IranSans', 'Tahoma', sans-serif"
      },
    };
  }, [data, currentSymbol]);

  return (
    <div className={`--font-number-sans-regular bg-[#ffffff] overflow-hidden mt-[32px] md:mt-[56px] md:mx-[50px] md:w-[calc(100%-100px)] xl:mt-[63px] xl:h-[697px] xl:mx-[150px] xl:w-[calc(100%-300px)] rounded-[30px] mx-[19px] w-[calc(100%-38px)] shadow-[0_4px_103px_0_rgba(13,26,142,0.08)] ${className}`}>
      <div className="">
        <div className="flex items-center justify-start mr-6">
          <div className="text-sm text-gray-500"></div>
          <div className="flex items-center gap-4">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPeriod(p)}
                className={`font-number-regular text-sm px-2 py-1 rounded-md transition-all duration-150 ${
                  selectedPeriod === p
                    ? "text-blue-600 font-number-medium underline decoration-blue-400 decoration-2"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {periodLabelMap[p]}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          {isLoading ? (
            <div className="font-iran-sans py-20 text-center text-gray-400">
              در حال بارگذاری...
            </div>
          ) : (
            <>
              {error && (
                <div className="font-iran-sans mb-2 text-sm text-yellow-700 bg-yellow-50 p-2 rounded">
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