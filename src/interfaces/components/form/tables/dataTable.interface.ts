import { DataTableValueArray, DataTableBaseProps } from "primereact/datatable";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";

export interface DataTableFormProps<TValue extends DataTableValueArray>
  extends DataTableBaseProps<TValue> {
  columns: ColumnFormProps[];
}
