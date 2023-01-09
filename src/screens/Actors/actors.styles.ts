import styled, { css } from "styled-components/native";

interface IRow {
  justify?: "space-between" | "center";
  mb?: number;
}

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape_dark};

  padding: 24px;
`;

export const Row = styled.View<IRow>`
  flex-direction: row;
  align-items: center;

  flex-wrap: wrap;

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}px;
    `}
`;

export const CardWrapper = styled.View`
  width: 50%;
  padding: 8px;
`;
