import React from "react";
import { Text } from "../../../components/Text/text";
import { Container, IconWrapper } from "./signInButton.styles";
import { ISignInButton } from "./signInButton.types";

export function SignInButton({
  label,
  variant = "primary",
  mb,
  icon,
  ...rest
}: ISignInButton) {
  return (
    <Container {...rest} activeOpacity={0.7} variant={variant} mb={mb}>
      <IconWrapper>{icon && icon}</IconWrapper>
      <Text color="background_primary" size="16" font="secondary_500">
        {label}
      </Text>
    </Container>
  );
}
