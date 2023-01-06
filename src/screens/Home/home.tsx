import React, { useEffect, useState } from "react";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input";
import { MovieCard } from "../../components/MovieCard/movieCard";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { TScreenState } from "../../components/ScreenTemplate/screenTemplate.types";
import { getPopularMovies } from "../../services/imdb/movies/imdbMovies";
import { TGetPopularMoviesResponse } from "../../services/imdb/movies/imdbMovies.types";
import { FooterList } from "./FooterList/footerList";
import { TFooterListState } from "./FooterList/footerList.types";
import { Container, Separator } from "./home.styles";

export function Home() {
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
      const response = await getPopularMovies({ page });
      setPopularMovies(response);
      setPage((previous) => previous + 1);
      setScreenState("ready");
    } catch {
      setScreenState("error");
    }
  }

  async function loadMoreData() {
    const { total_pages } = popularMovies;
    if (page === total_pages) {
      setFooterListState("ready");
      return;
    }
    try {
      const response = await getPopularMovies({ page });
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
          <FlatList
            data={popularMovies.results}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <MovieCard
                imagePath={item.poster_path}
                title={item.original_title}
                overview={item.overview}
              />
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
        </Container>
      </ScreenTemplate>
    </TouchableWithoutFeedback>
  );
}
