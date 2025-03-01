import {
  PanelMenuPassThroughOptions,
  PanelMenuProps,
} from "primereact/panelmenu";
import { PassThroughOptions } from "primereact/passthrough";
import { CSSTransitionProps } from "primereact/csstransition";
import { IconType } from "primereact/utils";

export interface PanelMenuFormProps {
  children?: React.ReactNode;
  collapseIcon?: IconType<PanelMenuProps> | null;
  expandedKeys?: { [key: string]: boolean };
  expandIcon?: IconType<PanelMenuProps> | null;
  items: ItemMenu[];
  multiple?: boolean;
  pt?: PanelMenuPassThroughOptions | null;
  ptOptions?: PassThroughOptions | null;
  transitionOptions?: CSSTransitionProps | null;
  unstyled?: boolean;
  className?: string;
}

export interface ItemMenu {
  label: string;
  icon: string | null;
  items?: ItemMenu[];
  route?: string | null;
}
