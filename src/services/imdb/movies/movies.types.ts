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
  docId?: string;
};

export type TGetMovieCreditsResponse = {
  id: number;
  cast: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }[];
};

export interface IGetMovieRecommendations {
  page: number;
  id: number;
}

export type TGetRecommendationsMoviesResults = {
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

export type TGetRecommendationsMoviesResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: TGetRecommendationsMoviesResults[];
};

export interface IGetMovieSimilar {
  page: number;
  id: number;
}

export type TGetSimilarMoviesResults = {
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

export type TGetSimilarMoviesResponse = {
  page: number;
  total_pages: number;
  total_results: number;
  results: TGetRecommendationsMoviesResults[];
};
