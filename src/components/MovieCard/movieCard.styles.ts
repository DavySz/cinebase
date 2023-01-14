import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 16px;
`;

export const ImageWrapper = styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const Footer = styled.View`
  padding-top: 12px;
  flex-direction: row;
  align-items: center;
`;

export const TextWrapper = styled.View`
  flex: 1;
  margin-right: 8px;
`;

export const IconWrapper = styled.View`
  padding: 1px;
`;

export const PressWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
