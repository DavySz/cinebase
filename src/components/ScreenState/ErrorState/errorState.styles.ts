import styled from "styled-components/native";
import { Text } from "../../Text/text";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.shape_dark};

  padding: 24px;

  height: 300px;
`;

export const IconWrapper = styled.View`
  margin-bottom: 24px;
`;

export const DescriptionText = styled(Text)`
  text-align: center;
`;
