import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { MovieCard } from "../../components/MovieCard/movieCard";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { TScreenState } from "../../components/ScreenTemplate/screenTemplate.types";
import { getPopularMovies } from "../../services/imdb/movies/imdbMovies";
import { TGetPopularMoviesResults } from "../../services/imdb/movies/imdbMovies.types";
import { Container } from "./home.styles";

export function Home() {
  const [popularMovies, setPopularMovies] = useState<
    TGetPopularMoviesResults[]
  >([]);

  const [screenState, setScreenState] = useState<TScreenState>("loading");

  async function loadData() {
    try {
      setScreenState("loading");
      const { results } = await getPopularMovies();
      setPopularMovies(results);
      setScreenState("ready");
    } catch {
      setScreenState("error");
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScreenTemplate screenState={screenState} errorRecoveryCallback={() => {}}>
      <Container>
        <FlatList
          data={popularMovies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <MovieCard
              imagePath={item.poster_path}
              title={item.original_title}
            />
          )}
        />
      </Container>
    </ScreenTemplate>
  );
}
