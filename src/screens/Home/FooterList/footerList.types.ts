export type TFooterListState = "loading" | "ready" | "error";

export interface IFooterList {
  footerState: TFooterListState;
  errorRecoveryCallback: () => void;
}
