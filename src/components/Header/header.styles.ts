import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.header};

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: ${48 + Math.round(Number(StatusBar.currentHeight))}px 24px 48px 24px;
`;

export const IconWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
