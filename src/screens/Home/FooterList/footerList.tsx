import React from "react";
import { Button } from "../../../components/Button/button";
import { Loading } from "../../../components/Loading/loading";
import { Separator } from "../home.styles";
import { ErrorText, Wrapper } from "./footerList.styles";
import { IFooterList } from "./footerList.types";

export function FooterList({
  footerState,
  errorRecoveryCallback,
}: IFooterList) {
  return (
    <>
      {footerState === "ready" && <Separator />}
      {footerState === "loading" && (
        <Wrapper>
          <Loading minimal />
        </Wrapper>
      )}
      {footerState === "error" && (
        <Wrapper>
          <ErrorText
            color="background_primary"
            font="secondary_500"
            size="12"
            mb={8}
          >
            Opss..., Algo deu errado ao tentar carregar mais filmes!
          </ErrorText>
          <Button
            label="Tentar Novamente"
            onPress={() => errorRecoveryCallback()}
          />
        </Wrapper>
      )}
    </>
  );
}
