import { LoaderCircle, Soup, TrendingUp } from "lucide-react";
import Badge from "../../../common/ui/badge/Badge";
import { useEffect, useState } from "react";

export default function DashboardTamasMasVendidos() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          import.meta.env.VITE_API_ENDPOINT + "Dashboard/TamalesMasVendidos",
          {
            method: "GET", // Or 'POST', 'PUT', 'DELETE', etc.
            headers: {
              "Content-Type": "application/json", // Or other appropriate content type
              Authorization: `Bearer ${import.meta.env.VITE_TOKEN_API}`, // This is where the bearer token is added
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {
        loading ? <></> :  <h1 className="mb-2 font-semibold text-gray-800 text-title-sm  sm:text-title-md">
        Tamales mas vendidos
      </h1>
      }
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 md:gap-6">
        {loading ? (
          <div className="center col-span-5 flex items-center justify-center">
            <LoaderCircle className="animate-spin h-8 w-8 text-gray-500" />
          </div>
        ) : data && data.length > 0 ? (
          <>
           
            {data.map((item: any, index: number) => (
              <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
                  <Soup className="text-gray-800 size-6 dark:text-white/90" />
                </div>

                <div className="flex items-end justify-between mt-5">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.relleno}
                    </span>
                    <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                      {item.totalVendidos}
                    </h4>
                  </div>
                  <Badge color="success">
                    <TrendingUp />
                  </Badge>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="col-span-5 text-center text-gray-500">
            No hay datos disponibles
          </div>
        )}
      </div>
    </div>
  );
}
