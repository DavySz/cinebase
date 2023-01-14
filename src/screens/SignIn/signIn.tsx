import React, { useState } from "react";
import { Text } from "../../components/Text/text";
import { Container, Content, GhostView, Header } from "./signIn.styles";
import { AntDesign } from "@expo/vector-icons";
import { SignInButton } from "./SignInButton/signInButton";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { ScreenState } from "../../components/ScreenState/screenState";
import { TScreenState } from "../../components/ScreenState/ScreenState.types";

export function SignIn() {
  const { colors } = useTheme();
  const [screenState, setScreenState] = useState<TScreenState>("ready");

  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    setScreenState("loading");
    try {
      await signInWithGoogle();
    } catch {
      setScreenState("error");
    }
  }

  return (
    <ScreenState
      errorRecoveryCallback={() => handleSignInWithGoogle()}
      screenState={screenState}
    >
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="popcorn"
            size={32}
            color={colors.main}
          />
          <Text color="main" size="32" font="secondary_600">
            CINE
            <Text color="background_primary" size="32" font="secondary_600">
              BASE
            </Text>
          </Text>
          <GhostView />
        </Header>
        <Content>
          <Text
            color="background_primary"
            size="32"
            font="secondary_600"
            mb={32}
          >
            Tudo sobre cinema{`\n`}
            em um só lugar!{`\n`}
          </Text>
          <SignInButton
            icon={<AntDesign name="google" color="white" size={24} />}
            onPress={() => handleSignInWithGoogle()}
            label="Entrar com o google"
          />
        </Content>
      </Container>
    </ScreenState>
  );
}
