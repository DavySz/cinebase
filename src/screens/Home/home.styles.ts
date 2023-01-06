import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape_dark};

  padding: 24px;
  padding-bottom: 0px;
`;

export const Separator = styled.View`
  height: 24px;
`;
