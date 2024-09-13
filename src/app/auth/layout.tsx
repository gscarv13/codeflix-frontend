import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
      bg-[url('/background.jpg')]
      bg-cover bg-center bg-no-repeat text-white h-screen opacity--80 flex items-center justify-center
    ">
      <div className="flex min-h-screen w-full max-w-md rounded flex-col items-center justify-center py-5">
        {children}
      </div>
    </div>
  );
}
