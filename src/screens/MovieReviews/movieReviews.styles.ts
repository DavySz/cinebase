import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const CardWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})``