import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { MovieRow } from './components/MovieRow';

import { getFeaturedMovie, getMoviesByGenre } from './services/MovieService';

export default async function Home() {
  const featuredMovie = await getFeaturedMovie(101);
  const featuredGenres = ['Animation', 'Drama', 'Horror', 'Comedy'];

  const featuredGenreMovies = await Promise.all(featuredGenres.map(async (genre) => {
    const movies = await getMoviesByGenre(genre, { _limit: 8 });
    return { sectionTitle: genre, movies };
  }));

  return (
    <div className='relative h-screen bg-gradient-to-b from-transparent to-black lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner movie={featuredMovie} />

        {
          featuredGenreMovies.map(({ sectionTitle, movies }) => (
            <MovieRow key={sectionTitle} sectionTitle={sectionTitle} movies={movies} />
          ))
        }
      </main>
    </div>
  );
}
