import styled from "styled-components/native";

export interface ITab {
  isActive: boolean;
  disabled?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Tab = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ITab>`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.main : theme.colors.background_primary};

  padding-bottom: 8px;

  width: 50%;

  align-items: center;
  justify-content: center;
`;
