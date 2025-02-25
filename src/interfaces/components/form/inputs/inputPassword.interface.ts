import { PasswordPassThroughOptions } from "primereact/password";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { KeyFilterType } from "primereact/keyfilter";
import { CSSTransitionProps } from "primereact/csstransition";

export interface InputPasswordFormProps {
  appendTo?: "self" | HTMLElement | undefined | null | (() => HTMLElement);
  feedback?: boolean;
  invalid?: boolean;
  keyfilter?: KeyFilterType;
  mediumLabel?: string;
  mediumRegex?: string;
  promptLabel?: string;
  pt?: PasswordPassThroughOptions;
  ptOptions?: PassThroughOptions | null;
  strongLabel?: string;
  strongRegex?: string;
  toggleMask?: boolean;
  tooltip?: string;
  tooltipOptions?: TooltipOptions | null;
  transitionOptions?: CSSTransitionProps;
  unstyled?: boolean;
  variant?: "filled" | "outlined";
  weakLabel?: string;
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | readonly string[] | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: string[];
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
}
