import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

export type TVariant = "primary" | "secondary";
export interface IButton extends TouchableOpacityProps {
  label: string;
  variant?: TVariant;
  icon?: ReactNode;
}
