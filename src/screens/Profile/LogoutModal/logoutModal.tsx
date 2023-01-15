import React from "react";
import { Modal } from "react-native";
import { useTheme } from "styled-components/native";
import { Text } from "../../../components/Text/text";
import {
  Container,
  Content,
  ModalButton,
  Row,
  Wrapper,
} from "./logoutModal.styles";
import { ILogoutModal } from "./logoutModal.types";

export function LogoutModal({ onClose, visible }: ILogoutModal) {
  const { colors } = useTheme();
  return (
    <Modal
      animationType="fade"
      onDismiss={onClose}
      visible={visible}
      transparent
    >
      <Container>
        <Content>
          <Wrapper>
            <Text
              color="background_primary"
              font="secondary_600"
              size="20"
              mb={32}
            >
              Você tem certeza que deseja sair?
            </Text>
          </Wrapper>
          <Row>
            <ModalButton borderLeft onPress={onClose} color={colors.header}>
              <Text color="background_primary" size="16" font="primary_400">
                Cancelar
              </Text>
            </ModalButton>
            <ModalButton borderRight color={colors.main}>
              <Text color="background_primary" size="16" font="primary_400">
                Sair
              </Text>
            </ModalButton>
          </Row>
        </Content>
      </Container>
    </Modal>
  );
}
