import { IMDB_IMAGES_BASE_URL } from "@env";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { getMovie } from "../../services/imdb/movies/movies";
import { TGetMovieResponse } from "../../services/imdb/movies/movies.types";
import {
  Container,
  Content,
  Gradient,
  IconWrapper,
  ImageWrapper,
  MovieOverview,
  Row,
  TabScreen,
} from "./movieDetails.styles";
import { TRouteParams, TTabStatus } from "./movieDetails.types";
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
import { Button } from "../../components/Button/button";
import { Tabs } from "../../components/Tabs/tabs";
import { Recommendations } from "./Recommendations/recommendations";
import { Similar } from "./Similar/similar";
import {
  addNewMovieToList,
  deleteMovie,
  getMoviesList,
} from "../../services/firebase/firestore/firestore";
import { useAuth } from "../../hooks/useAuth/useAuth";
import moment from "moment";

export function MovieDetails() {
  const { user } = useAuth();
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { id } = useRoute().params as TRouteParams;
  const [isMovieList, setIsMovieList] = useState(false);
  const [tabStatus, setTabStatus] = useState<TTabStatus>("recommendations");
  const [screenState, setScreenState] = useState<TScreenState>("loading");
  const [headerState, setHeaderState] = useState<TScreenState>("loading");
  const [movie, setMovie] = useState<TGetMovieResponse>(
    {} as TGetMovieResponse
  );

  async function verifyMovieList(movieReceived: TGetMovieResponse) {
    try {
      const userListMovies = await getMoviesList(user.id);

      const results = userListMovies.filter(
        (listMovie) => listMovie.id === movieReceived.id
      );

      if (results.length > 0) {
        setMovie(Object.assign(movieReceived, { docId: results[0].docId }));
        setIsMovieList(true);
      } else {
        setMovie(movieReceived);
        setIsMovieList(false);
      }

      setHeaderState("ready");
    } catch {
      setHeaderState("error");
    }
  }

  async function loadData() {
    setScreenState("loading");
    try {
      const response = await getMovie(id);
      await verifyMovieList(response);

      setScreenState("ready");
    } catch {
      setScreenState("error");
    }
  }

  function renderStars() {
    const { vote_average } = movie;
    return (
      <Row>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <Entypo
              name={vote_average >= item * 2 ? "star" : "star-outlined"}
              color={colors.start_icon}
              key={item}
              size={24}
            />
          );
        })}
      </Row>
    );
  }

  function formatRuntime(runtime: number) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return `${hours} h ${minutes} m`;
  }

  const handleAddNewMovieToList = useCallback(async () => {
    try {
      const movieAdded = Object.assign(movie, { userId: user.id });
      await addNewMovieToList(movieAdded);
      setIsMovieList(true);
    } catch {
      setIsMovieList(false);
    }
  }, [movie]);

  const handleDeleteMovie = useCallback(async () => {
    try {
      await deleteMovie(movie.docId!);
      setIsMovieList(false);
    } catch {
      setIsMovieList(true);
    }
  }, [movie]);

  const renderHeaderIcon = useCallback(() => {
    return isMovieList ? (
      <IconWrapper onPress={() => handleDeleteMovie()}>
        <Entypo size={24} color={colors.main} name="heart" />
      </IconWrapper>
    ) : (
      <IconWrapper onPress={() => handleAddNewMovieToList()}>
        <Entypo size={24} color={colors.main} name="heart-outlined" />
      </IconWrapper>
    );
  }, [isMovieList, movie]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScreenTemplate
      title="Detalhes"
      previousRoute="Home"
      icon={headerState === "ready" && renderHeaderIcon()}
    >
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
                {moment(movie.release_date).format("DD/MM/YYYY")}
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
                  size={32}
                  name="local-movies"
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
            <Button
              label="reviews"
              variant="secondary"
              mb={24}
              icon={
                <MaterialIcons
                  size={24}
                  name="chevron-right"
                  color={colors.background_primary}
                />
              }
              onPress={() => navigate("MovieReviews", { id })}
            />
            <Button
              label="atores"
              variant="secondary"
              mb={24}
              icon={
                <MaterialIcons
                  size={24}
                  name="chevron-right"
                  color={colors.background_primary}
                />
              }
              onPress={() => navigate("Actors", { id })}
            />
            <Tabs
              options={[
                {
                  id: "recommendations",
                  label: "RECOMENDAÇÕES",
                },
                {
                  id: "similar",
                  label: "SIMILARES",
                },
              ]}
              onChange={(value: TTabStatus) => setTabStatus(value)}
              value={tabStatus}
            />
            <TabScreen>
              {tabStatus === "recommendations" && (
                <Recommendations
                  id={movie.id}
                  isFocus={tabStatus === "recommendations"}
                />
              )}
              {tabStatus === "similar" && (
                <Similar id={movie.id} isFocus={tabStatus === "similar"} />
              )}
            </TabScreen>
          </Content>
        </Container>
      </ScreenState>
    </ScreenTemplate>
  );
}
