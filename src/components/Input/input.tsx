import React from "react";
import { useTheme } from "styled-components/native";
import { Container } from "./input.styles";
import { IInput } from "./input.types";

export const Input = React.forwardRef(({ ...rest }: IInput, ref: any) => {
  const { colors } = useTheme();
  return (
    <Container
      {...rest}
      ref={ref}
      placeholderTextColor={colors.background_primary}
    />
  );
});
