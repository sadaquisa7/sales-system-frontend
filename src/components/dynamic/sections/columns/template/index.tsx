import { ColumnTemplateStatus } from "./status";
import { ColumnTemplateActions } from "./actions";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ApiResponse } from "@interfaces/axios/axio.interface";
export const ColumnsTemplateComponent = (
  props: ColumnFormProps,
  executeLoading: (loading: boolean, response?: ApiResponse) => void
): ((rowData: any) => React.ReactNode) | undefined => {
  const { type } = props;
  if (type === "status") {
    return (rowData) => ColumnTemplateStatus(props, rowData);
  }
  if (type === "actions") {
    return (rowData) => ColumnTemplateActions(props, rowData, executeLoading);
  }
  return undefined;
};
