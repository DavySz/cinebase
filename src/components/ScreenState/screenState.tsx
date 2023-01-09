import React from "react";
import { Loading } from "../Loading/loading";
import { ErrorState } from "./ErrorState/errorState";
import { Container } from "./screenState.styles";
import { IScreenState } from "./ScreenState.types";

export function ScreenState({
  screenState,
  children,
  errorRecoveryCallback,
}: IScreenState) {
  return (
    <Container>
      {screenState === "ready" && children}
      {screenState === "empty" && children}
      {screenState === "loading" && <Loading full />}
      {screenState === "error" && (
        <ErrorState errorRecoveryCallback={() => errorRecoveryCallback()} />
      )}
    </Container>
  );
}
