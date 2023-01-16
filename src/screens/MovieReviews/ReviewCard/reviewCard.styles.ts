import styled, { css } from "styled-components/native";

interface IRow {
  justify?: "space-between" | "center";
  align?: "center";
  mb?: number;
}

export const Container = styled.View`
  padding: 16px;
`;

export const Row = styled.View<IRow>`
  flex-direction: row;

  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}

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

export const Photo = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;

  margin-right: 12px;
`;

export const Avatar = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 24px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.header};

  margin-right: 12px;
`;

export const Content = styled.View`
  flex: 1;
`;
