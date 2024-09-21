import { Suspense } from 'react';
import { Header } from '../components/Header';
import { MovieCard } from '../components/MovieCard';
import { searchMovies } from '../services/MovieService';

interface ISearchProps {
  title?: string;
  genre?: string;
}

interface ISearchParams {
  searchParams: ISearchProps;
}

const SearchPage = async ({ searchParams }: ISearchParams) => {
  const { title, genre } = searchParams;

  const searchedMovies = await searchMovies(title || '', genre || '');

  if (searchedMovies.length === 0) {
    return (
      <div>
        <div className='relative bg-gradient-to-b pb-8'>
          <Suspense>
            <Header />
          </Suspense>
          <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16'>
            <h1 className='mb-4 text-2xl font-bold'>
              Search results for: <span className='text-red-500'>{title}</span>
            </h1>
            <p className='text-xl'>No movies found</p>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='relative bg-gradient-to-b pb-8'>
        <Suspense>
          <Header />
        </Suspense>
        <main className='relative mb-48 mt-20 h-screen pl-4 lg:pl-16'>
          <h1 className='mb-4 text-2xl font-bold'>
            Search results for: <span className='text-red-500'>{title}</span>
          </h1>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8'>
            {searchedMovies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchPage;
