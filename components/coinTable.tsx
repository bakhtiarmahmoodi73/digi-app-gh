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
    const { data: responseData } = await axios.post(
      `https://b.wallet.ir/coinlist/list/`,
      {
        page: page,
        limit: "9",
        search: searchQuery,
      }
    );

    return responseData;
  };

  const {
    data: queryData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["coins", currentPage, search],
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

  useEffect(() => {
    if (search.trim() !== "") {
      setCurrentPage(1);
    }
  }, [search]);

  const displayData = useMemo(() => {
    return data;
  }, [data]);

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
        size: 0,
      },
      {
        accessorKey: "price",
        header: () => <div className=" ">ارزش دلاری</div>,
        cell: ({ row }) => (
          <div className="text-[16px] text-[#000000]">
            {row.original.price} $
          </div>
        ),
        size: 0,
      },
      {
        accessorKey: "daily_change_percent",
        header: () => <div className="">تغییر روزانه</div>,
        cell: ({ row }) => {
          const value = row.original.daily_change_percent;
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
        size: 0,
      },
      {
        accessorKey: "buy_irt_price",
        header: () => <div className="">خرید از والت</div>,
        cell: ({ row }) => (
          <div className="text-[16px] text-[#000000] ">
            {row.original.buy_irt_price} تومان
          </div>
        ),
        size: 0,
      },
      {
        accessorKey: "sell_irt_price",
        header: () => <div className="">فروش به والت</div>,
        cell: ({ row }) => (
          <div className="text-[16px] text-[#000000] ">
            {row.original.sell_irt_price} تومان
          </div>
        ),
        size: 0,
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
        size: 0,
      },
    ],
    [router, search]
  );

  const table = useReactTable({
    data: displayData,
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mobileGridClass = `
  grid 
  gap-x-0 gap-y-0 items-center 
  grid-cols-[minmax(120px,1fr)_minmax(80px,1fr)_minmax(80px,1fr)]
`;

  const desktopGridClass = `
    grid grid-cols-6 gap-0 items-center
    xl:grid-cols-[minmax(130px,1fr)_minmax(130px,1fr)_minmax(130px,1fr)_minmax(150px,1fr)_minmax(150px,1fr)_minmax(244px,1fr)]
  `;

  const getPaginationPages = () => {
    const pages = [];
    if (totalPages <= 1) {
      return [];
    }

    pages.push(1);

    if (currentPage > 2) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 2);
    const end = Math.min(totalPages - 1, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages >= 1) {
      pages.push(totalPages);
    }

    return pages.reverse();
  };

  return (
    <div className="  flex flex-col items-center xl:w-[calc(100%-300px) w-full ">
      <div className="hidden md:block md:w-full">
        <div
          className={`${desktopGridClass} bg-[#E3E7EC] border rounded-[8px] md:h-[70px] xl:h-[90px] text-[rgb(0,0,0)] font-[400]  xl:w-[calc(100%-300px) xl:mx-[150px]`}
        >
          <div className="flex  justify-center text-[14px] xl:text-[16px] font-iran-sans-regular ">
            نام رمز ارز
          </div>
          <div className="flex items-center justify-center text-[14px] xl:text-[16px] font-iran-sans-regular">
            ارزش دلاری
          </div>
          <div className="flex items-center justify-center text-[14px] xl:text-[16px] font-iran-sans-regular">
            تغییر روزانه
          </div>
          <div className="flex items-center justify-center text-[14px] xl:text-[16px] font-iran-sans-regular">
            خرید از والت
          </div>
          <div className="flex items-center justify-center text-[14px] xl:text-[16px] font-iran-sans-regular">
            فروش به والت
          </div>
          <div className="flex items-center justify-center xl:mb-[10px] md:ml-[14px] xl:ml-[8px]">
            <div className="flex items-center bg-white border rounded-[8px] md:h-[47px] xl:h-[63px] px-3 w-full xl:w-[244px] ">
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
        </div>

        <div className="bg-white   border border-[#F7F7F7]  xl:w-[calc(100%-300px) xl:mx-[150px]">
          {isLoading ? (
            <div className="text-center py-12 text-gray-500">
              در حال دریافت داده‌ها...
            </div>
          ) : displayData.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {search
                ? "نتیجه‌ای برای جستجوی شما یافت نشد."
                : "هیچ داده‌ای یافت نشد."}
            </div>
          ) : (
            displayData.map((row, index) => (
              <div
                key={row.id}
                onClick={() => onClickRow(row.id)}
                className={`${desktopGridClass} md:h-[81px] xl:h-[97px] transition cursor-pointer border-b border-[#E5E9F2] 
                  ${index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-[#FFFFFF]"}
                  ${
                    selectedId === row.id
                      ? "border-2 border-blue-400 shadow-md bg-blue-50"
                      : ""
                  }
                `}
              >
                <div className="flex items-center gap-3 md:mr-[11px] xl:mr-[26px]">
                  <img
                    src={row.icon}
                    alt={row.currency_code}
                    className="w-8 h-8 rounded-full flex-shrink-0"
                  />
                  <div className="text-right flex-1">
                    <div className="md:text-[12px] font-iran-sans-medium text-[#000000] leading-tight">
                      {row.fa_name}
                    </div>
                    <div className="md:text-[12px] md:mt-[5px] font-iran-sans-regular text-[#696464] leading-tight">
                      {row.currency_code}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="md:text-[12px] font-number-regular text-[#000000]">
                    {row.price} $
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div
                    className={`md:text-[12px] font-number-regular text-center ${
                      Number(row.daily_change_percent) >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {Number(row.daily_change_percent) >= 0 ? "+" : ""}
                    {row.daily_change_percent}٪
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="md:text-[12px] font-number-regular text-[#000000] text-center">
                    {row.buy_irt_price} تومان
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="md:text-[12px] font-number-regular text-center text-[#000000]">
                    {row.sell_irt_price} تومان
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/coin/${row.currency_code}`);
                    }}
                    className="bg-[#1652F0] text-[#EEF2F5] md:text-[14px] font-iran-sans-black rounded-[8px] hover:bg-[#1447D8] transition whitespace-nowrap md:w-[120px] md:h-[47px] xl:w-[130px]"
                  >
                    معامله
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center items-center gap-2 mt-6 relative z-50">
          {getPaginationPages().map((page, index) =>
            page === "..." ? (
              <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageChange(page as number)}
                className={`w-[31px] font-number-regular h-[31px] rounded-full flex items-center justify-center transition cursor-pointer relative z-50
                  ${
                    currentPage === page
                      ? "bg-[#1652F0] text-white border-[#1652F0]"
                      : "bg-[#EEF2F5] text-[#000000]"
                  }`}
              >
                {(page as number).toLocaleString("fa-IR")}
              </button>
            )
          )}
        </div>
      </div>

      <div className="w-full md:hidden">
        <div className="border border-[#F7F7F7]">
          {isLoading ? (
            <div className="text-center py-12 text-gray-500">
              در حال دریافت داده‌ها...
            </div>
          ) : displayData.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {search
                ? "نتیجه‌ای برای جستجوی شما یافت نشد."
                : "هیچ داده‌ای یافت نشد."}
            </div>
          ) : (
            displayData.map((row, index) => {
              const isSelected = selectedId === row.id;

              return (
                <div key={row.id}>
                  {isSelected ? (
                    <div
                      onClick={() => setSelectedId(null)}
                      className="bg-[#F7F7F7] border-b border-[#E5E9F2] cursor-pointer"
                    >
                      <div className="bg-[#E3E7EC] flex justify-between px-[20px] items-center h-[64px]">
                        <div className="text-[14px] font-iran-sans-regular font-[400] text-[#000000]">
                          نام رمز ارز
                        </div>
                        <div className="text-[14px] font-iran-sans-regular font-[400] text-[#000000]">
                          ارزش دلاری
                        </div>
                        <div className="text-[14px] font-iran-sans-regular font-[400] text-[#000000]">
                          تغییر روزانه
                        </div>
                      </div>

                      <div className="mt-[20px] px-4">
                        <div className="grid grid-cols-3 items-center mb-4">
                          <div className="flex items-center justify-start">
                            <div className="flex gap-[6px]">
                              <img
                                src={row.icon}
                                alt={row.currency_code}
                                className="w-8 h-8 rounded-full flex-shrink-0"
                              />
                              <div className="text-right">
                                <div className="text-[12px] font-iran-sans-medium text-[#000000] leading-tight">
                                  {row.fa_name}
                                </div>
                                <div className="text-[11px] font-iran-sans-regular mt-[5px] text-[#696464] leading-tight">
                                  {row.currency_code}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="text-[12px] font-number-regular text-center text-[#000000]">
                            {row.price} $
                          </div>
                          <div
                            className={`text-[14px] font-number-regular text-center ${
                              Number(row.daily_change_percent) >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {Number(row.daily_change_percent) >= 0 ? "+" : ""}
                            {row.daily_change_percent}٪
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-[23px]">
                          <span className="text-[12px] font-iran-sans-regular text-[#000000]">
                            فروش به والت:{" "}
                          </span>
                          <span className="text-[12px] font-number-regular text-[#000000]">
                            {row.sell_irt_price} تومان
                          </span>
                        </div>

                        <div className="flex justify-between items-center mt-[11px]">
                          <span className="text-[12px] font-iran-sans-regular text-[#000000]">
                            خرید از والت:
                          </span>
                          <span className="text-[12px] font-number-regular text-[#000000]">
                            {row.buy_irt_price} تومان
                          </span>
                        </div>
                      </div>

                      <div className="mt-[26px] mx-[13px] mb-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            router.push(`/coin/${row.currency_code}`);
                          }}
                          className="bg-[#1652F0] text-white text-[12px] font-iran-sans-black w-full h-[47px] rounded-[8px] hover:bg-[#1447D8] transition"
                        >
                          معامله
                        </button>
                      </div>
                    </div>
                  ) : (
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
                        <div className="text-right flex-col">
                          <div className="text-[12px] font-iran-sans-medium text-[#000000] leading-tight">
                            {row.fa_name}
                          </div>
                          <div className="text-[11px] mt-[5px] font-iran-sans-regular text-[#696464] leading-tight">
                            {row.currency_code}
                          </div>
                        </div>
                      </div>

                      <div className="text-[12px] font-number-regular text-[#000000] text-center">
                        {row.price} $
                      </div>

                      <div
                        className={`text-[12px] font-number-regular text-center ${
                          Number(row.daily_change_percent) >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {Number(row.daily_change_percent) >= 0 ? "+" : ""}
                        {row.daily_change_percent}٪
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
          {getPaginationPages().map((page, index) =>
            page === "..." ? (
              <span
                key={`ellipsis-mobile-${index}`}
                className="px-1 text-gray-500 text-[12px]"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageChange(page as number)}
                className={`w-8 h-8 rounded-full font-number-regular flex items-center justify-center border transition text-[12px] cursor-pointer
                  ${
                    currentPage === page
                      ? "bg-[#1652F0] text-white border-[#1652F0]"
                      : "bg-[#EEF2F5] text-[#000000] border-[#E2E8F0] hover:bg-gray-100"
                  }`}
              >
                {(page as number).toLocaleString("fa-IR")}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
