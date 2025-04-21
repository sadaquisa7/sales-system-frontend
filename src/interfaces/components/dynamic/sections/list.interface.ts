import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";

export interface SectionsListProps<D> {
  columns: ColumnFormProps[];
  titleHeader: string;
  serviceGetData?: (params?: QueryParams) => Promise<ApiResponse<D>>;
}
