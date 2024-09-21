'use client';
import React, { useState } from 'react';
import { NavLinks } from './NavLinks';
import { UserProfile } from './UserProfile';
import { Logo } from './Logo';
import { useScroll } from '../hooks/useScroll';
import { SearchForm } from './SearchForm';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
  const hasScrolled = useScroll();
  const params = useSearchParams();
  const router = useRouter();
  const initialSearchTerm = params.get('title') || '';
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newParams = new URLSearchParams();
    newParams.set('title', searchTerm);
    router.push(`/search?${newParams.toString()}`);
  };

  return (
    <header
      className={` ${hasScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between p-2 px-4 transition-all lg:px-16 lg:py-6`}
    >
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Link href='/' className='cursor-pointer'>
          <Logo />
        </Link>
        <NavLinks />
      </div>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <SearchForm
          searchTerm={searchTerm}
          onSearchTermChange={onSearchTermChange}
          onSearch={onSearch}
        />
        <UserProfile />
      </div>
    </header>
  );
};
