import React from "react";
import { Text } from "../Text/text";
import { Container, IconWrapper } from "./header.styles";
import { IHeader } from "./header.types";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export function Header({ title, previousRoute }: IHeader) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <Container>
      {previousRoute ? (
        <IconWrapper onPress={() => navigation.navigate("Home")}>
          <Feather
            name="arrow-left"
            size={24}
            color={colors.background_primary}
          />
        </IconWrapper>
      ) : (
        <View />
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
      <View />
    </Container>
  );
}
