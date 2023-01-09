import { IMDB_API_KEY } from "@env";
import { imdb_movies_api } from "../../../config/axios/imdb/movies";
import {
  TGetMovieResponse,
  TGetMovieCreditsResponse,
  TGetPopularMoviesResponse,
} from "./movies.types";

export async function getPopularMovies(
  page: number
): Promise<TGetPopularMoviesResponse> {
  const { data } = await imdb_movies_api.get(
    `/3/movie/popular?api_key=${IMDB_API_KEY}&language=pt-BR&page=${page}`
  );

  return data;
}

export async function getMovie(id: number): Promise<TGetMovieResponse> {
  const { data } = await imdb_movies_api.get(
    `/3/movie/${id}?api_key=${IMDB_API_KEY}&language=pt-BR`
  );

  return data;
}

export async function getMovieCredits(
  id: number
): Promise<TGetMovieCreditsResponse> {
  const { data } = await imdb_movies_api.get(
    `/3/movie/${id}/credits?api_key=${IMDB_API_KEY}&language=pt-BR`
  );

  return data;
}
