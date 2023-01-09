import styled, { css } from "styled-components/native";

interface IChip {
  spacing?: number;
}

export const Container = styled.View<IChip>`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.header};

  border-radius: 16px;

  align-items: center;
  justify-content: center;

  ${({ spacing }) =>
    spacing &&
    css`
      margin: ${spacing}px;
    `}
`;
