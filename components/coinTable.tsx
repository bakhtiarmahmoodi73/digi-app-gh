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
      const useLimit = fetchAllWhenSearch ? 1 : limit;
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

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).reverse();

  return (
    <div className="relative mx-auto flex flex-col items-center min-h-screen mt-4 w-[365px]  ">
      <div className="hidden md:flex flex-col items-center md:w-[800px] lg:w-[1200px]    ">
        <div
          className="flex items-center md:gap-8 lg:gap-[98px] xl:gap-32 xl:px-6 bg-[#E3E7EC] border  rounded-[8px]
          xl:w-[1200px] h-[70px] md:px-2 text-[#1E293B] font-[500] text-[15px] mb-0"
        >
          <div className="xl:w-[120px]">نام رمز ارز</div>
          <div className="xl:w-[130px]">ارزش دلاری</div>
          <div className="xl:w-[130px]">تغییر روزانه</div>
          <div className="xl:w-[150px]">خرید از والت</div>
          <div className="xl:w-[180px]">فروش به والت</div>
          <div className="flex md:w-[150px] xl:w-[220px] items-center  bg-[#FFFFFF] border  rounded-[8px] w-[250px] h-[45px] px-2">
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

        <div className="bg-[#FFFFFF] md:mx-auto md:w-[85%] lg:w-[85%] xl:w-full lg:mx-auto w-[1130px] rounded-[10px] shadow-sm border border-[#E5E9F2] divide-y divide-[#E5E9F2]">
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
                      ${idx % 2 === 0 ? "bg-[#F7F7F7]" : "bg-[#FFFFFF]"}
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
                      className="bg-[#1652F0] xl:w-[120px] text-white text-[14px] font-medium px-6 py-2 rounded-[8px] hover:bg-[#1447D8] transition"
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

      <div className="block  sm:ml-16 sm:w-[500px]  md:hidden w-full px-4">
        <div className="relative sm:w-[550px]  top-[0px] bg-[#E3E7EC] rounded-[8px] h-[64px] ">
          <div className="flex justify-between items-center h-[64px] mx-4">
            <div className="">
              <div className="text-[14px] text-[#000000]">نام رمز ارز</div>
            </div>
            <div className="">
              <div className="text-[14px] text-[#000000]">ارزش دلاری</div>
            </div>
            <div className="">
              <div className="text-[14px] text-[#000000]">تغییر روزانه</div>
            </div>
          </div>
        </div>

        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-[10px] shadow-sm border border-[#E5E9F2] p-4 mb-4 animate-pulse"
            >
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
                className={`rounded-[10px] sm:w-[550px] shadow-sm border border-[#E5E9F2] overflow-hidden mb-4 transition cursor-pointer
                  ${isSelected ? "border border-blue-400 shadow-md" : ""}`}
              >
                <div className="bg-[#f7f7f7] ">
                  <div className="flex justify-between gap-4 items-center mb-4  ">
                    <img
                      src={c.icon}
                      alt={c.currency_code}
                      className="w-8 h-8 mr-2 rounded-full mt-6"
                    />
                    <div className="text-left  mt-4">
                      <div className="text-[12px] text-[#000000]">
                        {c.fa_name}
                      </div>
                      <div className="text-[14px] font-medium text-[#000000]">
                        {c.currency_code}
                      </div>
                    </div>
                    <div className="ml-auto w-[100px] mr-4 sm:mr-32  ">
                      ${fmt(c.price)}
                    </div>
                    <div
                      className={`text-[12px] font-medium ml-4 ${
                        Number(c.daily_change_percent) >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {Number(c.daily_change_percent) >= 0 ? "+" : ""}
                      {c.daily_change_percent}٪
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[13px] mr-2 text-[#000000]">
                        فروش به والت
                      </span>
                      <span className="text-[13px] ml-2 font-medium text-[#000000]">
                        {fmt(c.sell_irt_price)} تومان
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[13px] mr-2 text-[#000000]">
                        خرید از والت
                      </span>
                      <span className="text-[13px] ml-2 font-medium text-[#000000]">
                        {fmt(c.buy_irt_price)} تومان
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/coin/${c.currency_code}`);
                    }}
                    className="bg-[#1652f0] text-[#ffffff] text-[14px] font-medium w-full py-3 rounded-[8px] hover:bg-gray-100 transition"
                  >
                    معامله
                  </button>
                </div>

                <div>
                  {Array.from({ length: 8 }).map((_, rowIdx) => (
                    <div
                      key={rowIdx}
                      className={`flex justify-between items-center p-3 ${
                        rowIdx % 2 === 0 ? "bg-white" : "bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={c.icon}
                          alt={c.currency_code}
                          className="w-6 h-6 rounded-full"
                        />
                        <div className="text-right">
                          <div className="text-[12px] font-medium text-[#1E293B]">
                            {c.currency_code}
                          </div>
                          <div className="text-[11px] text-gray-500">
                            {c.fa_name}
                          </div>
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
