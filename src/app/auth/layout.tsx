import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="opacity--80 flex h-screen items-center justify-center bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <div className='flex min-h-screen w-full max-w-md flex-col items-center justify-center rounded py-5'>
        {children}
      </div>
    </div>
  );
}
