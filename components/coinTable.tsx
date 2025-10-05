// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { useRouter } from "next/navigation";
// import {
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// type Coin = {
//   id: string;
//   currency_code: string;
//   name: string;
//   symbol: string;
//   price_usd: number;
//   change_24h: number;
//   buy_price: number;
//   sell_price: number;
//   icon: string;
// };

// export default function CoinTable() {
//   const router = useRouter();
//   const [coins, setCoins] = useState<Coin[]>([]);
//   const [page, setPage] = useState(1);
//   const limit = 10;
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCoins = async () => {
//       try {
//         const res = await fetch(
//           `https://b.wallet.ir/coinlist/list/?page=${page}&limit=${limit}`
//         );
//         if (!res.ok) throw new Error("خطا در دریافت داده‌ها");
//         const data = await res.json();

//         const formatted: Coin[] = (data.items || []).map((item: any) => ({
//           id: item.id.toString(),
//           name: item.fa_name,
//           symbol: item.currency_code,
//           price_usd: Number(item.price),
//           change_24h: Number(item.daily_change_percent),
//           buy_price: Number(item.buy_irt_price),
//           sell_price: Number(item.sell_irt_price),
//           icon: item.icon,
//           currency_code: item.currency_code,
//         }));

//         setCoins(formatted);
//       } catch (err) {
//         console.error(err);
//         setCoins([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     setLoading(true);
//     fetchCoins();
//   }, [page]);

//   const columns: ColumnDef<Coin>[] = [
//     {
//       accessorKey: "icon",
//       header: "",
//       cell: ({ getValue }) => (
//         <img
//           src={getValue<string>()}
//           alt="icon"
//           className="w-6 h-6 mx-auto rounded-full"
//         />
//       ),
//     },
//     { accessorKey: "name", header: "نام رمز ارز" },
//     { accessorKey: "symbol", header: "نماد" },
//     {
//       accessorKey: "price_usd",
//       header: "ارزش دلاری",
//       cell: ({ getValue }) =>
//         getValue<number>() ? `${getValue<number>()?.toLocaleString()} $` : "-",
//     },
//     {
//       accessorKey: "change_24h",
//       header: "تغییر روزانه",
//       cell: ({ getValue }) => {
//         const val = getValue<number>();
//         if (val === undefined || val === null) return "-";
//         return (
//           <span className={val >= 0 ? "text-green-600" : "text-red-600"}>
//             {val}%
//           </span>
//         );
//       },
//     },
//     {
//       accessorKey: "buy_price",
//       header: "خرید به والت",
//       cell: ({ getValue }) =>
//         getValue<number>()
//           ? `${getValue<number>()?.toLocaleString()} تومان`
//           : "-",
//     },
//     {
//       accessorKey: "sell_price",
//       header: "فروش به والت",
//       cell: ({ getValue }) =>
//         getValue<number>()
//           ? `${getValue<number>()?.toLocaleString()} تومان`
//           : "-",
//     },
//     {
//       id: "actions",
//       header: "",
//       cell: ({ row }) => (
//         <button
//           onClick={() => router.push(`/coin/${row.original.currency_code}`)}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//         >
//           معامله
//         </button>
//       ),
//     },
//   ];

//   const table = useReactTable({
//     data: coins,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   if (loading) return <p className="text-center p-4">در حال بارگذاری...</p>;

//   return (
//     <div className="p-4">
//       <table className="w-full border border-gray-200 rounded-lg shadow-sm">
//         <thead className="bg-gray-100 text-gray-700">
//           {table.getHeaderGroups().map((hg) => (
//             <tr key={hg.id}>
//               {hg.headers.map((h) => (
//                 <th
//                   key={h.id}
//                   className="p-3 border text-center text-sm font-bold"
//                 >
//                   {flexRender(h.column.columnDef.header, h.getContext())}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map((row, idx) => (
//             <tr
//               key={row.id}
//               className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
//             >
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id} className="p-3 border text-center text-sm">
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="flex justify-center items-center gap-4 mt-6">
//         <button
//           disabled={page === 1}
//           onClick={() => setPage((p) => p - 1)}
//           className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
//         >
//           قبلی
//         </button>
//         <span className="text-sm font-medium">صفحه {page}</span>
//         <button
//           disabled={coins.length < limit}
//           onClick={() => setPage((p) => p + 1)}
//           className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
//         >
//           بعدی
//         </button>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// type Coin = {
//   id: number;
//   currency_code: string;
//   fa_name: string;
//   price: string;
//   daily_change_percent: string;
//   buy_irt_price: string;
//   sell_irt_price: string;
//   icon: string;
// };

// export default function CoinTable() {
//   const router = useRouter();
//   const [coins, setCoins] = useState<Coin[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [search, setSearch] = useState("");
//   const limit = 10;

