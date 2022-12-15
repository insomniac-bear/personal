export interface IButton {
  text: string;
  extraClass?: string;
  onClick: () => void;
  disabled?: boolean;
};
