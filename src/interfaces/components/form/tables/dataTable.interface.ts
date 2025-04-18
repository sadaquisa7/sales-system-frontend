import { DataTableValueArray, DataTableBaseProps } from "primereact/datatable";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ApiResponse } from "@interfaces/axios/axio.interface";

export interface QueryParams {
  limit?: number;
  page?: number;
}
export interface DataTableFormProps<D>
  extends DataTableBaseProps<DataTableValueArray> {
  columns: ColumnFormProps[];
  serviceGetData?: (params?: QueryParams) => Promise<ApiResponse<D>>;
  titleHeader?: string;
}

export interface PaginatorProps {
  rows: number;
  first: number;
  totalRecords: number;
  page: number;
}
