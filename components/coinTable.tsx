"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";

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
  const [data, setData] = useState<CoinRaw[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://b.wallet.ir/coinlist/list/?page=1&limit=9`
      );
      if (!res.ok) throw new Error("خطا در دریافت داده‌ها");
      const responseData = await res.json();
      setData(responseData.items || []);
    } catch (err) {
      console.error(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fmt = (v: string | number | undefined | null) => {
    if (v === undefined || v === null || v === "") return "-";
    const n = Number(v);
    if (Number.isNaN(n)) return String(v);
    return n.toLocaleString("fa-IR");
  };

  const filteredData = useMemo(() => {
    if (!search.trim()) return data;
    
    const q = search.trim().toLowerCase();
    return data.filter((c: CoinRaw) =>
      (c.fa_name && c.fa_name.toLowerCase().includes(q)) ||
      (c.currency_code && c.currency_code.toLowerCase().includes(q))
    );
  }, [data, search]);

  const columns = useMemo<ColumnDef<CoinRaw>[]>(
    () => [
      {
        accessorKey: "fa_name",
        header: () => (
          <div className="xl:w-full text-right pr-4">نام رمز ارز</div>
        ),
        cell: ({ row }) => (
          <div className="flex  items-center gap-3 w-full pr-4">
            <img
              src={row.original.icon}
              alt={row.original.currency_code}
              className="w-8 h-8 rounded-full flex-shrink-0"
            />
            <div className="text-right flex-1">
              <div className="text-[14px] font-medium text-[#1E293B] leading-tight">
                {row.original.fa_name}
              </div>
              <div className="text-[13px] text-gray-500 leading-tight">
                {row.original.currency_code}
              </div>
            </div>
          </div>
        ),
        size: 280,
      },
      {
        accessorKey: "price",
        header: () => (
          <div className="w-full text-center">ارزش دلاری</div>
        ),
        cell: ({ getValue }) => (
          <div className="text-[14px] text-[#1E293B] text-center w-full">
            {fmt(getValue())} $
          </div>
        ),
        size: 130,
      },
      {
        accessorKey: "daily_change_percent",
        header: () => (
          <div className="w-full text-center">تغییر روزانه</div>
        ),
        cell: ({ getValue }) => {
          const value = getValue() as string;
          const change = Number(value);
          return (
            <div
              className={`text-[14px] font-medium text-center w-full ${
                change >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {change >= 0 ? "+" : ""}
              {value}٪
            </div>
          );
        },
        size: 130,
      },
      {
        accessorKey: "buy_irt_price",
        header: () => (
          <div className="w-full text-center">خرید از والت</div>
        ),
        cell: ({ getValue }) => (
          <div className="text-[14px] text-[#1E293B] text-center w-full">
            {fmt(getValue())} تومان
          </div>
        ),
        size: 150,
      },
      {
        accessorKey: "sell_irt_price",
        header: () => (
          <div className="w-full text-center">فروش به والت</div>
        ),
        cell: ({ getValue }) => (
          <div className="text-[14px] text-[#1E293B] text-center w-full">
            {fmt(getValue())} تومان
          </div>
        ),
        size: 150,
      },
      {
        id: "actions",
        header: () => (
          <div className="flex justify-end w-full">
            <div className="flex items-center bg-white border rounded-[8px] h-[45px] px-3 w-full max-w-[250px]">
              <svg
                className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0"
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
                }}
                className="outline-none text-[13px] w-full placeholder-gray-400 bg-transparent"
              />
            </div>
          </div>
        ),
        cell: ({ row }) => (
          <div className="flex justify-end w-full">
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/coin/${row.original.currency_code}`);
              }}
              className="bg-[#1652F0] text-white text-[14px] font-medium px-6 py-2 rounded-[8px] hover:bg-[#1447D8] transition whitespace-nowrap min-w-[120px]"
            >
              معامله
            </button>
          </div>
        ),
        size: 250,
      },
    ],
    [router, search]
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const pageNumbers = Array.from(
    { length: table.getPageCount() },
    (_, i) => i + 1
  ).reverse();

  const onClickRow = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className=" bg-red-200 mx-auto flex flex-col items-center min-h-screen mt-4 w-full max-w-[1140px] xl:px-0">
      {/* Desktop Version */}
      <div className="hidden lg:block w-full">
        {/* Header با همترازی دقیق */}
        <div 
          className="grid items-center bg-[#E3E7EC] border rounded-[8px] h-[70px] px-6 text-[#1E293B] font-[500] text-[15px] mb-4"
          style={{
            gridTemplateColumns: '130px 130px 130px 150px 150px 250px'
          }}
        >
          <div className="text-right pr-4">نام رمز ارز</div>
          <div className="text-center">ارزش دلاری</div>
          <div className="text-center">تغییر روزانه</div>
          <div className="text-center">خرید از والت</div>
          <div className="text-center">فروش به والت</div>
          <div className="flex justify-end">
            <div className="flex items-center bg-white border rounded-[8px] h-[45px] px-3 w-full max-w-[250px]">
              <svg
                className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0"
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
                  table.setPageIndex(0);
                }}
                className="outline-none text-[13px] w-full placeholder-gray-400 bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Table Body با همترازی کامل */}
        <div className="bg-white rounded-[10px] shadow-sm border border-[#E5E9F2] overflow-hidden">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="grid items-center h-[75px] animate-pulse border-b border-[#E5E9F2] px-6"
                style={{
                  gridTemplateColumns: '130px 130px 130px 150px 150px 250px'
                }}
              >
                <div className="flex items-center gap-3 pr-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2 flex-1">
                    <div className="w-24 h-4 bg-gray-200 rounded"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-4 bg-gray-200 rounded mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-4 bg-gray-200 rounded mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-4 bg-gray-200 rounded mx-auto"></div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-4 bg-gray-200 rounded mx-auto"></div>
                </div>
                <div className="flex justify-end">
                  <div className="w-24 h-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))
          ) : table.getRowModel().rows.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              هیچ داده‌ای یافت نشد.
            </div>
          ) : (
            table.getRowModel().rows.map((row, index) => (
              <div
                key={row.id}
                onClick={() => onClickRow(row.original.id)}
                className={`grid items-center h-[75px] transition cursor-pointer border-b border-[#E5E9F2] px-6
                  ${index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-white"}
                  ${
                    selectedId === row.original.id
                      ? "border-2 border-blue-400 shadow-md bg-blue-50"
                      : ""
                  }`}
                style={{
                  gridTemplateColumns: '130px 130px 130px 150px 150px 250px'
                }}
              >
                {/* نام رمز ارز */}
                <div className="flex items-center gap-3 pr-0">
                  <img
                    src={row.original.icon}
                    alt={row.original.currency_code}
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="text-right flex-1">
                    <div className="text-[14px] font-medium text-[#1E293B] leading-tight">
                      {row.original.fa_name}
                    </div>
                    <div className="text-[13px] text-gray-500 leading-tight">
                      {row.original.currency_code}
                    </div>
                  </div>
                </div>

                {/* ارزش دلاری */}
                <div className="text-[14px] text-[#1E293B] text-center">
                  {fmt(row.original.price)} $
                </div>

                {/* تغییر روزانه */}
                <div
                  className={`text-[14px] font-medium text-center ${
                    Number(row.original.daily_change_percent) >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {Number(row.original.daily_change_percent) >= 0 ? "+" : ""}
                  {row.original.daily_change_percent}٪
                </div>

                {/* خرید از والت */}
                <div className="text-[14px] text-[#1E293B] text-center">
                  {fmt(row.original.buy_irt_price)} تومان
                </div>

                {/* فروش به والت */}
                <div className="text-[14px] text-[#1E293B] text-center">
                  {fmt(row.original.sell_irt_price)} تومان
                </div>

                {/* عملیات - دقیقاً زیر سرچ */}
                <div className="flex justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/coin/${row.original.currency_code}`);
                    }}
                    className="bg-[#1652F0] text-white text-[14px] font-medium px-6 py-2 rounded-[8px] hover:bg-[#1447D8] transition whitespace-nowrap min-w-[120px]"
                  >
                    معامله
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => table.setPageIndex(page - 1)}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition
                ${
                  table.getState().pagination.pageIndex === page - 1
                    ? "bg-[#1652F0] text-white border-[#1652F0]"
                    : "bg-white text-gray-600 border-[#E2E8F0] hover:bg-gray-100"
                }`}
            >
              {page.toLocaleString("fa-IR")}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block lg:hidden w-full">
        <div className="bg-[#E3E7EC] rounded-[8px] h-[50px] px-4 mb-3">
          <div className="flex justify-between items-center h-full">
            <div className="text-[14px] text-[#000000] font-medium">نام رمز ارز</div>
            <div className="text-[14px] text-[#000000] font-medium">ارزش دلاری</div>
            <div className="text-[14px] text-[#000000] font-medium">تغییر روزانه</div>
          </div>
        </div>

        {/* Mobile Search Box */}
        <div className="flex items-center bg-white border rounded-[8px] h-[45px] px-3 mb-4">
          <svg
            className="w-4 h-4 text-gray-400 ml-2"
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
              table.setPageIndex(0);
            }}
            className="outline-none text-[13px] w-full placeholder-gray-400 bg-transparent"
          />
        </div>

        {loading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-[10px] shadow-sm border border-[#E5E9F2] p-4 mb-4 animate-pulse"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="w-20 h-4 bg-gray-200 rounded"></div>
                    <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="text-left space-y-2">
                  <div className="w-16 h-4 bg-gray-200 rounded"></div>
                  <div className="w-12 h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  <div className="w-20 h-3 bg-gray-200 rounded"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  <div className="w-20 h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="w-full h-10 bg-gray-300 rounded mt-4"></div>
            </div>
          ))
        ) : table.getRowModel().rows.length === 0 ? (
          <div className="text-center py-8 text-gray-500 bg-white rounded-[10px] border border-[#E5E9F2]">
            هیچ داده‌ای یافت نشد.
          </div>
        ) : (
          table.getRowModel().rows.map((row) => {
            const isSelected = selectedId === row.original.id;
            return (
              <div
                key={row.id}
                onClick={() => onClickRow(row.original.id)}
                className={`bg-white rounded-[10px] shadow-sm border border-[#E5E9F2] p-4 mb-4 transition cursor-pointer
                  ${
                    selectedId === row.original.id
                      ? "border-2 border-blue-400 shadow-md bg-blue-50"
                      : ""
                  }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={row.original.icon}
                      alt={row.original.currency_code}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="text-[14px] font-medium text-[#1E293B]">
                        {row.original.fa_name}
                      </div>
                      <div className="text-[12px] text-gray-500">
                        {row.original.currency_code}
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-[14px] font-medium text-[#1E293B]">
                      {fmt(row.original.price)} $
                    </div>
                    <div
                      className={`text-[12px] font-medium ${
                        Number(row.original.daily_change_percent) >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {Number(row.original.daily_change_percent) >= 0 ? "+" : ""}
                      {row.original.daily_change_percent}٪
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-gray-600">خرید از والت</span>
                    <span className="text-[13px] font-medium text-[#1E293B]">
                      {fmt(row.original.buy_irt_price)} تومان
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-gray-600">فروش به والت</span>
                    <span className="text-[13px] font-medium text-[#1E293B]">
                      {fmt(row.original.sell_irt_price)} تومان
                    </span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/coin/${row.original.currency_code}`);
                  }}
                  className="bg-[#1652F0] text-white text-[14px] font-medium w-full py-3 rounded-[8px] hover:bg-[#1447D8] transition"
                >
                  معامله
                </button>
              </div>
            );
          })
        )}

        {/* Mobile Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => table.setPageIndex(page - 1)}
              className={`w-8 h-8 rounded-full flex items-center justify-center border transition text-[12px]
                ${
                  table.getState().pagination.pageIndex === page - 1
                    ? "bg-[#1652F0] text-white border-[#1652F0]"
                    : "bg-white text-gray-600 border-[#E2E8F0] hover:bg-gray-100"
                }`}
            >
              {page.toLocaleString("fa-IR")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}