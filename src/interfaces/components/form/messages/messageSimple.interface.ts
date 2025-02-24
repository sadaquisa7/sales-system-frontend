export interface MessageSimpleFormProps {
  severity?: "error" | "success" | "secondary" | "info" | "contrast" | "warn";
  text?: string;
  icon?: string;
  size?: "small" | "large";
  variant?: "text" | "outlined" | "simple";
}
