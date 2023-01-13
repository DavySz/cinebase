import styled, { css, DefaultTheme } from "styled-components/native";
import { TVariant } from "./signInButton.types";

interface IButton {
  variant: TVariant;
  mb?: number;
}

function getBackgroundColor(variant: TVariant, theme: DefaultTheme) {
  if (variant === "secondary") {
    return "transparent";
  }

  return theme.colors.main;
}

export const Container = styled.TouchableOpacity<IButton>`
  padding: 16px;
  width: 100%;

  flex-direction: row;

  align-items: center;

  background-color: ${({ theme, variant }) =>
    getBackgroundColor(variant, theme)};

  border-radius: 8px;

  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.background_primary};
    `}

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}px;
    `}
`;

export const IconWrapper = styled.View`
  margin-right: 16px;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.background_primary};

  padding-right: 16px;
`;
