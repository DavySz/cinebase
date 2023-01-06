import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 16px;
  width: 100%;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.main};

  border-radius: 8px;
`;
