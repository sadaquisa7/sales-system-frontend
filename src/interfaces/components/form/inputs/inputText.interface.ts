import { InputTextPassThroughOptions } from "primereact/inputtext";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { KeyFilterType } from "primereact/keyfilter";

export interface InputTextFormProps {
  invalid?: boolean;
  keyfilter?: KeyFilterType;
  pt?: InputTextPassThroughOptions;
  ptOptions?: PassThroughOptions | null;
  size?: string | number;
  tooltip?: string | null;
  tooltipOptions?: TooltipOptions | null;
  unstyled?: boolean;
  validateOnly?: boolean;
  value?: string | null;
  variant?: "filled" | "outlined";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  group?: boolean;
  leftAddon?: string;
  rightAddon?: string;
  leftAddonType?: "text" | "icon";
  rightAddonType?: "text" | "icon";
  errors?: string[];
}
