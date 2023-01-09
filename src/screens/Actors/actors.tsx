import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { EmptyState } from "../../components/ScreenState/EmptyState/emptyState";
import { ScreenState } from "../../components/ScreenState/screenState";
import { TScreenState } from "../../components/ScreenState/ScreenState.types";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { getMovieCredits } from "../../services/imdb/movies/movies";
import { TGetMovieCreditsResponse } from "../../services/imdb/movies/movies.types";
import { ActorCard } from "./ActorCard/actorCard";
import { TRouteParams } from "./actores.types";
import { CardWrapper, Container, Row } from "./actors.styles";

export function Actors() {
  const { id } = useRoute().params as TRouteParams;

  const [credits, setCredits] = useState<TGetMovieCreditsResponse>(
    {} as TGetMovieCreditsResponse
  );
  const [screenState, setScreenState] = useState<TScreenState>("loading");

  async function loadData() {
    try {
      setScreenState("loading");

      const response = await getMovieCredits(id);

      const actors = response.cast.filter(
        (item) => item.known_for_department === "Acting"
      );

      setCredits({
        id: response.id,
        cast: actors,
      });

      if (actors.length > 0) {
        setScreenState("ready");
      } else {
        setScreenState("empty");
      }
    } catch {
      setScreenState("error");
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScreenTemplate title="Atores" previousRoute="Actors">
      <ScreenState
        errorRecoveryCallback={() => loadData()}
        screenState={screenState}
      >
        <Container>
          {credits.cast && (
            <Row>
              {credits.cast.map((item) => {
                return (
                  <CardWrapper>
                    <ActorCard
                      character={item.character}
                      imagePath={item.profile_path}
                      name={item.name}
                    />
                  </CardWrapper>
                );
              })}
            </Row>
          )}
          {screenState === "empty" && <EmptyState />}
        </Container>
      </ScreenState>
    </ScreenTemplate>
  );
}
