import { Tag } from "primereact/tag";
export interface ColumnTemplateStatus {
  state: number;
}
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
  props: ColumnTemplateStatus
): React.ReactElement => {
  const severityResult = getSeverity(props.state);
  if (!severityResult) return <></>;
  const { value, severity } = severityResult;
  return <Tag value={value} severity={severity} />;
};
