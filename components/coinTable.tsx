



"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CoinRaw = {
  id: number;
  currency_code: string;
  fa_name: string;
  price: string;
  daily_change_percent: string;
  buy_irt_price: string;
  sell_irt_price: string;
  icon: string;
};

export default function CoinsPage() {
  const router = useRouter();
  const [items, setItems] = useState<CoinRaw[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);  
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [displayed, setDisplayed] = useState<CoinRaw[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const limit = 10;

  const fetchPage = async (p: number, fetchAllWhenSearch = false) => {
    setLoading(true);
    try {
      const useLimit = fetchAllWhenSearch ? 1000 : limit;
      const res = await fetch(
        `https://b.wallet.ir/coinlist/list/?page=${
          fetchAllWhenSearch ? 1 : p
        }&limit=${useLimit}`
      );
      if (!res.ok) throw new Error("خطا در دریافت داده‌ها");
      const data = await res.json();

      if (search.trim()) {
        const all = data.items || [];
        const filtered = all.filter((c: CoinRaw) => {
          const q = search.trim().toLowerCase();
          return (
            (c.fa_name && c.fa_name.toLowerCase().includes(q)) ||
            (c.currency_code && c.currency_code.toLowerCase().includes(q))
          );
        });
        setItems(filtered);
        const pages = Math.max(1, Math.ceil(filtered.length / limit));
        setTotalPages(pages);
        const start = (p - 1) * limit;
        setDisplayed(filtered.slice(start, start + limit));
      } else {
        const arr = data.items || [];
        setItems(arr);
        setDisplayed(arr);
      }
    } catch (err) {
      console.error(err);
      setItems([]);
      setDisplayed([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(page, !!search.trim());
    setSelectedId(null);
  }, [page, search]);

  const fmt = (v: string | number | undefined | null) => {
    if (v === undefined || v === null || v === "") return "-";
    const n = Number(v);
    if (Number.isNaN(n)) return String(v);
    return n.toLocaleString("fa-IR");
  };

  const onClickRow = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-start gap-4 mb-4"></div>

      <div className="hidden md:flex items-center bg-white border border-gray-200 rounded-md py-3 px-3 mb-2">
        <div className="w-36 text-right text-sm text-gray-600">نام رمز ارز</div>
        <div className="flex-1 grid grid-cols-4 gap-4 text-sm text-gray-600">
          <div className="text-center">ارزش دلاری</div>
          <div className="text-center">تغییر روزانه</div>
          <div className="text-center">خرید از والت</div>
          <div className="text-center">فروش به والت</div>
        </div>
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-2 py-1.5 shadow-sm">
  <svg
    className="w-3.5 h-3.5 text-gray-400"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21 21l-4.35-4.35"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="11"
      cy="11"
      r="6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  <input
    dir="rtl"
    placeholder="جستجو ..."
    value={search}
    onChange={(e) => {
      setSearch(e.target.value);
      setPage(1);
    }}
    className="outline-none text-xs placeholder-gray-400"
  />
</div>

      </div>

      <div className="space-y-2">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 bg-gray-50 rounded-md animate-pulse"
            >
              <div className="w-24 h-10 bg-gray-200 rounded"></div>
              <div className="flex-1 h-8 bg-gray-200 rounded"></div>
              <div className="w-36 h-8 bg-gray-200 rounded"></div>
            </div>
          ))
        ) : displayed.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            هیچ داده‌ای یافت نشد.
          </div>
        ) : (
          displayed.map((c, idx) => {
            const isSelected = selectedId === c.id;
            const bg = idx % 2 === 0 ? "bg-white" : "bg-gray-50";
            return (
              <div
                key={c.id}
                onClick={() => onClickRow(c.id)}
                className={`flex items-center gap-4 p-3 border ${
                  isSelected
                    ? "border-blue-400 shadow-md"
                    : "border-transparent"
                } rounded-lg transition cursor-pointer ${bg} hover:border-blue-200`}
              >
                <div className="w-15 flex-shrink-0 flex items-center justify-end gap-3">
                  <img
                    src={c.icon}
                    alt={c.currency_code}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-right">
                    <div className="text-xs font-medium text-gray-800">
                      {c.fa_name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {c.currency_code}
                    </div>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-4 gap-0 text-sm items-center">
                  <div className="text-center text-gray-700">
                    {fmt(c.price)} $
                  </div>
                  <div
                    className={`text-center font-semibold ${
                      Number(c.daily_change_percent) >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {Number(c.daily_change_percent) >= 0 ? "+" : ""}
                    {c.daily_change_percent}٪
                  </div>

                  <div className="text-center text-gray-700">
                    {fmt(c.buy_irt_price)} تومان
                  </div>
                  <div className="text-center text-gray-700">
                    {fmt(c.sell_irt_price)} تومان
                  </div>
                </div>

                <div className="w-28 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/coin/${c.currency_code}`);
                    }}
                    className="bg-blue-600 text-white px-10 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                  >
                    معامله
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-center items-center gap-3 mt-6">
      <button
          onClick={() => setPage(10)}
          className={`w-9 h-9 rounded-full border flex items-center justify-center text-sm transition ${
            page === 10
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {Number(10).toLocaleString("fa-IR")}
        </button>

        <span className="text-gray-500 select-none">...</span>
        {[3, 2, 1].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`w-9 h-9 rounded-full border flex items-center justify-center text-sm transition ${
              p === page
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {p.toLocaleString("fa-IR")}
          </button>
        ))}

        
      </div>
    </div>
  );
}
