import styled, { css } from "styled-components/native";

interface IRow {
  mb?: number;
}

interface IModalButton {
  borderLeft?: boolean;
  borderRight?: boolean;
  color: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: rgba(52, 52, 52, 0.8);
`;

export const Content = styled.View`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.header};

  margin: 24px;

  padding-top: 16px;
`;

export const ModalButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<IModalButton>`
  width: 50%;

  align-items: center;

  background-color: ${({ color }) => color};

  padding: 8px;

  ${({ borderLeft }) =>
    borderLeft &&
    css`
      border-bottom-left-radius: 16px;
    `}

  ${({ borderRight }) =>
    borderRight &&
    css`
      border-bottom-right-radius: 16px;
    `}
`;

export const Row = styled.View<IRow>`
  flex-direction: row;
  align-items: center;

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb}px;
    `}
`;

export const Wrapper = styled.View`
  padding: 0 24px;
`;
