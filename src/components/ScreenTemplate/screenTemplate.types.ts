import { ReactNode } from "react";
import { IHeader } from "../Header/header.types";

export interface IScreenTemplate extends IHeader {
  children: ReactNode;
}
