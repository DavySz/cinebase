import { ReactNode } from "react";
import { TextProps } from "react-native";
import { TColors, TFonts } from "../../global/theme/theme";

export interface IText extends TextProps {
  mb?: number;
  children: ReactNode;
  font: TFonts;
  color: TColors;
  size: "8" | "12" | "16" | "20" | "24" | "48";
}
