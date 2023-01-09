import { ReactNode } from "react";

export type TScreenState = "ready" | "empty" | "error" | "loading";

export interface IScreenState {
  errorRecoveryCallback: () => void;
  screenState: TScreenState;
  children: ReactNode;
}