//   // --- Fetch data from API ---
//   const fetchCoins = async (page: number, searchTerm: string) => {
//     setLoading(true);
//     try {
//       const url = searchTerm
//         ? `https://b.wallet.ir/coinlist/list/?page=${page}&limit=${limit}&search=${searchTerm}`
//         : `https://b.wallet.ir/coinlist/list/?page=${page}&limit=${limit}`;

//       const res = await fetch(url);
//       if (!res.ok) throw new Error("خطا در دریافت داده‌ها");
//       const data = await res.json();

//       setCoins(data.items || []);
//       setTotalPages(data.total_page || 1);
//     } catch (err) {
//       console.error(err);
//       setCoins([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCoins(page, search);
//   }, [page, search]);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(e.target.value);
//     setPage(1);
//   };

//   return (
//     <div className="p-4 w-full">
//       {/* Search Bar */}
//       <div className="flex justify-between items-center mb-4">
//         <input
//           type="text"
//           placeholder="جستجو..."
//           value={search}
//           onChange={handleSearchChange}
//           className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none w-64"
//         />
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto shadow border border-gray-200 rounded-lg">
//         <table className="w-full text-sm text-center">
//           <thead className="bg-gray-100 text-gray-700 font-bold">
//             <tr>
//               <th className="p-3">#</th>
//               <th className="p-3">نام رمز ارز</th>
//               <th className="p-3">ارزش دلاری</th>
//               <th className="p-3">تغییر روزانه</th>
//               <th className="p-3">خرید به والت</th>
//               <th className="p-3">فروش به والت</th>
//               <th className="p-3"></th>
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan={7} className="p-6 text-gray-500">
//                   در حال بارگذاری...
//                 </td>
//               </tr>
//             ) : coins.length === 0 ? (
//               <tr>
//                 <td colSpan={7} className="p-6 text-gray-500">
//                   هیچ داده‌ای یافت نشد.
//                 </td>
//               </tr>
//             ) : (
//               coins.map((coin, idx) => (
//                 <tr
//                   key={coin.id}
//                   className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                 >
//                   <td className="p-3">
//                     <img
//                       src={coin.icon}
//                       alt={coin.currency_code}
//                       className="w-6 h-6 mx-auto rounded-full"
//                     />
//                   </td>
//                   <td className="p-3 font-medium flex items-center justify-center gap-2">
//                     {coin.fa_name}
//                     <span className="text-xs text-gray-400">
//                       {coin.currency_code}
//                     </span>
//                   </td>
//                   <td className="p-3">
//                     {Number(coin.price).toLocaleString()} $
//                   </td>
//                   <td
//                     className={`p-3 font-semibold ${
//                       Number(coin.daily_change_percent) >= 0
//                         ? "text-green-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {coin.daily_change_percent}%
//                   </td>
//                   <td className="p-3">
//                     {Number(coin.buy_irt_price).toLocaleString()} تومان
//                   </td>
//                   <td className="p-3">
//                     {Number(coin.sell_irt_price).toLocaleString()} تومان
//                   </td>
//                   <td className="p-3">
//                     <button
//                       onClick={() =>
//                         router.push(`/coin/${coin.currency_code}`)
//                       }
//                       className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
//                     >
//                       معامله
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center gap-2 mt-6">
//         <button
//           onClick={() => setPage((p) => Math.max(p - 1, 1))}
//           disabled={page === 1}
//           className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100 disabled:opacity-40"
//         >
//           قبلی
//         </button>

//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setPage(i + 1)}
//             className={`px-3 py-1 border rounded-md text-sm ${
//               page === i + 1
//                 ? "bg-blue-600 text-white"
//                 : "hover:bg-gray-100 text-gray-700"
//             }`}
//           >
//             {i + 1}
//           </button>
//         ))}

