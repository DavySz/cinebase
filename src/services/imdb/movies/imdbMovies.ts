import { IMDB_API_KEY } from "@env";
import { imdb_movies_api } from "../../../config/axios/imdb/movies";
import {
  IGetPopularMovies,
  TGetPopularMoviesResponse,
} from "./imdbMovies.types";

export async function getPopularMovies({
  page,
}: IGetPopularMovies): Promise<TGetPopularMoviesResponse> {
  const { data } = await imdb_movies_api.get(
    `/3/movie/popular?api_key=${IMDB_API_KEY}&language=pt-BR&page=${page}`
  );

  return data;
}
