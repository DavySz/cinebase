import React from "react";
import { Text } from "../Text/text";
import { Container, GhostView, IconWrapper } from "./header.styles";
import { IHeader } from "./header.types";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

export function Header({ title, previousRoute, icon }: IHeader) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      {previousRoute ? (
        <IconWrapper onPress={() => navigation.goBack()}>
          <Feather
            name="arrow-left"
            size={24}
            color={colors.background_primary}
          />
        </IconWrapper>
      ) : (
        <GhostView />
      )}
      {title && (
        <Text color="background_primary" font="secondary_600" size="24">
          {title}
        </Text>
      )}
      {!title && (
        <Text color="main" font="secondary_600" size="24">
          CINE
          <Text color="background_primary" font="secondary_600" size="24">
            BASE
          </Text>
        </Text>
      )}
      {icon ? icon : <GhostView />}
    </Container>
  );
}
