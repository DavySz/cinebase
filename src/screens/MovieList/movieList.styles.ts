import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.shape_dark};

  padding: 24px 24px 0 24px;
`;

export const Separator = styled.View`
  height: 24px;
`;

export const IconWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
