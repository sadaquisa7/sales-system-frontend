import { CSSProperties, ReactNode } from "react";
import { ConfirmDialogProps } from "primereact/confirmdialog";
import { DialogBreakpoints, DialogProps } from "primereact/dialog";
import { IconType } from "primereact/utils";

export interface ConfirmDialogComponentProps {
  accept?: () => void;
  acceptClassName?: string;
  acceptIcon?: IconType<ConfirmDialogProps>;
  acceptLabel?: string;
  appendTo?: "self" | HTMLElement | undefined | null | (() => HTMLElement);
  ariaCloseIconLabel?: string;
  baseZIndex?: number;
  blockScroll?: boolean;
  breakpoints?: DialogBreakpoints;
  children?: ReactNode;
  className?: string;
  closable?: boolean;
  closeIcon?: IconType<DialogProps>;
  closeOnEscape?: boolean;
  content?: ReactNode | ((props: any) => ReactNode);
  contentClassName?: string;
  contentStyle?: CSSProperties;
  defaultFocus?: "accept" | "reject";
  dismissableMask?: boolean;
  draggable?: boolean;
  focusOnShow?: boolean;
  footer?: ReactNode | ((props: any) => ReactNode);
  group?: string;
  header?: ReactNode | ((props: any) => ReactNode);
  headerClassName?: string;
  headerStyle?: CSSProperties;
  icon?: IconType<ConfirmDialogProps>;
  icons?: ReactNode | ((props: any) => ReactNode);
  id?: string;
  keepInViewport?: boolean;
  maskClassName?: string;
  maskStyle?: CSSProperties;
  maximizable?: boolean;
  maximized?: boolean;
  maximizeIcon?: IconType<DialogProps>;
  message?: ReactNode | ((props: any) => ReactNode);
  minimizeIcon?: IconType<DialogProps>;
  minX?: number;
  minY?: number;
  modal?: boolean;
  position?:
    | "center"
    | "left"
    | "top"
    | "bottom"
    | "right"
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-left";
  reject?: () => void;
  rejectClassName?: string;
  rejectIcon?: IconType<ConfirmDialogProps>;
  rejectLabel?: string;
  resizable?: boolean;
  rtl?: boolean;
  showHeader?: boolean;
  style?: CSSProperties;
  tagKey?: string;
  transitionOptions?: any;
  unstyled?: boolean;
  visible?: boolean;
  onHide?: () => void;
  onShow?: () => void;
}
