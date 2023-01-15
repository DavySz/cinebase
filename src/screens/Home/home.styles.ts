import styled, { css } from "styled-components/native";
import { Input } from "../../components/Input/input";

interface IRow {
  justify?: "space-between" | "center";
  mb?: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape_dark};

  padding: 24px;
  padding-bottom: 0px;
`;

export const Separator = styled.View`
  height: 24px;
`;

export const Row = styled.View<IRow>`
  flex-direction: row;
  align-items: center;

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

export const IconWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.header};
  align-items: center;
  justify-content: center;

  border-radius: 16px;
  padding: 8px;

  margin-left: 8px;
`;

export const SearchInput = styled(Input)`
  flex: 1;
`;
