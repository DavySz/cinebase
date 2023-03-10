import React from "react";
import { Container } from "./text.styles";
import { IText } from "./text.types";

export function Text({ children, size, color, font, mb, ...rest }: IText) {
  return (
    <Container size={size} color={color} font={font} mb={mb} {...rest}>
      {children}
    </Container>
  );
}
