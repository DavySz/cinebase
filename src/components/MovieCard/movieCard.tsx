import { IMDB_IMAGES_BASE_URL } from "@env";
import React from "react";
import { Container, ImageWrapper, Header, Footer } from "./movieCard.styles";
import { IMovieCard } from "./movieCard.types";
import { Text } from "../Text/text";

export function MovieCard({ imagePath, title, overview }: IMovieCard) {
  return (
    <Container>
      <ImageWrapper
        source={{ uri: `${IMDB_IMAGES_BASE_URL}${imagePath}` }}
        borderRadius={8}
      />
      <Footer>
        <Text
          color="background_primary"
          font="secondary_600"
          numberOfLines={1}
          size="16"
        >
          {title}
        </Text>
        <Text
          color="background_primary"
          font="primary_400"
          numberOfLines={1}
          size="12"
        >
          {overview}
        </Text>
      </Footer>
    </Container>
  );
}
