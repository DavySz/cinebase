import React from "react";
import { Text } from "../Text/text";
import { Container } from "./button.styles";
import { IButton } from "./button.types";

export function Button({ label, ...rest }: IButton) {
  return (
    <Container {...rest} activeOpacity={0.7}>
      <Text color="background_primary" size="16" font="secondary_500">
        {label}
      </Text>
    </Container>
  );
}
