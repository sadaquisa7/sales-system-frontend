import { InputTextPassThroughOptions } from "primereact/inputtext";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";

export interface InputTextFormProps {
  invalid?: boolean;
  keyfilter?:
    | "pint"
    | "int"
    | "pnum"
    | "money"
    | "num"
    | "hex"
    | "email"
    | "alpha"
    | "alphanum"
    | RegExp;
  pt?: InputTextPassThroughOptions | null;
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
}
