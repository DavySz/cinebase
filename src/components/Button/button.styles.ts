import styled, { css, DefaultTheme } from "styled-components/native";
import { TVariant } from "./button.types";

interface IButton {
  variant: TVariant;
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
  justify-content: center;

  background-color: ${({ theme, variant }) =>
    getBackgroundColor(variant, theme)};

  border-radius: 8px;

  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.background_primary};
    `}
`;
