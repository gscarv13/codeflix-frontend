'use client';
// This must contain 'use client' given the error will be handled on client side

import { useEffect } from 'react';

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.log('logging error', error);
  }, [error]);

  return <div className='text-6xl text-red-500'>Error</div>;
}
