import React from "react";
import { Header } from "../Header/header";
import { Loading } from "../Loading/loading";
import { ErrorState } from "./ErrorState/errorState";
import { Container } from "./screenTemplate.styles";
import { IScreenTemplate } from "./screenTemplate.types";

export function ScreenTemplate({
  title,
  children,
  screenState,
  previousRoute,
  errorRecoveryCallback,
}: IScreenTemplate) {
  return (
    <Container>
      <Header previousRoute={previousRoute} title={title} />
      {screenState === "ready" && children}
      {screenState === "empty" && children}
      {screenState === "loading" && <Loading full />}
      {screenState === "error" && (
        <ErrorState errorRecoveryCallback={() => errorRecoveryCallback()} />
      )}
    </Container>
  );
}
