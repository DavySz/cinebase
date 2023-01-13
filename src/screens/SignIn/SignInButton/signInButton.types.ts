import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

export type TVariant = "primary" | "secondary";
export interface ISignInButton extends TouchableOpacityProps {
  label: string;
  variant?: TVariant;
  icon?: ReactNode;
  mb?: number;
}
