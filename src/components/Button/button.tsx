import React from "react";
import { Text } from "../Text/text";
import { Container } from "./button.styles";
import { IButton } from "./button.types";

export function Button({
  label,
  variant = "primary",
  mb,
  icon,
  ...rest
}: IButton) {
  return (
    <Container {...rest} activeOpacity={0.7} variant={variant} mb={mb}>
      <Text color="background_primary" size="16" font="secondary_500">
        {label}
      </Text>
      {icon && icon}
    </Container>
  );
}