//         <button
//           onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
//           disabled={page === totalPages}
//           className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100 disabled:opacity-40"
//         >
//           بعدی
//         </button>
//       </div>
//     </div>
//   );
// }




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
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  // search-related (client side): وقتی search فعال باشد، همه آیتم‌ها را با limit بزرگ می‌گیریم و فیلتر و سپس paginate می‌کنیم
  const [search, setSearch] = useState<string>("");
  const [displayed, setDisplayed] = useState<CoinRaw[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const limit = 10;

  const fetchPage = async (p: number, fetchAllWhenSearch = false) => {
    setLoading(true);
    try {
      const useLimit = fetchAllWhenSearch ? 1000 : limit;
      // اگر API پارامتر search نپذیرد، ما همه را می‌گیریم و در client فیلتر می‌کنیم
      const res = await fetch(
        `https://b.wallet.ir/coinlist/list/?page=${fetchAllWhenSearch ? 1 : p}&limit=${useLimit}`
      );
      if (!res.ok) throw new Error("خطا در دریافت داده‌ها");
      const data = await res.json();

      // اگر جستجو داریم، data.items را فیلتر و سپس paginate محلی انجام می‌دهیم
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
        // slice for current page
        const start = (p - 1) * limit;
        setDisplayed(filtered.slice(start, start + limit));
      } else {
        // حالت عادی: API خودش page/limit را برگرداند
        const arr = data.items || [];
        setItems(arr);
        setDisplayed(arr);
        setTotalPages(data.total_page || 1);
      }
    } catch (err) {
      console.error(err);
      setItems([]);
      setDisplayed([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  // initial & page/search effect
  useEffect(() => {
    if (search.trim()) {
      // وقتی سرچ هست: همه آیتم‌ها را بگیرید (یا حداقل تا 1000) و client-side paginate کنید
      fetchPage(page, true);
    } else {
      fetchPage(page, false);
    }
    // reset selected when page/search change (optional)
    setSelectedId(null);
  }, [page, search]);

  // helper format
  const fmt = (v: string | number | undefined | null) => {
    if (v === undefined || v === null || v === "") return "-";
    const n = Number(v);
    if (Number.isNaN(n)) return String(v);
    return n.toLocaleString();
  };

  const onClickRow = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  // pagination window helper (show limited pages if totalPages large)
  const getPageRange = () => {
    const maxButtons = 10;
    const total = totalPages;
    const current = page;
    if (total <= maxButtons) return Array.from({ length: total }, (_, i) => i + 1);

    let start = Math.max(1, current - 3);
    let end = Math.min(total, current + 3);
    if (start === 1) end = Math.min(total, maxButtons);
    if (end === total) start = Math.max(1, total - (maxButtons - 1));
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* search left top */}
      <div className="flex items-center justify-start gap-4 mb-4">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3 py-2 shadow-sm">
          <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            dir="rtl"
            placeholder="جستجو ..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="outline-none text-sm placeholder-gray-400"
          />
        </div>
      </div>

      {/* header column titles (مثل تصویر) */}
      <div className="hidden md:flex items-center bg-white border border-gray-200 rounded-md py-3 px-3 mb-2">
        <div className="w-28 text-center text-sm font-medium text-gray-600">عملیات</div>
        
        <div className="w-36 text-right text-sm text-gray-600">نام رمز ارز</div>
        <div className="flex-1 grid grid-cols-4 gap-4 text-sm text-gray-600">
        <div className="text-center">ارزش دلاری</div>
        <div className="text-center">تغییر روزانه</div>
        <div className="text-center">خرید از والت</div>
          <div className="text-center">فروش به والت</div>
          
         
          
        </div>
      </div>

      {/* لیست ردیف‌ها — هر ردیف یک بلوک */}
      <div className="space-y-2">
        {loading ? (
          // ساده: skeleton placeholder
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-md animate-pulse">
              <div className="w-24 h-10 bg-gray-200 rounded"></div>
              <div className="flex-1 h-8 bg-gray-200 rounded"></div>
              <div className="w-36 h-8 bg-gray-200 rounded"></div>
            </div>
          ))
        ) : displayed.length === 0 ? (
          <div className="text-center py-8 text-gray-500">هیچ داده‌ای یافت نشد.</div>
        ) : (
          displayed.map((c, idx) => {
            const isSelected = selectedId === c.id;
            const bg = idx % 2 === 0 ? "bg-white" : "bg-gray-50";
            return (
              <div
                key={c.id}
                onClick={() => onClickRow(c.id)}
                className={`flex items-center gap-4 p-3 border ${isSelected ? "border-blue-400 shadow-md" : "border-transparent"} rounded-lg transition cursor-pointer ${bg} hover:border-blue-200`}
              >
                {/* left: معامله button */}
                <div className="w-28 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/coin/${c.currency_code}`);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                  >
                    معامله
                  </button>
                </div>

                {/* middle columns */}
                <div className="flex-1 grid grid-cols-4 gap-4 text-sm items-center">
                  <div className="text-center text-gray-700">
                    {fmt(c.sell_irt_price)} تومان
                  </div>
                  <div className="text-center text-gray-700">
                    {fmt(c.buy_irt_price)} تومان
                  </div>
                  <div className={`text-center font-semibold ${Number(c.daily_change_percent) >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {Number(c.daily_change_percent) >= 0 ? "+" : ""}{c.daily_change_percent}%
                  </div>
                  <div className="text-center text-gray-700">{fmt(c.price)} $</div>
                </div>

                {/* right: coin icon + name */}
                <div className="w-36 flex-shrink-0 flex items-center justify-end gap-3">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-800">{c.fa_name}</div>
                    <div className="text-xs text-gray-400">{c.currency_code}</div>
                  </div>
                  <img src={c.icon} alt={c.currency_code} className="w-8 h-8 rounded-full" />
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* pagination */}
      <div className="flex justify-center items-center gap-3 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="w-9 h-9 rounded-full border flex items-center justify-center text-sm hover:bg-gray-100 disabled:opacity-40"
        >
          ‹
        </button>

        {getPageRange().map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`w-9 h-9 rounded-full border flex items-center justify-center text-sm transition ${
              p === page ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="w-9 h-9 rounded-full border flex items-center justify-center text-sm hover:bg-gray-100 disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </div>
  );
}






