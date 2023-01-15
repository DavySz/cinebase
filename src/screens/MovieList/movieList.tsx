import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import MovieCard from "../../components/MovieCard/movieCard";
import { ScreenState } from "../../components/ScreenState/screenState";
import { TScreenState } from "../../components/ScreenState/ScreenState.types";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { useAuth } from "../../hooks/useAuth/useAuth";
import {
  deleteMovie,
  getMoviesList,
} from "../../services/firebase/firestore/firestore";
import { TGetMoviesList } from "../../services/firebase/firestore/firestore.types";
import { Container, IconWrapper, Separator } from "./movieList.styles";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { EmptyState } from "../../components/ScreenState/EmptyState/emptyState";
import { Toast } from "../../components/Toast/toast";

export function MovieList() {
  const { user } = useAuth();
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const [showToast, setShowToast] = useState(false);
  const [movies, setMovies] = useState<TGetMoviesList[]>([]);
  const [screenState, setScreenState] = useState<TScreenState>("loading");

  async function loadData() {
    try {
      setScreenState("loading");
      const response = await getMoviesList(user.id);
      setMovies(response);

      if (response.length > 0) {
        setScreenState("ready");
      } else {
        setScreenState("empty");
      }
    } catch {
      setScreenState("error");
    }
  }

  function renderCardIcon(id: string) {
    return (
      <IconWrapper onPress={() => handleDeleteMovie(id)}>
        <AntDesign name="delete" size={24} color={colors.main} />
      </IconWrapper>
    );
  }

  async function handleDeleteMovie(id: string) {
    try {
      await deleteMovie(id);
      await loadData();
    } catch {
      setShowToast(true);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <ScreenTemplate title="Minha lista">
      <ScreenState
        screenState={screenState}
        errorRecoveryCallback={() => loadData()}
      >
        <Container>
          {screenState === "empty" ? (
            <EmptyState description="Parece que você ainda não adicionou filmes a sua lista!" />
          ) : (
            <FlatList
              data={movies}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => {
                return (
                  <>
                    <MovieCard
                      onPress={() => navigate("MovieDetails", { id: item.id })}
                      icon={renderCardIcon(String(item.docId))}
                      imagePath={item.poster_path}
                      overview={item.overview}
                      title={item.title}
                    />
                    <Separator />
                  </>
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          )}
          <Toast
            description="Ocorreu um problema ao tentar remover o filme, por favor tente novamente!"
            onChangeVisible={() => setShowToast(false)}
            title="Opsss, algo deu errado!"
            visible={showToast}
            variant="error"
          />
        </Container>
      </ScreenState>
    </ScreenTemplate>
  );
}
