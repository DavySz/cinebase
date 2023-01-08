import React from "react";
import { Text } from "../../../components/Text/text";
import { Container, IconWrapper } from "./infoCard.styles";
import { IInfoCard } from "./infoCard.types";

export function InfoCard({ icon, info }: IInfoCard) {
  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>
      <Text color="background_primary" size="16" font="secondary_600">
        {info}
      </Text>
    </Container>
  );
}
