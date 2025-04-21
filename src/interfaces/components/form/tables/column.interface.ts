import { ColumnProps } from "primereact/column";
import { ApiResponse } from "@interfaces/axios/axio.interface";

export interface ColumnFormProps extends ColumnProps {
  type?: TYPE;
  keyToRender?: string;
  keySeparator?: string;
  displaySeparator?: string;
  actions?: Action[];
}

export interface Action {
  type?: "redirect" | "button" | "delete" | "state";
  icon?: string;
  redirect?: string;
  params?: string[];
  service?:
    | (() => Promise<ApiResponse<any>>)
    | ((id: number) => Promise<ApiResponse<any>>)
    | ((id: number, state: number) => Promise<ApiResponse<any>>);
  columnKey?: string;
  columnKeyId?: string;
}

export type TYPE = "img" | "text" | "url" | "status" | "actions";
