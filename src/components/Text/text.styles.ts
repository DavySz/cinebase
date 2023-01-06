import styled, { css } from "styled-components/native";
import { IText } from "./text.types";

export const Container = styled.Text<IText>`
  color: ${({ color, theme }) => `${theme.colors[color]}`};
  font-family: ${({ font, theme }) => `${theme.fonts[font]}`};

  font-size: ${({ size }) => Number(size)}px;

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}px;
    `}
`;
