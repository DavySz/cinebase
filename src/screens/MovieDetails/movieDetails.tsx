import { IMDB_IMAGES_BASE_URL } from "@env";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { getMovie } from "../../services/imdb/movies/movies";
import { TGetMovieResponse } from "../../services/imdb/movies/movies.types";
import {
  Container,
  Content,
  Gradient,
  ImageWrapper,
  MovieOverview,
  Row,
} from "./movieDetails.styles";
import { TRouteParams } from "./movieDetails.types";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { Text } from "../../components/Text/text";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { formatToBRL } from "brazilian-values";
import { InfoCard } from "./InfoCard/infoCard";
import { Chip } from "../../components/Chip/Chip";
import { ScreenState } from "../../components/ScreenState/screenState";
import { TScreenState } from "../../components/ScreenState/ScreenState.types";

export function MovieDetails() {
  const { colors } = useTheme();
  const { id } = useRoute().params as TRouteParams;
  const [screenState, setScreenState] = useState<TScreenState>("loading");
  const [movie, setMovie] = useState<TGetMovieResponse>(
    {} as TGetMovieResponse
  );

  async function loadData() {
    setScreenState("loading");
    try {
      const response = await getMovie(id);
      setMovie(response);
      setScreenState("ready");
    } catch {
      setScreenState("error");
    }
  }

  function renderStars() {
    const { vote_average } = movie;
    return (
      <Row>
        <Entypo
          name={vote_average > 2 ? "star" : "star-outlined"}
          size={24}
          color={colors.start_icon}
        />
        <Entypo
          name={vote_average > 4 ? "star" : "star-outlined"}
          size={24}
          color={colors.start_icon}
        />
        <Entypo
          name={vote_average > 6 ? "star" : "star-outlined"}
          size={24}
          color={colors.start_icon}
        />
        <Entypo
          name={vote_average > 8 ? "star" : "star-outlined"}
          size={24}
          color={colors.start_icon}
        />
        <Entypo
          name={vote_average === 10 ? "star" : "star-outlined"}
          size={24}
          color={colors.start_icon}
        />
      </Row>
    );
  }

  function formatRuntime(runtime: number) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours} h ${minutes} m`;
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScreenTemplate previousRoute="Home" title="Detalhes">
      <ScreenState
        errorRecoveryCallback={() => loadData()}
        screenState={screenState}
      >
        <Container>
          <ImageWrapper
            source={{ uri: `${IMDB_IMAGES_BASE_URL}${movie.backdrop_path}` }}
          >
            <Gradient>
              <View>{renderStars()}</View>
              <Text color="background_primary" size="20" font="secondary_600">
                {movie.release_date}
              </Text>
            </Gradient>
          </ImageWrapper>
          <Content>
            <Text
              color="background_primary"
              size="20"
              font="secondary_600"
              mb={8}
            >
              {movie.title}
            </Text>
            <MovieOverview
              color="background_primary"
              size="16"
              font="primary_500"
              mb={32}
            >
              {movie.overview}
            </MovieOverview>
            {movie.genres && (
              <Row mb={24}>
                {movie.genres.map((item) => {
                  return <Chip text={item.name} spacing={4} />;
                })}
              </Row>
            )}
            <InfoCard
              icon={
                <MaterialIcons
                  name="local-movies"
                  size={32}
                  color={colors.main}
                />
              }
              info={formatRuntime(movie.runtime)}
            />
            <InfoCard
              icon={
                <MaterialIcons
                  name="attach-money"
                  size={32}
                  color={colors.main}
                />
              }
              info={formatToBRL(movie.budget)}
            />
            <InfoCard
              icon={<Entypo name="ticket" size={32} color={colors.main} />}
              info={formatToBRL(movie.revenue)}
            />
          </Content>
        </Container>
      </ScreenState>
    </ScreenTemplate>
  );
}
