import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 16px;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.header};
  flex-direction: row;
`;

export const ImageWrapper = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 200px;
  height: 200px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`;
