import React from "react";
import { useTheme } from "styled-components/native";
import { Container } from "./input.styles";
import { IInput } from "./input.types";

export function Input({ ...rest }: IInput) {
  const { colors } = useTheme();
  return (
    <Container {...rest} placeholderTextColor={colors.background_primary} />
  );
}
