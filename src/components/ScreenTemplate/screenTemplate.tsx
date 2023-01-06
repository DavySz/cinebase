import React from "react";
import { Header } from "../Header/header";
import { Loading } from "../Loading/loading";
import { Container } from "./screenTemplate.styles";
import { IScreenTemplate } from "./screenTemplate.types";

export function ScreenTemplate({
  children,
  screenState,
  errorRecoveryCallback,
}: IScreenTemplate) {
  return (
    <Container>
      <Header />
      {screenState === "ready" && children}
      {screenState === "loading" && <Loading full />}
      {screenState === "empty" && <></>}
      {screenState === "error" && <></>}
    </Container>
  );
}
