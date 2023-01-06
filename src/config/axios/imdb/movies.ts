import { IMDB_MOVIES_BASE_URL } from "@env";
import axios from "axios";

export const imdb_movies_api = axios.create({
  baseURL: IMDB_MOVIES_BASE_URL,
});
