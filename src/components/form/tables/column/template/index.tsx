import { ColumnTemplateStatus } from "./status";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";

export const ColumnsTemplateComponent = (
  props: ColumnFormProps
): ((rowData: any) => React.ReactNode) | undefined => {
  if (props.type === "status") {
    return ColumnTemplateStatus;
  }
  return undefined;
};
