import styled, { css } from "styled-components/native";

interface IInput {
  mb?: number;
}

export const Container = styled.TextInput<IInput>`
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.background_primary};

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}px;
    `}
`;
