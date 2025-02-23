import {
  InputSwitchPassThroughOptions,
  InputSwitchChangeEvent,
} from "primereact/inputswitch";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";

export interface InputSwitchFormProps {
  autoFocus?: boolean;
  value?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  falseValue?: boolean | number | string;
  id: string;
  inputId?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  invalid?: boolean;
  name: string;
  pt?: InputSwitchPassThroughOptions;
  ptOptions?: PassThroughOptions | null;
  style?: React.CSSProperties;
  tabIndex?: number;
  tooltip?: string;
  tooltipOptions?: TooltipOptions | null;
  trueValue?: boolean | number | string;
  unstyled?: boolean;
  variant?: "filled" | "outlined";
  label?: string;
  onChange?: (event: InputSwitchChangeEvent) => void;
}
