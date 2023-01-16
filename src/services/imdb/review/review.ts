import { IMDB_API_KEY } from "@env";
import { imdb_movies_api } from "../../../config/axios/imdb/movies";
import { TGetReviewResponse } from "./review.types";

export async function getReview(id: number): Promise<TGetReviewResponse> {
  const { data } = await imdb_movies_api.get(
    `/3/review/${id}?api_key=${IMDB_API_KEY}`
  );
  return data;
}
