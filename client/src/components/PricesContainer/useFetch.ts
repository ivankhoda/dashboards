import { useEffect, useState } from "react";
import { StockInfo } from "../StockInfoHelpers";
export const useFetch = (uri: string) => {
  const [data, setData] = useState<StockInfo[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetch(`${uri}`, {
          method: "GET",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
        });
        setData(await result.json());
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
};
