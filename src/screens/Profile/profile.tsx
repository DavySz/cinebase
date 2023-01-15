import React, { useState } from "react";
import { Input } from "../../components/Input/input";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { Avatar, Container, IconWrapper, Photo } from "./profile.styles";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { LogoutModal } from "./LogoutModal/logoutModal";
import { Text } from "../../components/Text/text";
import { useNavigation } from "@react-navigation/native";
import { Toast } from "../../components/Toast/toast";

export function Profile() {
  const { colors } = useTheme();
  const { user, logout } = useAuth();
  const { navigate } = useNavigation();
  const [showToast, setShowToast] = useState(false);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  function renderIcon() {
    return (
      <IconWrapper onPress={() => setShowLogoutModal(true)}>
        <AntDesign name="poweroff" size={24} color={colors.main} />
      </IconWrapper>
    );
  }

  async function handleLogout() {
    try {
      await logout();
      navigate("SignIn");
    } catch {
      setShowLogoutModal(false);
      setShowToast(true);
    }
  }

  return (
    <ScreenTemplate title="Perfil" icon={renderIcon()}>
      <Container>
        {user.photo ? (
          <Photo source={{ uri: user.photo }} />
        ) : (
          <Avatar>
            <Text color="background_primary" size="48" font="secondary_600">
              {user.name.charAt(0).toUpperCase()}
            </Text>
          </Avatar>
        )}

        <Input
          selectTextOnFocus={false}
          value={user.name}
          editable={false}
          mb={8}
        />
        <Input selectTextOnFocus={false} value={user.email} editable={false} />
        <LogoutModal
          onClose={() => setShowLogoutModal(false)}
          visible={showLogoutModal}
          onAction={handleLogout}
        />
        <Toast
          description="Ocorreu um problema ao sair, por favor tente novamente!"
          onChangeVisible={() => setShowToast(false)}
          title="Opsss, algo deu errado!"
          visible={showToast}
          variant="error"
        />
      </Container>
    </ScreenTemplate>
  );
}
