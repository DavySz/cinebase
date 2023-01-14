import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import MovieCard from "../../../components/MovieCard/movieCard";
import { EmptyState } from "../../../components/ScreenState/EmptyState/emptyState";
import { ScreenState } from "../../../components/ScreenState/screenState";
import { TScreenState } from "../../../components/ScreenState/ScreenState.types";
import { getMovieSimilar } from "../../../services/imdb/movies/movies";
import { TGetRecommendationsMoviesResponse } from "../../../services/imdb/movies/movies.types";
import { Container, Separator } from "./similar.styles";
import { ISimilar } from "./similar.types";

export function Similar({ id, isFocus }: ISimilar) {
  const { navigate } = useNavigation();
  const [screenState, setScreenState] = useState<TScreenState>("loading");
  const [similar, setSimilar] = useState<TGetRecommendationsMoviesResponse>(
    {} as TGetRecommendationsMoviesResponse
  );

  async function loadData() {
    try {
      setScreenState("loading");

      const response = await getMovieSimilar({ id, page: 1 });

      setSimilar(response);

      if (response.results.length > 0) {
        setScreenState("ready");
      } else {
        setScreenState("empty");
      }
    } catch {
      setScreenState("error");
    }
  }

  useFocusEffect(
    useCallback(() => {
      if (!isFocus) return;
      loadData();
    }, [])
  );

  return (
    <Container>
      <ScreenState
        errorRecoveryCallback={() => loadData()}
        screenState={screenState}
      >
        {similar.results &&
          similar.results.map((item) => {
            return (
              <>
                <MovieCard
                  onPress={() => navigate("MovieDetails", { id: item.id })}
                  imagePath={item.poster_path}
                  overview={item.overview}
                  title={item.title}
                  key={item.id}
                />
                <Separator />
              </>
            );
          })}

        {screenState === "empty" && <EmptyState />}
      </ScreenState>
    </Container>
  );
}
