export interface IToast {
  visible: boolean;
  lifetime?: number;
  onPress?: () => void;
  variant: TToastVariant;
  onChangeVisible: () => void;
  title: string;
  description: string;
}

export type TToastVariant = "success" | "error" | "info";
