import React from "react";
import { useTheme } from "styled-components/native";
import { Container } from "./loading.styles";
import { ILoading } from "./Loading.types";

export function Loading({ full, minimal }: ILoading) {
  const { colors } = useTheme();
  return (
    <Container color={colors.main} full={full} size="large" minimal={minimal} />
  );
}
