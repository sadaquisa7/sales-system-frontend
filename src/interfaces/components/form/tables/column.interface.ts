import { ColumnProps } from "primereact/column";

export interface ColumnFormProps extends ColumnProps {
  type?: "img" | "text" | "url";
}
