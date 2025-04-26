import { ColumnTemplateStatus } from "./status";
import { ColumnTemplateActions } from "./actions";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ActionHandlers } from "@interfaces/components/dynamic/sections/list.interface";
export const ColumnsTemplateComponent = (
  props: ColumnFormProps,
  actionHandlers: ActionHandlers
): ((rowData: any) => React.ReactNode) | undefined => {
  const { type } = props;
  if (type === "status") {
    return (rowData) => ColumnTemplateStatus(props, rowData);
  }
  if (type === "actions") {
    return (rowData) => ColumnTemplateActions(props, rowData, actionHandlers);
  }
  return undefined;
};
