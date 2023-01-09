import { LinearGradient } from "expo-linear-gradient";
import styled, { css } from "styled-components/native";
import { Text } from "../../components/Text/text";

interface IRow {
  justify?: "space-between" | "center";
  mb?: number;
}

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const ImageWrapper = styled.ImageBackground`
  width: 100%;
  height: 250px;

  margin-bottom: 16px;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ["rgba(0,0,0,0.8)", "transparent"],
})`
  width: 100%;
  height: 100%;
  padding: 24px;

  flex-direction: row;
  justify-content: space-between;
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

export const Content = styled.View`
  padding-right: 24px;
  padding-left: 24px;
`;

export const MovieOverview = styled(Text)`
  text-align: justify;
  line-height: 21px;
`;
