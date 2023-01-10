import React from "react";
import { Text } from "../Text/text";
import { Container, Tab } from "./tabs.styles";
import { ITabs, TOption } from "./tabs.types";

export function Tabs({ options, onChange, value }: ITabs) {
  function handleChange(newStatus: TOption) {
    onChange?.(newStatus.id);
  }
  return (
    <Container>
      {options.map((option) => (
        <Tab
          onPress={() => !option.disabled && handleChange(option)}
          isActive={value === option.id}
          disabled={option.disabled}
        >
          <Text
            color={value === option.id ? "main" : "background_primary"}
            font="secondary_500"
            size="16"
          >
            {option.label}
          </Text>
        </Tab>
      ))}
    </Container>
  );
}
