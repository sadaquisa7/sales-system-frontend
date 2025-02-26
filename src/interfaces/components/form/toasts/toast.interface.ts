export type TOAST_DETAIL =
  | string
  | object
  | number
  | (string | object | number)[];

export interface Toast {
  id: number;
  severity: "success" | "info" | "warn" | "error" | "secondary" | "contrast";
  summary: string;
  detail: TOAST_DETAIL;
  life: number;
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center"
    | "center";
}

export interface ToastContextValue {
  toasts: Toast[];
  success: (
    detail: TOAST_DETAIL,
    life?: number,
    position?: Toast["position"]
  ) => void;
  info: (
    detail: TOAST_DETAIL,
    life?: number,
    position?: Toast["position"]
  ) => void;
  warn: (
    detail: TOAST_DETAIL,
    life?: number,
    position?: Toast["position"]
  ) => void;
  error: (
    detail: TOAST_DETAIL,
    life?: number,
    position?: Toast["position"]
  ) => void;
  secondary: (
    detail: TOAST_DETAIL,
    life?: number,
    position?: Toast["position"]
  ) => void;
  contrast: (
    detail: TOAST_DETAIL,
    life?: number,
    position?: Toast["position"]
  ) => void;
  removeToast: (id: number) => void;
}
