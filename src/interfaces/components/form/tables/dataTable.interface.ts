import {
  DataTableValueArray,
  DataTableBaseProps,
  SortOrder,
} from "primereact/datatable";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ApiResponse } from "@interfaces/axios/axio.interface";

export interface DataTableFormProps<D>
  extends DataTableBaseProps<DataTableValueArray> {
  columns: ColumnFormProps[];
  serviceGetData?: (params?: QueryParams) => Promise<ApiResponse<D>>;
  titleHeader?: string;
  onRefetchSetter?: (refetchFn: () => void) => void;
}

export type FilterOperator =
  | "="
  | "!="
  | "IN"
  | "BETWEEN"
  | ">"
  | ">="
  | "<"
  | "<="
  | "LIKE";
export interface SortQueryParams {
  field: string;
  direction: "ASC" | "DESC";
}

export interface FilterQueryParams {
  field: string;
  operator: FilterOperator;
  value: string | number | boolean;
}

export interface QueryParams {
  limit?: number;
  page?: number;
  order?: SortQueryParams;
  filters?: FilterQueryParams[];
}

export interface PaginatorProps {
  rows: number;
  first: number;
  totalRecords: number;
  page: number;
}

export interface SortOption {
  field: string;
  order: SortOrder;
}
