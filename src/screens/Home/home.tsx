import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import {
  FlatList,
  Keyboard,
  RefreshControl,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import MovieCard from "../../components/MovieCard/movieCard";
import { EmptyState } from "../../components/ScreenState/EmptyState/emptyState";
import { ScreenState } from "../../components/ScreenState/screenState";
import { TScreenState } from "../../components/ScreenState/ScreenState.types";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { Text } from "../../components/Text/text";
import { useDebounceState } from "../../hooks/useDebounceState/useDebounceState";
import { getPopularMovies } from "../../services/imdb/movies/movies";
import { TGetPopularMoviesResponse } from "../../services/imdb/movies/movies.types";
import { getSearchMovie } from "../../services/imdb/search/search";
import { FooterList } from "./FooterList/footerList";
import { TFooterListState } from "./FooterList/footerList.types";
import {
  Container,
  IconWrapper,
  Row,
  SearchInput,
  Separator,
} from "./home.styles";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { createRef } from "react";

export function Home() {
  const { navigate } = useNavigation();
  const theme = useTheme();
  const inputRef = createRef<TextInput>();
  const [movies, setMovies] = useState<TGetPopularMoviesResponse>(
    {} as TGetPopularMoviesResponse
  );

  const [search, setSearch, debouncedSearch] = useDebounceState<string>(
    "",
    500
  );
  const [refreshingList, setRefreshingList] = useState(false);
  const [screenState, setScreenState] = useState<TScreenState>("loading");
  const [footerListState, setFooterListState] =
    useState<TFooterListState>("loading");
  const [page, setPage] = useState(1);

  async function loadMovies() {
    let response: TGetPopularMoviesResponse = {} as TGetPopularMoviesResponse;

    try {
      setRefreshingList(false);
      setScreenState("loading");
      if (search) {
        response = await getSearchMovie({
          page: 1,
          search,
        });
      } else {
        response = await getPopularMovies(1);
      }

      setMovies(response);
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

  async function loadMoreMovies() {
    let response: TGetPopularMoviesResponse = {} as TGetPopularMoviesResponse;

    setFooterListState("loading");
    const { total_pages } = movies;

    if (page === total_pages) {
      setFooterListState("ready");
      return;
    }

    try {
      if (search) {
        response = await getSearchMovie({
          page,
          search,
        });
      } else {
        response = await getPopularMovies(page);
      }

      setMovies((previous) => ({
        ...previous,
        total_pages: response.total_pages,
        results: [...previous.results, ...response.results],
      }));

      setPage((previous) => previous + 1);
    } catch {
      setFooterListState("error");
    }
  }

  function cleanInput() {
    setSearch("");
    inputRef.current?.setNativeProps({ text: "" });
  }

  useFocusEffect(
    useCallback(() => {
      loadMovies();
    }, [debouncedSearch])
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScreenTemplate>
        <Container>
          <Row mb={16}>
            <SearchInput
              placeholder="Buscar filme..."
              onChangeText={setSearch}
              ref={inputRef}
            />
            {search && (
              <IconWrapper onPress={() => cleanInput()}>
                <AntDesign
                  size={12}
                  name="close"
                  color={theme.colors.background_primary}
                />
              </IconWrapper>
            )}
          </Row>
          <ScreenState
            errorRecoveryCallback={() => loadMoreMovies()}
            screenState={screenState}
          >
            {screenState === "ready" && (
              <FlatList
                data={movies.results}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item, index }) => (
                  <>
                    {index === 0 && !search && (
                      <Text
                        color="background_primary"
                        font="secondary_600"
                        size="20"
                        mb={24}
                      >
                        Populares do momento:
                      </Text>
                    )}
                    <MovieCard
                      onPress={() => navigate("MovieDetails", { id: item.id })}
                      imagePath={item.poster_path}
                      overview={item.overview}
                      title={item.title}
                    />
                  </>
                )}
                ItemSeparatorComponent={() => <Separator />}
                showsVerticalScrollIndicator={false}
                onEndReached={() => loadMoreMovies()}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                  !search ? (
                    <FooterList
                      footerState={footerListState}
                      errorRecoveryCallback={() => loadMoreMovies()}
                    />
                  ) : null
                }
                refreshControl={
                  <RefreshControl
                    refreshing={refreshingList}
                    onRefresh={() => loadMovies()}
                  />
                }
              />
            )}
            {screenState === "empty" && <EmptyState />}
          </ScreenState>
        </Container>
      </ScreenTemplate>
    </TouchableWithoutFeedback>
  );
}
