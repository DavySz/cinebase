export type TOption = {
  id: number | string;
  label: string;
  disabled?: boolean;
};

export interface ITabs {
  options: TOption[];
  value?: number | string;
  onChange?: Function;
}
