import React from 'react';
import Image from 'next/image';

export const UserProfile = () => (
  <div className='flex items-center space-x-2 md:space-x-4'>
    <p className='hidden cursor-not-allowed md:inline'>Kids</p>
    <Image
      src='/Netflix-avatar.png'
      alt='profile'
      className='h-10 w-10 cursor-pointer rounded'
      height={40}
      width={40}
    />
  </div>
);
