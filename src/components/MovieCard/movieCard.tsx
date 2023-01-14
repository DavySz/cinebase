import { IMDB_IMAGES_BASE_URL } from "@env";
import React from "react";
import {
  Container,
  ImageWrapper,
  Footer,
  TextWrapper,
  IconWrapper,
  PressWrapper,
} from "./movieCard.styles";
import { IMovieCard } from "./movieCard.types";
import { Text } from "../Text/text";

function MovieCard({ imagePath, title, overview, icon, onPress }: IMovieCard) {
  return (
    <Container>
      <PressWrapper onPress={onPress}>
        <ImageWrapper
          source={{ uri: `${IMDB_IMAGES_BASE_URL}${imagePath}` }}
          borderRadius={8}
        />
      </PressWrapper>
      <Footer>
        <TextWrapper>
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
        </TextWrapper>
        <IconWrapper>{icon && icon}</IconWrapper>
      </Footer>
    </Container>
  );
}

export default React.memo(MovieCard);
