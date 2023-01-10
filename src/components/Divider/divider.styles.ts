import styled from "styled-components/native";

interface ILine {
  height?: number;
}

export const Line = styled.View<ILine>`
  width: 100%;
  height: ${({ height }) => height || 1}px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;
