import { Tag } from "primereact/tag";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { getSeverity } from "@constants/state.constants";

export const ColumnTemplateStatus = (
  props: ColumnFormProps,
  rowData: any
): React.ReactElement => {
  const { field } = props;
  const severityResult = getSeverity(rowData[field ?? ""]);
  if (!severityResult) return <></>;
  const { name, severity } = severityResult;
  return <Tag value={name} severity={severity} />;
};
