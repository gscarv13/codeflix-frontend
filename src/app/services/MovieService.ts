import { RequestOptions, apiRequest } from '@/app/services/ApiRequest';
import { Movie, Movies } from '@/app/types/movie';
import { title } from 'process';

export const getMovieById = async (id: number): Promise<Movie> => {
  return await apiRequest(`movie/${encodeURIComponent(id)}`);
};

export const getFeaturedMovie = async (id: number): Promise<Movie> => {
  return await apiRequest(`featured/${encodeURIComponent(id)}`);
};

export const getMoviesByGenre = async (
  genre: string,
  option?: RequestOptions
): Promise<Movies> => {
  return await apiRequest(
    `genre/${encodeURIComponent(genre)}`,
    { genre_like: encodeURIComponent(genre) },
    option
  );
};

export const searchMovies = async (
  title: string,
  genre: string,
  options?: RequestOptions
): Promise<Movies> => {
  return await apiRequest(
    'movie',
    {
      title_like: encodeURIComponent(title),
      genre_like: encodeURIComponent(genre),
    },
    options
  );
};
