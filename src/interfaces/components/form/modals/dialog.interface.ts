import { ReactNode } from "react";
import {
  DialogProps,
  DialogPassThroughOptions,
  DialogBreakpoints,
  ContentProps,
} from "primereact/dialog";
import { PassThroughOptions } from "primereact/passthrough";
import { CSSTransitionProps } from "primereact/csstransition";
import { IconType } from "primereact/utils";

export interface DialogComponentProps {
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
  content?: React.ReactNode | ((props: ContentProps) => React.ReactNode);
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  dismissableMask?: boolean;
  draggable?: boolean;
  focusOnShow?: boolean;
  footer?: ReactNode | ((props: DialogProps) => ReactNode);
  header?: ReactNode | ((props: DialogProps) => ReactNode);
  headerClassName?: string;
  headerStyle?: React.CSSProperties;
  icons?: ReactNode | ((props: DialogProps) => ReactNode);
  id?: string;
  keepInViewport?: boolean;
  maskClassName?: string;
  maskStyle?: React.CSSProperties;
  maximizable?: boolean;
  maximized?: boolean;
  maximizeIcon?: IconType<DialogProps>;
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
  pt?: DialogPassThroughOptions;
  ptOptions?: PassThroughOptions;
  resizable?: boolean;
  rtl?: boolean;
  showHeader?: boolean;
  style?: React.CSSProperties;
  transitionOptions?: CSSTransitionProps;
  unstyled?: boolean;
  visible?: boolean;
  onHide?: () => void;
}
