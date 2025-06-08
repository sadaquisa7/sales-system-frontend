import { ColumnProps } from "primereact/column";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { DateCalendarFormProps } from "@/interfaces/components/form/dates/calendar.interface";
import { InputTextFormProps } from "@/interfaces/components/form/inputs/inputText.interface";
import { SelectSimpleFormProps } from "@/interfaces/components/form/selects/selectSimple.interface";
import { SelectMultipleFormProps } from "@/interfaces/components/form/selects/selectMultiple.interface";

interface BaseColumnFormProps extends ColumnProps {
  type?: TYPE;
  keyToRender?: string;
  keySeparator?: string;
  displaySeparator?: string;
  actions?: Action[];
  filterOptionsMatchMode?: string[];
}

interface DateColumnFormProps extends BaseColumnFormProps {
  filterComponent?: "date";
  filterComponentProps?: Partial<DateCalendarFormProps>;
}

interface InputColumnFormProps extends BaseColumnFormProps {
  filterComponent?: "input";
  filterComponentProps?: Partial<InputTextFormProps>;
}

interface SelectColumnFormProps extends BaseColumnFormProps {
  filterComponent?: "select";
  filterComponentProps?: Partial<SelectSimpleFormProps>;
}

interface MultiSelectColumnFormProps extends BaseColumnFormProps {
  filterComponent?: "multiselect";
  filterComponentProps?: Partial<SelectMultipleFormProps>;
}

export type ColumnFormProps =
  | DateColumnFormProps
  | InputColumnFormProps
  | SelectColumnFormProps
  | MultiSelectColumnFormProps;

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
