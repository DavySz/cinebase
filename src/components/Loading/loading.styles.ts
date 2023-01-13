import styled, { css } from "styled-components/native";

interface ILoading {
  full?: boolean;
  minimal?: boolean;
}

export const Container = styled.ActivityIndicator<ILoading>`
  ${({ full }) =>
    full &&
    css`
      flex: 1;
      align-items: center;
      justify-content: center;

      background-color: ${({ theme }) => theme.colors.shape_dark};
    `}

  ${({ minimal }) =>
    !minimal &&
    css`
      height: 300px;
    `}
`;
