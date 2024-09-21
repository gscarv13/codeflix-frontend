import { Header } from '@/app/components/Header';
import Player from '@/app/components/Player';
import { getMovieById } from '@/app/services/MovieService';
import { Suspense } from 'react';

interface IWatchProps {
  params: {
    id: string;
  };
}

const Watch = async ({ params }: IWatchProps) => {
  const movie = await getMovieById(Number(params.id));

  if (!movie) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Suspense>
          <Header />
        </Suspense>
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='ls:text-7xl text-2xl font-bold md:text-4xl'>
            Sorry, this movie is not available.
          </h1>
        </main>
      </div>
    );
  }

  return <Player movie={movie} />;
};

export default Watch;
