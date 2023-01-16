import styled, { css } from "styled-components/native";
import { Text } from "../../components/Text/text";

interface IRow {
  justify?: "space-between" | "center";
  mb?: number;
}

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 24 },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Description = styled(Text)`
  line-height: 21px;
  text-align: justify;
`;

export const Footer = styled.View``;

export const Photo = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;

  margin-right: 12px;
`;

export const Avatar = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.header};

  margin-right: 12px;
`;

export const Row = styled.View<IRow>`
  flex-direction: row;

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
