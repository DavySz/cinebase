export type TGetPopularMoviesResults = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type TGetPopularMoviesResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: TGetPopularMoviesResults[];
};

export type TGetMovieResponse = {
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
};