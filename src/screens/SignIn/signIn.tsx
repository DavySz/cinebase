import React from "react";
import { Text } from "../../components/Text/text";
import { Container, Content, GhostView, Header } from "./signIn.styles";
import { AntDesign } from "@expo/vector-icons";
import { SignInButton } from "./SignInButton/signInButton";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export function SignIn() {
  const { colors } = useTheme();

  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (e) {
      console.log("error +> ", e);
    }
  }

  return (
    <Container>
      <Header>
        <MaterialCommunityIcons name="popcorn" size={32} color={colors.main} />
        <Text color="main" size="32" font="secondary_600">
          CINE
          <Text color="background_primary" size="32" font="secondary_600">
            BASE
          </Text>
        </Text>
        <GhostView />
      </Header>
      <Content>
        <Text color="background_primary" size="32" font="secondary_600" mb={32}>
          Tudo sobre cinema{`\n`}
          em um só lugar!{`\n`}
        </Text>
        <Text color="background_primary" size="12" font="primary_500" mb={16}>
          Faça seu login com uma das contas abaixo
        </Text>
        <SignInButton
          icon={<AntDesign name="google" color="white" size={24} />}
          onPress={() => handleSignInWithGoogle()}
          label="Entrar com o google"
        />
      </Content>
    </Container>
  );
}
