import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  price_usd: number;
  change_24h: number;
  buy_price: number;
  sell_price: number;
}

export const useCoins = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["coins", page, limit],
    queryFn: async () => {
      const { data } = await axios.get("https://b.wallet.ir/coinlist/list", {
        params: { page, limit },
      });

      console.log("API DATA:", data);     
      return data;
    },
    
  });
};
