import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape_dark};

  padding: 0 24px;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;

  margin-bottom: 24px;
`;

export const IconWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 1px;
`;

export const Avatar = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;

  margin-bottom: 24px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.header};
`;
