import { Tag } from "primereact/tag";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";

type TagSeverity =
  | "danger"
  | "success"
  | "info"
  | "warning"
  | "secondary"
  | "contrast"
  | null
  | undefined;

const getSeverity = (
  state: number
): { value: string; severity: TagSeverity } | undefined => {
  switch (state) {
    case 0:
      return {
        value: "Deshabilitado",
        severity: "danger",
      };
    case 1:
      return {
        value: "Habilitado",
        severity: "success",
      };
    default:
      return {
        value: "Desconocido",
        severity: "info",
      };
  }
};

export const ColumnTemplateStatus = (
  props: ColumnFormProps,
  rowData: any
): React.ReactElement => {
  const { field } = props;
  const severityResult = getSeverity(rowData[field ?? ""]);
  if (!severityResult) return <></>;
  const { value, severity } = severityResult;
  return <Tag value={value} severity={severity} />;
};
