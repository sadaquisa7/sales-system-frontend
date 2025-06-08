import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";
import { DataTableFilterMeta } from "primereact/datatable";

export interface SectionsListProps<D> {
  columns: ColumnFormProps[];
  header?: Header;
  serviceGetData?: (params?: QueryParams) => Promise<ApiResponse<D>>;
  params?: QueryParams;
  filters?: DataTableFilterMeta;
  globalFilterFields?: string[];
}

export interface ActionHandlers {
  executeLoading: (loading: boolean, response?: ApiResponse) => void;
  setShowConfirm: (show: boolean) => void;
  setPendingService: (service: () => () => Promise<ApiResponse>) => void;
}

export interface BtnCreate {
  name?: string;
  redirect: string;
}

export interface Header {
  title: string;
  btnCreate?: BtnCreate;
}
