import React, { useState } from "react";
import { Input } from "../../components/Input/input";
import { ScreenTemplate } from "../../components/ScreenTemplate/screenTemplate";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { Avatar, Container, IconWrapper, Photo } from "./profile.styles";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { LogoutModal } from "./LogoutModal/logoutModal";
import { Text } from "../../components/Text/text";

export function Profile() {
  const { user } = useAuth();
  const { colors } = useTheme();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  function renderIcon() {
    return (
      <IconWrapper onPress={() => setShowLogoutModal(true)}>
        <AntDesign name="poweroff" size={24} color={colors.main} />
      </IconWrapper>
    );
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
        />
      </Container>
    </ScreenTemplate>
  );
}
