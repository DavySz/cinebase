import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.header};

  padding: 62px 24px 24px 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const GhostView = styled.View`
  width: 32px;
`;
