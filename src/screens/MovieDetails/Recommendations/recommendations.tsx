import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import MovieCard from "../../../components/MovieCard/movieCard";
import { EmptyState } from "../../../components/ScreenState/EmptyState/emptyState";
import { ScreenState } from "../../../components/ScreenState/screenState";
import { TScreenState } from "../../../components/ScreenState/ScreenState.types";
import { getMovieRecommendations } from "../../../services/imdb/movies/movies";
import { TGetRecommendationsMoviesResponse } from "../../../services/imdb/movies/movies.types";
import { CardWrapper, Container, Separator } from "./recommendations.styles";
import { IRecommendations } from "./recommendations.types";

export function Recommendations({ id, isFocus }: IRecommendations) {
  const { navigate } = useNavigation();
  const [screenState, setScreenState] = useState<TScreenState>("loading");
  const [recommendations, setRecommendations] =
    useState<TGetRecommendationsMoviesResponse>(
      {} as TGetRecommendationsMoviesResponse
    );

  async function loadData() {
    try {
      setScreenState("loading");

      const response = await getMovieRecommendations({ id, page: 1 });

      setRecommendations(response);

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
        {recommendations.results &&
          recommendations.results.map((item) => {
            return (
              <>
                <CardWrapper
                  key={item.id}
                  onPress={() => navigate("MovieDetails", { id: item.id })}
                >
                  <MovieCard
                    imagePath={item.poster_path}
                    overview={item.overview}
                    title={item.title}
                  />
                </CardWrapper>
                <Separator />
              </>
            );
          })}

        {screenState === "empty" && <EmptyState />}
      </ScreenState>
    </Container>
  );
}
