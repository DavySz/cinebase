import React from "react";
import { Container, DescriptionText, IconWrapper } from "./errorState.styles";
import { Feather } from "@expo/vector-icons";
import { Text } from "../../Text/text";
import { Button } from "../../Button/button";
import { IErrorState } from "./errorState.types";
import { useTheme } from "styled-components/native";
export function ErrorState({ errorRecoveryCallback }: IErrorState) {
  const { colors } = useTheme();

  return (
    <Container>
      <IconWrapper>
        <Feather name="alert-octagon" size={48} color={colors.main} />
      </IconWrapper>
      <Text color="background_primary" size="24" font="secondary_600" mb={16}>
        Opsss, algo deu errado!
      </Text>
      <DescriptionText
        color="background_primary"
        size="12"
        font="secondary_400"
        mb={16}
      >
        Ocorreu um problema ao tentar carregar as informações, por favor tente
        novamente!
      </DescriptionText>
      <Button
        label="Tentar novamente!"
        onPress={() => errorRecoveryCallback()}
      />
    </Container>
  );
}
