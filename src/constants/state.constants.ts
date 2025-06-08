type TagSeverity =
  | "danger"
  | "success"
  | "info"
  | "warning"
  | "secondary"
  | "contrast"
  | null
  | undefined;

interface StateInfo {
  value: number;
  name: string;
  severity: TagSeverity;
}

export const STATE_LIST: StateInfo[] = [
  { value: 0, name: "Deshabilitado", severity: "danger" },
  { value: 1, name: "Habilitado", severity: "success" },
];

export const getSeverity = (state: number): StateInfo => {
  return (
    STATE_LIST.find((s) => s.value === state) ?? {
      value: state,
      name: "Desconocido",
      severity: "info",
    }
  );
};
