import { IMDB_IMAGES_BASE_URL } from "@env";
import React from "react";
import { Text } from "../../../components/Text/text";
import { Container, ImageWrapper } from "./actorCard.styles";
import { IActorCard } from "./actorCard.types";

export function ActorCard({ character, imagePath, name }: IActorCard) {
  return (
    <Container>
      <ImageWrapper source={{ uri: `${IMDB_IMAGES_BASE_URL}${imagePath}` }} />
      <Text color="background_primary" size="16" font="secondary_600">
        {name}
      </Text>
      <Text color="background_primary" size="12" font="primary_400">
        {character}
      </Text>
    </Container>
  );
}
