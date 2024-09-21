import { RequestOptions, apiRequest } from '@/app/services/ApiRequest';
import { Movie, Movies } from '@/app/types/movie';
import { title } from 'process';

export const getMovieById = async (id: number): Promise<Movie> => {
  return await apiRequest(`movies/${encodeURIComponent(id)}`);
};

export const getFeaturedMovie = async (id: number): Promise<Movie> => {
  return await apiRequest(`featured/${encodeURIComponent(id)}`);
};

export const getMoviesByGenre = async (
  genre: string,
  option?: RequestOptions
): Promise<Movies> => {
  return await apiRequest(
    'movies',
    { genres_like: encodeURIComponent(genre) },
    option
  );
};

export const searchMovies = async (
  title: string = '',
  genre: string = '',
  options: RequestOptions = {
    _limit: 100,
  }
): Promise<Movies> => {
  return await apiRequest(
    'movies',
    {
      title_like: encodeURIComponent(title),
      genres_like: encodeURIComponent(genre),
    },
    options
  );
};
