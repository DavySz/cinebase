import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { EmptyState } from "../../components/ScreenState/EmptyState/emptyState";
import { ScreenState } from "../../components/ScreenState/screenState";
import { TScreenState } from "../../components/ScreenState/ScreenState.types";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { getMovieReviews } from "../../services/imdb/movies/movies";
import { TGetMovieReviewsResponse } from "../../services/imdb/movies/movies.types";
import { CardWrapper, Container } from "./movieReviews.styles";
import { TRouteParams } from "./movieReviews.types";
import { ReviewCard } from "./ReviewCard/reviewCard";

export function MovieReviews() {
  const { navigate } = useNavigation();
  const { id } = useRoute().params as TRouteParams;
  const [screenState, setScreenState] = useState<TScreenState>("loading");
  const [reviews, setReviews] = useState<TGetMovieReviewsResponse>(
    {} as TGetMovieReviewsResponse
  );

  async function loadData() {
    try {
      setScreenState("loading");
      const response = await getMovieReviews({ page: 1, id });
      setReviews(response);
      if (response.results.length > 0) {
        setScreenState("ready");
      } else {
        setScreenState("empty");
      }
    } catch {
      setScreenState("ready");
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScreenTemplate title="Reviews" previousRoute="MovieDetails">
      <ScreenState
        screenState={screenState}
        errorRecoveryCallback={() => loadData()}
      >
        <Container>
          {screenState === "ready" && (
            <FlatList
              data={reviews.results}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CardWrapper
                  onPress={() => navigate("ReviewDetails", { id: item.id })}
                >
                  <ReviewCard
                    author={item.author}
                    content={item.content}
                    created_at={item.created_at}
                    imagePath={item.author_details.avatar_path}
                  />
                </CardWrapper>
              )}
            />
          )}
          {screenState === "empty" && <EmptyState />}
        </Container>
      </ScreenState>
    </ScreenTemplate>
  );
}
