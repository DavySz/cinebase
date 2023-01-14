import { DocumentData } from "firebase/firestore";

export interface IAddNewMovieToList {
  adult: false;
  backdrop_path: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
  userId: string;
}

export type TAddNewMovieToListResponse = DocumentData;

export interface TGetMoviesList {
  adult: false;
  backdrop_path: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
  userId: string;
  docId: string;
}
