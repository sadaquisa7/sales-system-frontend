import { ColumnProps } from "primereact/column";

export interface ColumnFormProps extends ColumnProps {
  type?: TYPE;
}

export type TYPE = "img" | "text" | "url" | "status";
