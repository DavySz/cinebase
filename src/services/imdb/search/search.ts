import { IMDB_API_KEY } from "@env";
import { imdb_movies_api } from "../../../config/axios/imdb/movies";
import { IGetSearchMovie, TGetSearchMoviesResponse } from "./search.types";

export async function getSearchMovie({
  page,
  search,
}: IGetSearchMovie): Promise<TGetSearchMoviesResponse> {
  const { data } = await imdb_movies_api.get(
    `/3/search/movie?api_key=${IMDB_API_KEY}&query=${search}&page=${page}&language=pt-BR`
  );

  return data;
}
