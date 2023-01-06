import React from "react";
import { Text } from "../Text/text";
import { Container } from "./header.styles";
import { IHeader } from "./header.types";

export function Header({ title }: IHeader) {
  return (
    <Container>
      {title && title}
      {!title && (
        <Text color="main" font="secondary_600" size="24">
          CINE
          <Text color="background_primary" font="secondary_600" size="24">
            BASE
          </Text>
        </Text>
      )}
    </Container>
  );
}
