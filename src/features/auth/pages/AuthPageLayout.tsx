import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative p-6 bg-white z-1  sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row  sm:p-0">
        {children}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-white text-title-sm  sm:text-title-md">
             Cazuela Chapina
            </h1>
            <p className="text-sm text-white ">
            Tamales tradicionales y las bebidas de maíz y cacao.
            </p>
          </div>
          </div>
        </div>
     
      </div>
    </div>
  );
}
