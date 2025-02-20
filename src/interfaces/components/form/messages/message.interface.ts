import { MessagePassThroughOptions } from "primereact/message";
import { PassThroughOptions } from "primereact/passthrough";

export interface MessageFormProps {
  severity?: "error" | "success" | "secondary" | "info" | "contrast" | "warn";
  text?: string;
  icon?: string;
  unstyled?: boolean;
  pt?: MessagePassThroughOptions | null;
  ptOptions?: PassThroughOptions | null;
}
