import React from "react";
import { Text } from "../Text/text";
import { Container } from "./Chip.styles";
import { IChip } from "./Chip.types";

export function Chip({ text, spacing }: IChip) {
  return (
    <Container spacing={spacing}>
      <Text color="background_primary" size="12" font="primary_500">
        {text}
      </Text>
    </Container>
  );
}
