import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { EmptyState } from "../../components/ScreenState/EmptyState/emptyState";
import { ScreenState } from "../../components/ScreenState/screenState";
import { TScreenState } from "../../components/ScreenState/ScreenState.types";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { getMovieReviews } from "../../services/imdb/movies/movies";
import { TGetMovieReviewsResponse } from "../../services/imdb/movies/movies.types";
import { FooterList } from "./FooterList/footerList";
import { TFooterListState } from "./FooterList/footerList.types";
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
  const [refreshingList, setRefreshingList] = useState(false);
  const [footerListState, setFooterListState] =
    useState<TFooterListState>("loading");
  const [page, setPage] = useState(1);

  async function loadData() {
    try {
      setRefreshingList(false);
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

  async function loadMoreReviews() {
    if (reviews.total_pages === page) {
      setFooterListState("ready");
      return;
    }

    try {
      const response = await getMovieReviews({ page, id });

      setReviews((previous) => ({
        ...previous,
        results: [...previous.results, ...response.results],
      }));

      setPage((previous) => previous + 1);
    } catch {
      setFooterListState("error");
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
              ListFooterComponent={
                <FooterList
                  footerState={footerListState}
                  errorRecoveryCallback={() => loadMoreReviews()}
                />
              }
              onEndReached={() => loadMoreReviews()}
              onEndReachedThreshold={0.5}
              refreshControl={
                <RefreshControl
                  refreshing={refreshingList}
                  onRefresh={() => loadData()}
                />
              }
            />
          )}
          {screenState === "empty" && <EmptyState />}
        </Container>
      </ScreenState>
    </ScreenTemplate>
  );
}
