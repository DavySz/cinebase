import React from "react";
import { Header } from "../Header/header";
import { Container } from "./screenTemplate.styles";
import { IScreenTemplate } from "./screenTemplate.types";

export function ScreenTemplate({
  title,
  children,
  previousRoute,
}: IScreenTemplate) {
  return (
    <Container>
      <Header previousRoute={previousRoute} title={title} />
      {children}
    </Container>
  );
}
