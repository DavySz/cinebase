import { ReactNode } from "react";

export type TScreenState = "ready" | "empty" | "error" | "loading";

export interface IScreenTemplate {
  children: ReactNode;
  screenState: TScreenState;
  errorRecoveryCallback: () => void;
}
