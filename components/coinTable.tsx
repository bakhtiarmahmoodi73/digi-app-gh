"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Coin = {
  id: string;
  currency_code: string;
  name: string;
  symbol: string;
  price_usd: number;
  change_24h: number;
  buy_price: number;
  sell_price: number;
  icon: string;
};

export default function CoinTable() {
  const router = useRouter();
  const [coins, setCoins] = useState<Coin[]>([]);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `https://b.wallet.ir/coinlist/list/?page=${page}&limit=${limit}`
        );
        if (!res.ok) throw new Error("خطا در دریافت داده‌ها");
        const data = await res.json();

        const formatted: Coin[] = (data.items || []).map((item: any) => ({
          id: item.id.toString(),
          name: item.fa_name,
          symbol: item.currency_code,
          price_usd: Number(item.price),
          change_24h: Number(item.daily_change_percent),
          buy_price: Number(item.buy_irt_price),
          sell_price: Number(item.sell_irt_price),
          icon: item.icon,
          currency_code: item.currency_code,
        }));

        setCoins(formatted);
      } catch (err) {
        console.error(err);
        setCoins([]);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchCoins();
  }, [page]);

  const columns: ColumnDef<Coin>[] = [
    {
      accessorKey: "icon",
      header: "",
      cell: ({ getValue }) => (
        <img
          src={getValue<string>()}
          alt="icon"
          className="w-6 h-6 mx-auto rounded-full"
        />
      ),
    },
    { accessorKey: "name", header: "نام رمز ارز" },
    { accessorKey: "symbol", header: "نماد" },
    {
      accessorKey: "price_usd",
      header: "ارزش دلاری",
      cell: ({ getValue }) =>
        getValue<number>() ? `${getValue<number>()?.toLocaleString()} $` : "-",
    },
    {
      accessorKey: "change_24h",
      header: "تغییر روزانه",
      cell: ({ getValue }) => {
        const val = getValue<number>();
        if (val === undefined || val === null) return "-";
        return (
          <span className={val >= 0 ? "text-green-600" : "text-red-600"}>
            {val}%
          </span>
        );
      },
    },
    {
      accessorKey: "buy_price",
      header: "خرید به والت",
      cell: ({ getValue }) =>
        getValue<number>()
          ? `${getValue<number>()?.toLocaleString()} تومان`
          : "-",
    },
    {
      accessorKey: "sell_price",
      header: "فروش به والت",
      cell: ({ getValue }) =>
        getValue<number>()
          ? `${getValue<number>()?.toLocaleString()} تومان`
          : "-",
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <button
          onClick={() => router.push(`/coin/${row.original.currency_code}`)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          معامله
        </button>
      ),
    },
  ];

  const table = useReactTable({
    data: coins,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <p className="text-center p-4">در حال بارگذاری...</p>;

  return (
    <div className="p-4">
      <table className="w-full border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100 text-gray-700">
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((h) => (
                <th
                  key={h.id}
                  className="p-3 border text-center text-sm font-bold"
                >
                  {flexRender(h.column.columnDef.header, h.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, idx) => (
            <tr
              key={row.id}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-3 border text-center text-sm">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
        >
          قبلی
        </button>
        <span className="text-sm font-medium">صفحه {page}</span>
        <button
          disabled={coins.length < limit}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
        >
          بعدی
        </button>
      </div>
    </div>
  );
}
