import React from "react";
import { Container, DescriptionText, IconWrapper } from "./emptyState.styles";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { Text } from "../../Text/text";
import { IEmptyState } from "./emptyState.types";
export function EmptyState({ description }: IEmptyState) {
  const { colors } = useTheme();
  return (
    <Container>
      <IconWrapper>
        <FontAwesome
          name="file-movie-o"
          size={48}
          color={colors.background_primary}
        />
      </IconWrapper>
      <Text color="background_primary" size="24" font="secondary_600" mb={16}>
        Opsss!
      </Text>
      <DescriptionText
        color="background_primary"
        size="12"
        font="secondary_400"
        mb={16}
      >
        {description ? description : "Nenhuma informação foi encontrada!"}
      </DescriptionText>
    </Container>
  );
}
