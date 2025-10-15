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

  const limit = 1;

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
        setDisplayed(arr.slice((p - 1) * limit, p * limit));
        // فقط این خط اضافه شده - تنظیم totalPages از داده API
        setTotalPages(data.total_page || 10);
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

  // ایجاد آرایه صفحات بر اساس totalPages واقعی
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).reverse();

  return (
    <div className="relative flex flex-col items-center min-h-screen py-10">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col items-center w-full">
        <div className="flex items-center justify-between bg-[#F5F7FA] border border-[#E5E9F2] rounded-[12px]
          w-[1130px] h-[70px] px-6 text-[#1E293B] font-[500] text-[15px] mb-4">
          <div>نام رمز ارز</div>
          <div>ارزش دلاری</div>
          <div>تغییر روزانه</div>
          <div>خرید از والت</div>
          <div>فروش به والت</div>
          <div className="flex items-center bg-white border border-[#E2E8F0] rounded-[8px] w-[250px] h-[45px] px-2">
            <svg
              className="w-4 h-4 text-gray-400"
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
              placeholder="جستجو..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="outline-none text-[13px] pl-2 w-full placeholder-gray-400"
            />
          </div>
        </div>

        <div className="bg-white w-[1130px] rounded-[10px] shadow-sm border border-[#E5E9F2] divide-y divide-[#E5E9F2]">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 animate-pulse"
              >
                <div className="w-32 h-6 bg-gray-200 rounded"></div>
                <div className="w-20 h-6 bg-gray-200 rounded"></div>
                <div className="w-20 h-6 bg-gray-200 rounded"></div>
                <div className="w-32 h-6 bg-gray-200 rounded"></div>
                <div className="w-32 h-6 bg-gray-200 rounded"></div>
                <div className="w-20 h-8 bg-gray-300 rounded"></div>
              </div>
            ))
          ) : displayed.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              هیچ داده‌ای یافت نشد.
            </div>
          ) : (
            displayed
              .flatMap((c) => Array.from({ length: 9 }, () => c))
              .map((c, idx) => {
                const isSelected = selectedId === c.id;
                return (
                  <div
                    key={`${c.id}-${idx}`}
                    onClick={() => onClickRow(c.id)}
                    className={`flex items-center justify-between px-6 h-[75px] transition cursor-pointer
                      ${idx % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}
                      ${isSelected ? "border border-blue-400 shadow-md" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={c.icon}
                        alt={c.currency_code}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="text-right">
                        <div className="text-[14px] font-medium text-[#1E293B]">
                          {c.fa_name}
                        </div>
                        <div className="text-[13px] text-gray-500">
                          {c.currency_code}
                        </div>
                      </div>
                    </div>

                    <div className="text-[14px] text-[#1E293B] text-center w-[100px]">
                      {fmt(c.price)} $
                    </div>

                    <div
                      className={`text-[14px] font-medium w-[80px] text-center ${
                        Number(c.daily_change_percent) >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {Number(c.daily_change_percent) >= 0 ? "+" : ""}
                      {c.daily_change_percent}٪
                    </div>

                    <div className="text-[14px] text-[#1E293B] text-center w-[150px]">
                      {fmt(c.buy_irt_price)} تومان
                    </div>
                    <div className="text-[14px] text-[#1E293B] text-center w-[150px]">
                      {fmt(c.sell_irt_price)} تومان
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/coin/${c.currency_code}`);
                      }}
                      className="bg-[#1652F0] text-white text-[14px] font-medium px-6 py-2 rounded-[8px] hover:bg-[#1447D8] transition"
                    >
                      معامله
                    </button>
                  </div>
                );
              })
          )}
        </div>

        <div className="flex justify-center items-center gap-2 mt-6">
          {pageNumbers.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition
                ${
                  page === p
                    ? "bg-[#1652F0] text-white border-[#1652F0]"
                    : "bg-white text-gray-600 border-[#E2E8F0] hover:bg-gray-100"
                }`}
            >
              {p.toLocaleString("fa-IR")}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden w-full px-4">
        {/* Search Box */}
        <div className="flex items-center bg-white border border-[#E2E8F0] rounded-[8px] w-full h-[45px] px-2 mb-4">
          <svg
            className="w-4 h-4 text-gray-400"
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
            placeholder="جستجو..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="outline-none text-[13px] pl-2 w-full placeholder-gray-400"
          />
        </div>

        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-[10px] shadow-sm border border-[#E5E9F2] p-4 mb-4 animate-pulse">
              <div className="flex justify-between items-start mb-4">
                <div className="w-20 h-6 bg-gray-200 rounded"></div>
                <div className="w-16 h-6 bg-gray-200 rounded"></div>
                <div className="w-16 h-6 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="w-16 h-4 bg-gray-200 rounded mb-1"></div>
                    <div className="w-12 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : displayed.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            هیچ داده‌ای یافت نشد.
          </div>
        ) : (
          displayed.map((c) => {
            const isSelected = selectedId === c.id;
            return (
              <div
                key={c.id}
                onClick={() => onClickRow(c.id)}
                className={`bg-white rounded-[10px] shadow-sm border border-[#E5E9F2] p-4 mb-4 transition cursor-pointer
                  ${isSelected ? "border border-blue-400 shadow-md" : ""}`}
              >
                {/* Top Gray Box */}
                <div className="bg-gray-100 rounded-[8px] p-3 mb-4">
                  <div className="flex justify-between items-center text-center mb-2">
                    <div className="flex-1">
                      <div className="text-[12px] text-gray-500 mb-1">نام رمز ارز</div>
                      <div className="text-[14px] font-medium text-[#1E293B]">{c.fa_name}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] text-gray-500 mb-1">ارزش دلاری</div>
                      <div className="text-[14px] font-medium text-[#1E293B]">{fmt(c.price)} $</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] text-gray-500 mb-1">تغییر روزانه</div>
                      <div
                        className={`text-[14px] font-medium ${
                          Number(c.daily_change_percent) >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {Number(c.daily_change_percent) >= 0 ? "+" : ""}
                        {c.daily_change_percent}٪
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coin Info Section */}
                <div className="flex justify-end items-center mb-4">
                  <div className="text-left ml-3">
                    <div className="text-[14px] font-medium text-[#1E293B]">{c.currency_code}</div>
                    <div className="text-[12px] text-gray-500">{c.fa_name}</div>
                  </div>
                  <img
                    src={c.icon}
                    alt={c.currency_code}
                    className="w-10 h-10 rounded-full"
                  />
                </div>

                {/* Buy/Sell Section */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-gray-600">فروش به والت</span>
                    <span className="text-[13px] font-medium text-[#1E293B]">{fmt(c.sell_irt_price)} تومان</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-gray-600">خرید از والت</span>
                    <span className="text-[13px] font-medium text-[#1E293B]">{fmt(c.buy_irt_price)} تومان</span>
                  </div>
                </div>

                {/* Trade Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/coin/${c.currency_code}`);
                  }}
                  className="bg-[#1652F0] text-white text-[14px] font-medium w-full py-3 rounded-[8px] hover:bg-[#1447D8] transition mb-4"
                >
                  معامله
                </button>

                {/* Additional Rows - 8 سطر تکراری */}
                <div className="space-y-3">
                  {Array.from({ length: 8 }).map((_, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-[8px]"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={c.icon}
                          alt={c.currency_code}
                          className="w-6 h-6 rounded-full"
                        />
                        <div className="text-right">
                          <div className="text-[12px] font-medium text-[#1E293B]">{c.currency_code}</div>
                          <div className="text-[11px] text-gray-500">{c.fa_name}</div>
                        </div>
                      </div>
                      <div className="text-[12px] text-[#1E293B] text-center">
                        {fmt(c.price)} $
                      </div>
                      <div
                        className={`text-[12px] font-medium ${
                          Number(c.daily_change_percent) >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {Number(c.daily_change_percent) >= 0 ? "+" : ""}
                        {c.daily_change_percent}٪
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}

        {/* Mobile Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
          {pageNumbers.map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition text-[12px]
                ${
                  page === p
                    ? "bg-[#1652F0] text-white border-[#1652F0]"
                    : "bg-white text-gray-600 border-[#E2E8F0] hover:bg-gray-100"
                }`}
            >
              {p.toLocaleString("fa-IR")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}