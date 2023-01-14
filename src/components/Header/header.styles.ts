import { Platform, StatusBar } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

function getHeight() {
  if (Platform.OS == "ios") {
    return getStatusBarHeight();
  }
  return 0;
}

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.header};

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: ${48 + Math.round(Number(StatusBar.currentHeight)) + getHeight()}px
    24px 48px 24px;
`;

export const IconWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const GhostView = styled.View`
  width: 24px;
`;
