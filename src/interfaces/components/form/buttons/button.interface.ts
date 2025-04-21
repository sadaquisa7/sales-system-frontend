import { ButtonPassThroughOptions } from "primereact/button";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
export type SEVERITY =
  | "success"
  | "help"
  | "warning"
  | "secondary"
  | "info"
  | "danger"
  | "contrast";
export interface ButtonFormProps {
  badge?: string | null;
  badgeClassName?: string | null;
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode | null;
  iconPos?: "left" | "top" | "bottom" | "right";
  label?: string | null;
  link?: boolean;
  loading?: boolean;
  loadingIcon?: React.ReactNode | null;
  outlined?: boolean;
  plain?: boolean;
  pt?: ButtonPassThroughOptions | null;
  ptOptions?: PassThroughOptions | null;
  raised?: boolean;
  rounded?: boolean;
  severity?: SEVERITY;
  size?: "small" | "large";
  text?: boolean;
  tooltip?: string;
  tooltipOptions?: TooltipOptions | null;
  unstyled?: boolean;
  visible?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button";
  className?: string;
}
