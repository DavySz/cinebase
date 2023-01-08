import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Input } from "../../components/Input/input";
import { MovieCard } from "../../components/MovieCard/movieCard";
import { EmptyState } from "../../components/ScreenTemplate/EmptyState/emptyState";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { TScreenState } from "../../components/ScreenTemplate/screenTemplate.types";
import { Text } from "../../components/Text/text";
import { getPopularMovies } from "../../services/imdb/movies/imdbMovies";
import { TGetPopularMoviesResponse } from "../../services/imdb/movies/imdbMovies.types";
import { FooterList } from "./FooterList/footerList";
import { TFooterListState } from "./FooterList/footerList.types";
import { CardWrapper, Container, Separator } from "./home.styles";

export function Home() {
  const { navigate } = useNavigation();
  const [popularMovies, setPopularMovies] = useState<TGetPopularMoviesResponse>(
    {} as TGetPopularMoviesResponse
  );

  const [screenState, setScreenState] = useState<TScreenState>("loading");
  const [footerListState, setFooterListState] =
    useState<TFooterListState>("loading");
  const [page, setPage] = useState(1);

  async function loadData() {
    try {
      setScreenState("loading");
      const response = await getPopularMovies(page);
      setPopularMovies(response);
      setPage((previous) => previous + 1);

      if (response.results.length > 0) {
        setScreenState("ready");
      } else {
        setScreenState("empty");
      }
    } catch {
      setScreenState("error");
    }
  }

  async function loadMoreData() {
    setFooterListState("loading");
    const { total_pages } = popularMovies;
    if (page === total_pages) {
      setFooterListState("ready");
      return;
    }
    try {
      const response = await getPopularMovies(page);
      setPopularMovies((previous) => ({
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScreenTemplate
        screenState={screenState}
        errorRecoveryCallback={() => loadData()}
      >
        <Container>
          <Input placeholder="Buscar filme..." mb={16} />
          {screenState === "ready" && (
            <FlatList
              data={popularMovies.results}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item, index }) => (
                <>
                  {index === 0 && (
                    <Text
                      color="background_primary"
                      font="secondary_600"
                      size="20"
                      mb={24}
                    >
                      Populares do momento:
                    </Text>
                  )}
                  <CardWrapper
                    onPress={() => navigate("MovieDetails", { id: item.id })}
                  >
                    <MovieCard
                      imagePath={item.poster_path}
                      title={item.title}
                      overview={item.overview}
                    />
                  </CardWrapper>
                </>
              )}
              ItemSeparatorComponent={() => <Separator />}
              showsVerticalScrollIndicator={false}
              onEndReached={() => loadMoreData()}
              onEndReachedThreshold={0.5}
              ListFooterComponent={
                <FooterList
                  footerState={footerListState}
                  errorRecoveryCallback={() => loadMoreData()}
                />
              }
            />
          )}
          {screenState === "empty" && <EmptyState />}
        </Container>
      </ScreenTemplate>
    </TouchableWithoutFeedback>
  );
}
