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

  // 🟢 فقط این خط تغییر داده شد (limit را از 10 به 1 کم کردیم)
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
    <div className="">
      
      <div className="absolute flex items-center laptop:pr-8 laptop:pl-2 justify-between bg-[#E3E7EC] rounded-[8px] laptop:w-[1130px] laptop:h-[90px] laptop:top-[275px] laptop:left-[38px] tablet:w-[734px] tablet:h-[70px] tablet:pr-6 tablet:pl-2 tablet:left-[10px] mobile:w-[335px] mobile:left-[20px] mobile:h-[64px] mobile:top-[200px] mobile:px-6 ">
        <div className="text-[#000000] font-[400] laptop:text-[16px] tablet:text-[14px]  mobile:text-[14px]  ">نام رمز ارز</div>
        
        <div className="text-[#000000] font-[400] laptop:text-[16px] tablet:text-[14px] mobile:text-[14px]">ارزش دلاری</div>
        <div className="text-[#000000] font-[400] laptop:text-[16px] tablet:text-[14px] mobile:text-[14px]">تغییر روزانه</div>
        <div className="text-[#000000] font-[400] laptop:text-[16px] tablet:text-[14px] mobile:hidden">خرید از والت</div>
        <div className="text-[#000000] font-[400] laptop:text-[16px] tablet:text-[14px] mobile:hidden">فروش به والت</div>
        
        <div className="mobile:hidden flex items-center gap-2 bg-[#ffffff] text-[#696464] rounded-[8px] px-2 laptop:w-[244px] laptop:h-[63px] tablet:w-[190px] tablet:gap- tablet:h-[47px]">
          <svg
            className="laptop:w-3.5 h-3.5 text-gray-400"
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
            className="outline-none text-[12px] placeholder-gray-400"
          />
        </div> 

      </div>

      <div className="absolute  mobile:hidden rounded-[8px] space-y-2 bg-[#F7F7F7] laptop:w-[1138px] laptop:h-[750px] laptop:top-[366px] tablet:w-[734px] tablet:h-[739px] tablet:top-[328px] tablet:left-[10px]  ">
      
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 bg-[#F7F7F7]  rounded-md animate-pulse"
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
          displayed.flatMap((c) => Array.from({ length: 9 }, () => c)).map((c, idx) => {
            const isSelected = selectedId === c.id;
            const bg = idx % 2 === 0 ? "bg-[#f7f7f7]" : "bg-[#ffffff]";
            return (
              <div
                key={`${c.id}-${idx}`}
                onClick={() => onClickRow(c.id)}
                className={`flex items-center  h-[80px] gap-4 p-3 border ${
                  isSelected
                    ? "border-blue-400 shadow-md"
                    : "border-transparent"
                } rounded-lg transition cursor-pointer ${bg} hover:border-blue-200`}
              >
                <div className=" mobile:top-[600px] mobile:left-[20px] mobile:absolute w-15  flex-shrink-0 flex items-center justify-end gap-3">
                  <img
                    src={c.icon}
                    alt={c.currency_code}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-right">
                    <div className="text-xs font-medium text-[#000000]">
                      {c.fa_name}
                    </div>
                    <div className="text-xs text-gray-400">
                      {c.currency_code}
                    </div>
                  </div>
                </div>



                <div className="flex justify-between items-center">
                  <div className="mobile:hidden absolute laptop:left-[890px] text-center laptop:text-[14px] text-[#000000] tablet:left-[560px] tablet:text-[11px] ">
                    {fmt(c.price)} $
                  </div>
                  <div
                    className={`mobile:hidden absolute laptop:left-[720px] text-center laptop:text-[14px] text-[#000000] tablet:left-[470px] tablet:text-[11px]">
 ${
                      Number(c.daily_change_percent) >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {Number(c.daily_change_percent) >= 0 ? "+" : ""}
                    {c.daily_change_percent}٪
                  </div>

                  <div className="mobile:hidden absolute laptop:left-[530px] text-center laptop:text-[14px] text-[#000000] tablet:left-[340px] tablet:text-[11px] ">
                    {fmt(c.buy_irt_price)} تومان
                  </div>
                  <div className="mobile:hidden absolute laptop:left-[340px] text-center laptop:text-[14px] text-[#000000] tablet:left-[220px] tablet:text-[11px] ">
                    {fmt(c.sell_irt_price)} تومان
                  </div>
                </div>

                

                <div className="mobile:hidden absolute laptop:left-[50px] w-[130px] tablet:left-[30px] flex-shrink-0 mr-32 ">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/coin/${c.currency_code}`);
                    }}
                    className="bg-[#1652f0] text-[#ffffff] px-10 py-2 rounded-[8px] text-[14px] hover:bg-blue-700 transition"
                  >
                    معامله
                  </button>
                </div>

       

              </div>
            );
          })
        )}
      </div>

      <div className="hidden mobile:flex mobile:absolute">
  <button
    onClick={(e) => {
      e.stopPropagation();
      if (displayed.length > 0)
        router.push(`/coin/${displayed[0].currency_code}`);
    }}
    className="absolute bg-[#1652f0] text-[#ffffff] text-[12px]  rounded-[8px]  hover:bg-blue-700 transition w-[307px] h-[47px] top-[250px] "
  >
    معامله
  </button>
</div>

      <div className="absolute w-[240px] h-[31px] laptop:top-[1140px] laptop:left-[450px] tablet:left-[250px] tablet:top-[1100px] flex justify-center items-center gap-3 mt-6 mobile:top-[1150px] mobile:left-[60px]">
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
