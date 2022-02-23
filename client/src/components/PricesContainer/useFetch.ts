import { useEffect, useState } from "react";
export const useFetch = (uri: string) => {
  const [data, setData] = useState();
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
        setLoading(false);
        setData(await result.json());
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
