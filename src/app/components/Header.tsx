'use client';
import React from "react";
import { NavLinks } from "./NavLinks";
import { UserProfile } from "./UserProfile";
import { Logo } from "./Logo"; 
import { useScroll } from "../hooks/useScroll";

export const Header = () => {
  const hasScrolled = useScroll();

  return (
    <header className={`
        ${hasScrolled && "bg-black"}
        transition-all fixed top-0 z-50 flex w-full items-center justify-between p-2 px-4 lg:px-16 lg:py-6
      `}>

      <div className="flex items-center space-x-2 md:space-x-8">
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
