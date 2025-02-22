import { InputTextPassThroughOptions } from "primereact/inputtext";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { KeyFilterType } from "primereact/keyfilter";
import { InputMaskChangeEvent } from "primereact/inputmask";

export interface InputMaskFormProps {
  autoClear?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  keyfilter?: KeyFilterType;
  mask?: string;
  pt?: InputTextPassThroughOptions;
  ptOptions?: PassThroughOptions | null;
  readOnly?: boolean;
  required?: boolean;
  size?: string | number;
  slotChar?: string;
  tooltip?: string;
  tooltipOptions?: TooltipOptions | null;
  unmask?: boolean;
  unstyled?: boolean;
  validateOnly?: boolean;
  value?: string | null;
  variant?: "filled" | "outlined";
  id: string;
  name: string;
  group?: boolean;
  leftAddon?: string;
  leftAddonType?: "icon" | "text";
  rightAddon?: string;
  rightAddonType?: "icon" | "text";
  label?: string;
  placeholder?: string;
  onChange?: (event: InputMaskChangeEvent) => void;
}
