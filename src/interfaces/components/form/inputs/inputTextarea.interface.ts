import { InputTextareaProps } from "primereact/inputtextarea";

export interface InputTextareaFormProps extends InputTextareaProps {
  errors?: string[];
  label?: string;
  cols?: number;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
