import { ReactNode } from "react";
import { TColors, TFonts } from "../../global/theme/theme";

export interface IText {
  mb?: number;
  children: ReactNode;
  font: TFonts;
  color: TColors;
  size: "8" | "16" | "20" | "24" | "48";
}
