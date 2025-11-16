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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(9);

  const fetchData = async (page: number = 1, searchQuery: string = "") => {
    const { data: responseData } = await axios.post(`https://b.wallet.ir/coinlist/list/`, {
      page: page,
      limit: "9",
      search: searchQuery
    });
    
    return responseData;
  };

  const { data: queryData, isLoading, error } = useQuery({
    queryKey: ['coins', currentPage, search],
    queryFn: () => fetchData(currentPage, search),
  });

  useEffect(() => {
    if (queryData) {
      setData(queryData.items || []);
      setTotalPages(queryData.total_page || 9);
      setLoading(false);
    }
  }, [queryData]);

  useEffect(() => {
    if (error) {
      console.error(error);
      setData([]);
      setLoading(false);
    }
  }, [error]);

  const fmt = (v: string | number | undefined | null) => {
    if (v === undefined || v === null || v === "") return "-";
    const n = Number(v);
    if (Number.isNaN(n)) return String(v);
    return n.toLocaleString("fa-IR");
  };

  const filteredData = useMemo(() => {
    if (!search.trim()) return data;

    const q = search.trim().toLowerCase();
    return data.filter(
      (c: CoinRaw) =>
        (c.fa_name && c.fa_name.toLowerCase().includes(q)) ||
        (c.currency_code && c.currency_code.toLowerCase().includes(q))
    );
  }, [data, search]);

  const columns = useMemo<ColumnDef<CoinRaw>[]>(
    () => [
      {
        accessorKey: "fa_name",
        header: () => <div className="">نام رمز ارز</div>,
        cell: ({ row }) => (
          <div className="flex  items-center gap-3 w-full ">
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
        header: () => <div className=" ">ارزش دلاری</div>,
        cell: ({ getValue }) => (
          <div className="text-[16px] text-[#000000]">{fmt(getValue())} $</div>
        ),
        size: 130,
      },
      {
        accessorKey: "daily_change_percent",
        header: () => <div className="">تغییر روزانه</div>,
        cell: ({ getValue }) => {
          const value = getValue() as string;
          const change = Number(value);
          return (
            <div
              className={`text-[16px] font-medium text-center w-full ${
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
        header: () => <div className="">خرید از والت</div>,
        cell: ({ getValue }) => (
          <div className="text-[16px] text-[#000000] ">
            {fmt(getValue())} تومان
          </div>
        ),
        size: 150,
      },
      {
        accessorKey: "sell_irt_price",
        header: () => <div className="">فروش به والت</div>,
        cell: ({ getValue }) => (
          <div className="text-[16px] text-[#000000] ">
            {fmt(getValue())} تومان
          </div>
        ),
        size: 150,
      },
      {
        id: "actions",
        header: () => (
          <div className="flex bg-green-400 w-full">
            <div className="flex items-center bg-white border rounded-[8px] xl:h-[45px] px-3 w-full max-w-[250px]">
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
        pageSize: 9,
      },
    },
  });

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).reverse();

  const onClickRow = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const gridClass = `
  grid 
  gap-x-0 gap-y-0 items-center 
  md:grid-cols-[repeat(6,minmax(112px,1fr))]
 
`;

  const mobileGridClass = `
  grid 
  gap-x-0 gap-y-0 items-center 
  grid-cols-[minmax(120px,1fr)_minmax(80px,1fr)_minmax(80px,1fr)]
`;

  const selectedRow = selectedId ? filteredData.find(row => row.id === selectedId) : null;




  const getPaginationPages = () => {
    const pages = [];
  
    pages.push(1);
  
    if (currentPage > 2) {
      pages.push("...");
    }
  
    const start = Math.max(2, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);
  
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
  
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }
  
    if (totalPages >= 1) {
      pages.push(totalPages);
    }
  
    return pages.reverse(); 
  };
  



  return (
    <div className="  flex flex-col items-center     xl:w-[calc(100%-300px) w-full ">

      <div className="hidden md:block  md:w-full ">
        <div className={` bg-[#E3E7EC] border rounded-[8px] md:h-[70px]  xl:h-[90px] 

    ${gridClass}

      text-[#000000] font-[400]  xl:w-[calc(100%-300px) xl:mx-[150px] `}>
          
            <div className=" text-[#000000] md:text-[14px] xl:text-[16px] md:mr-[30px] xl:mr-0 xl:text-center">نام رمز ارز</div>
            <div className="text-[#000000] md:text-[14px] xl:text-[16px] text-center">ارزش دلاری</div>
            <div className="text-[#000000] md:text-[14px] xl:text-[16px] text-center">تغییر روزانه</div>
            <div className="text-[#000000] md:text-[14px] xl:text-[16px] text-center">خرید از والت</div>
            <div className="text-[#000000] md:text-[14px] xl:text-[16px] text-center">فروش به والت</div>
          

          <div className="flex md:ml-[14px]">
            <div className="flex items-center  bg-white border rounded-[8px] md:h-[47px]  xl:h-[63px] px-3 xl:w-[244px] ">
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
                className="outline-none md:text-[12px] w-full placeholder-gray-400 bg-transparent"
              />
            </div>
          </div>
        </div>

        <div className="bg-white   border border-[#F7F7F7]  xl:w-[calc(100%-300px) xl:mx-[150px]">
          {isLoading ? (
            <div className="text-center py-12 text-gray-500">
              در حال دریافت داده‌ها...
            </div>
          ) : data.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              هیچ داده‌ای یافت نشد.
            </div>
          ) : (


            data.map((row, index) => (
              <div
                key={row.id}
                onClick={() => onClickRow(row.id)}
                className={`md:h-[81px]  xl:pr-[26px] xl:h-[97px] transition cursor-pointer border-b border-[#E5E9F2] 
                  ${gridClass}
                  ${index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-[#FFFFFF]"}
                  ${
                    selectedId === row.id
                      ? "border-2 border-blue-400 shadow-md bg-blue-50"
                      : ""
                  }`}
              >
                <div className="flex  items-center md:gap-[6px] text-center md:mr-[11px] ">
                  <img
                    src={row.icon}
                    alt={row.currency_code}
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="text-right flex-1">
                    <div className="md:text-[12px] font-medium text-[#000000] leading-tight">
                      {row.fa_name}
                    </div>
                    <div className="md:text-[12px] md:mt-[5px] text-[#696464] leading-tight">
                      {row.currency_code}
                    </div>
                  </div>
                </div>

                <div className="md:text-[12px] text-[#000000] xl:pl-10 text-center ">
                  {fmt(row.price)} $
                </div>

                <div
                  className={`md:text-[12px] font-[400] text-center ${
                    Number(row.daily_change_percent) >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {Number(row.daily_change_percent) >= 0 ? "+" : ""}
                  {row.daily_change_percent}٪
                </div>

                <div className="md:text-[12px] text-[#000000] text-center">
                  {fmt(row.buy_irt_price)} تومان
                </div>

                <div className="md:text-[10px] lg:text-[12px] text-[#000000] text-center">
                  {fmt(row.sell_irt_price)} تومان
                </div>

                <div className="flex justify-center md:ml-[14px]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/coin/${row.currency_code}`);
                    }}
                    className="bg-[#1652F0] text-[#EEF2F5] md:text-[14px] font-[900] rounded-[8px] hover:bg-[#1447D8] transition whitespace-nowrap md:w-[130px] md:h-[47px]"
                  >
                    معامله
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center items-center gap-2 mt-6 relative z-50">
          {getPaginationPages().map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-500">...</span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageChange(page as number)}
                className={`w-[31px] h-[31px] rounded-full flex items-center justify-center  transition cursor-pointer relative z-50
                  ${
                    currentPage === page
                      ? "bg-[#1652F0] text-white border-[#1652F0]"
                      : "bg-[#EEF2F5] text-[#000000]"
                  }`}
              >
                {(page as number).toLocaleString("fa-IR")}
              </button>
            )
          ))}
        </div>
      </div>

      <div className="w-full md:hidden">
        {selectedRow && (
          <div className=" bg-[#F7F7F7] rounded-[8px]   overflow-hidden">
            <div className="bg-[#E3E7EC]  flex  justify-between px-[20px] items-center h-[64px] ">
              <div className="text-[14px] font-[400] text-[#000000]">نام رمز ارز</div>
              <div className="text-[14px] font-[400] text-[#000000]">ارزش دلاری</div>
              <div className="text-[14px] font-[400] text-[#000000]">تغییر روزانه</div>
            </div>

            <div className="mt-[20px]">
              <div className=" grid grid-cols-3 minmax(140px, 1fr)] gap-x-[0px] sm:gap-x-[130px] items-center  mb-4">
                <div className="flex items-center justify-around gap-3">
                  <div className="flex gap-[6px]">
                  <img
                    src={selectedRow.icon}
                    alt={selectedRow.currency_code}
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="text-right">
                    <div className="text-[12px] font-medium text-[#000000]  leading-tight">
                      {selectedRow.fa_name}
                    </div>
                    <div className="text-[11px] mt-[5px] text-[#696464] leading-tight">
                      {selectedRow.currency_code}
                    </div>
                    </div>
                  </div>

                </div>

                <div className="text-[12px] font-medium text-center text-[#000000] flex  items-center justify-center ">
                  {fmt(selectedRow.price)} $
                </div>
                <div
                  className={`text-[14px] font-[400] flex items-center justify-center ${
                    Number(selectedRow.daily_change_percent) >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {Number(selectedRow.daily_change_percent) >= 0 ? "+" : ""}
                  {selectedRow.daily_change_percent}٪
                </div>
              </div>

              <div className="flex justify-between items-center mt-[23px] mx-[13px]">
                <span className="text-[12px] font-[400] text-[#000000]">
                  فروش به والت
                </span>
                <span className="text-[12px] font-[400] text-[#000000]">
                  {fmt(selectedRow.sell_irt_price)} تومان
                </span>
              </div>

              <div className="flex justify-between items-center mt-[11px] mx-[13px]">
                <span className="text-[12px] font-[400] text-[#000000]">
                  خرید از والت
                </span>
                <span className="text-[12px] font-[400] text-[#000000]">
                  {fmt(selectedRow.buy_irt_price)} تومان
                </span>
              </div>
            </div>

            <div className="mt-[26px] mx-[13px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/coin/${selectedRow.currency_code}`);
                }}
                className="bg-[#1652F0] text-white text-[12px] font-[900] w-full h-[47px] rounded-[8px] hover:bg-[#1447D8] transition"
              >
                معامله
              </button>
            </div>
          </div>
        )}

        
        <div className="border border-[#F7F7F7]">
          {isLoading ? (
            <div className="text-center py-12 text-gray-500">
              در حال دریافت داده‌ها...
            </div>
          ) : filteredData.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              هیچ داده‌ای یافت نشد.
            </div>
          ) : (
            filteredData
              .filter(row => row.id !== selectedId) 
              .map((row, index) => {
                return (
                  <div key={row.id}>
                    <div
                      onClick={() => onClickRow(row.id)}
                      className={`h-[70px] transition cursor-pointer border-b border-[#E5E9F2] px-4 
                        ${mobileGridClass}
                        ${index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-[#FFFFFF]"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={row.icon}
                          alt={row.currency_code}
                          className="w-8 h-8 rounded-full flex-shrink-0"
                        />
                        <div className="text-right flex-1">
                          <div className="text-[12px] font-medium text-[#000000] leading-tight">
                            {row.fa_name}
                          </div>
                          <div className="text-[11px] text-[#696464] leading-tight">
                            {row.currency_code}
                          </div>
                        </div>
                      </div>

                      <div className="text-[12px] text-[#000000] text-center">
                        {fmt(row.price)} $
                      </div>

                      <div
                        className={`text-[12px] font-[400] text-center ${
                          Number(row.daily_change_percent) >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {Number(row.daily_change_percent) >= 0 ? "+" : ""}
                        {row.daily_change_percent}٪
                      </div>
                    </div>
                  </div>
                );
              })
          )}
        </div>

        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
          {getPaginationPages().map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-mobile-${index}`} className="px-1 text-gray-500 text-[12px]">...</span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageChange(page as number)}
                className={`w-8 h-8 rounded-full flex items-center justify-center border transition text-[12px] cursor-pointer
                  ${
                    currentPage === page
                      ? "bg-[#1652F0] text-white border-[#1652F0]"
                      : "bg-white text-gray-600 border-[#E2E8F0] hover:bg-gray-100"
                  }`}
              >
                {(page as number).toLocaleString("fa-IR")}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
}