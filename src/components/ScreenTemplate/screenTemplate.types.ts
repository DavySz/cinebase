import { ReactNode } from "react";
import { IHeader } from "../Header/header.types";

export type TScreenState = "ready" | "empty" | "error" | "loading";

export interface IScreenTemplate extends IHeader {
  children: ReactNode;
  screenState: TScreenState;
  errorRecoveryCallback: () => void;
}
