'use client';

import React, { useEffect, useState } from "react";

import Image from "next/image";

export default function Header() {

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) return setHasScrolled(true) 

      setHasScrolled(false) 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`
        ${hasScrolled  && "bg-black"}
        transition-all fixed top-0 z-50 flex w-full items-center justify-between p-4 lg:px-10 lg:py-6
      `}>

      <div className="flex items-center space-x-2 md:space-x-8">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" height={120} width={120} />

        <ul className="hidden md:flex md:space-x-4">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        <p className="hidden cursor-not-allowed md:inline">Kids</p>
        <Image
          src="/Netflix-avatar.png"
          alt="profile"
          className="cursor-pointer rounded h-10 w-10"
          height={40}
          width={40}
        />
      </div>

    </header>
  );
}
