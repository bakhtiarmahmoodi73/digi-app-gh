"use client";

import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSearchParams } from "next/navigation";

type Coin = {
  id: number;
  currency_code: string;
  en_name: string;
  fa_name: string;
  irt_price: string;
  daily_change_percent: string;
  icon: string;
};

const CoinChart: React.FC = () => {
  const searchParams = useSearchParams();
  const currency_code = searchParams.get("currency_code") || "BTC";

  const [coin, setCoin] = useState<Coin | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const res = await fetch(
          `https://b.wallet.ir/coinlist/list/?page=1&limit=100`
        );
        const data = await res.json();

        const found = data.items.find(
          (item: Coin) => item.currency_code === currency_code
        );
        setCoin(found || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [currency_code]);

  if (loading) return <p className="text-center p-4">در حال بارگذاری...</p>;
  if (!coin) return <p className="text-center p-4">ارز پیدا نشد</p>;

  // ساخت داده شبیه‌سازی شده 24 ساعت
  const basePrice = parseFloat(coin.irt_price);
  const dailyChange = parseFloat(coin.daily_change_percent) / 100;
  const data24h = Array.from({ length: 24 }, (_, i) => {
    // شبیه‌سازی تغییر قیمت: هر ساعت کمی بالا یا پایین
    const variation = (Math.random() - 0.5) * dailyChange * 2 * basePrice;
    return parseFloat((basePrice + variation).toFixed(2));
  });

  const options: Highcharts.Options = {
    title: { text: `${coin.fa_name} - ۲۴ ساعت گذشته` },
    chart: { type: "line", height: 300 },
    xAxis: {
      categories: Array.from({ length: 24 }, (_, i) => `${i}:00`),
      title: { text: "ساعت" },
    },
    yAxis: {
      title: { text: "قیمت به تومان" },
    },
    series: [
      {
        name: coin.fa_name,
        data: data24h,
        type: "line",
        color: parseFloat(coin.daily_change_percent) >= 0 ? "#16a34a" : "#dc2626",
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <img src={coin.icon} alt={coin.fa_name} className="w-10 h-10" />
        <h2 className="text-xl font-bold">{coin.fa_name} ({coin.currency_code})</h2>
        <span
          className={`ml-auto font-semibold ${
            parseFloat(coin.daily_change_percent) >= 0
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {coin.daily_change_percent}%
        </span>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CoinChart;
