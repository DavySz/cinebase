import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const ImageWrapper = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const Header = styled.View`
  padding: 12px;
`;

export const Footer = styled.View`
  padding: 12px;
  flex-direction: row;
`;
