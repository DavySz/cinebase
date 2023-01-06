import { IMDB_IMAGES_BASE_URL } from "@env";
import React from "react";
import { Container, ImageWrapper } from "./movieCard.styles";
import { IMovieCard } from "./movieCard.types";
import { Entypo } from "@expo/vector-icons";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { Text } from "../Text/text";

export function MovieCard({ imagePath, title }: IMovieCard) {
  const theme = useTheme();

  return (
    <Container style={{ elevation: 2 }}>
      <View style={{ flexDirection: "row" }}>
        <ImageWrapper source={{ uri: `${IMDB_IMAGES_BASE_URL}${imagePath}` }} />
        <View>
          <Entypo name="star" size={24} color={theme.colors.start_icon} />
          <Entypo name="star" size={24} color={theme.colors.start_icon} />
          <Entypo name="star" size={24} color={theme.colors.start_icon} />
          <Entypo name="star" size={24} color={theme.colors.start_icon} />
          <Entypo
            name="star-outlined"
            size={24}
            color={theme.colors.start_icon}
          />
        </View>
      </View>
      <View style={{ flex: 1, padding: 8 }}>
        <Text size="20" color="background_primary" font="secondary_600">
          {title}
        </Text>
      </View>
    </Container>
  );
}
