import { Ellipsis, LoaderCircle, Soup, TrendingUp } from "lucide-react";
import Badge from "../../../common/ui/badge/Badge";
import { useEffect, useState } from "react";

import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export default function DashboardProporcionPicantes() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //   <div className="center col-span-5 flex items-center justify-center">
  //             <LoaderCircle className="animate-spin h-8 w-8 text-gray-500" />
  //           </div>

  // <h1 className="mb-2 font-semibold text-gray-800 text-title-sm  sm:text-title-md">
  // Tamales mas vendidos
  // </h1>

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          import.meta.env.VITE_API_ENDPOINT + "Dashboard/ProporcionPicantes",
          {
            method: "GET",
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
    <>

    {
        loading ? <>
          <div className="center col-span-5 flex items-center justify-center">
            <Ellipsis className="animate-spin h-8 w-8 text-gray-500" />
          </div>
        </> :  (

            <div className="ml-auto w-100 rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03] mt-10">
      <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Proporcion picante vs no picante
            </h3>
            <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
              comparativa de picantes y no picantes
            </p>
          </div>
        </div>
        
      
      </div>

      <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
        {data &&
          data.map((item: any, index: number) => (
            <>           
             <div>
              <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
                {item.picante}
              </p>
              <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                {item.cantidad}
               
              </p>
            </div>
            <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

            </>
          ))}
      </div>
    </div>
        )
    }
    
    </>
  );
}
