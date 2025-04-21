import { ColumnTemplateText } from "./text";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";

export const ColumnsTemplateComponent = (
  props: ColumnFormProps
): ((rowData: any) => React.ReactNode) | undefined => {
  return (rowData) => ColumnTemplateText(props, rowData);
};
