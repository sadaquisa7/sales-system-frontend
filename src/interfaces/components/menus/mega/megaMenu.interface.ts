import { MegaMenuPassThroughOptions, MegaMenuProps } from "primereact/megamenu";
import { PassThroughOptions } from "primereact/passthrough";
import { CSSTransitionProps } from "primereact/csstransition";
import { IconType } from "primereact/utils";
import { MenuItem } from "primereact/menuitem";

export interface MegaMenuComponentProps {
  children?: React.ReactNode; // Used to get the child elements of the component
  collapseIcon?: IconType<MegaMenuProps> | null; // Icon to display when collapsing
  expandedKeys?: { [key: string]: boolean }; // Keys of expanded menu items
  expandIcon?: IconType<MegaMenuProps> | null; // Icon to display when expanding
  items: MenuItem[]; // An array of menu items from primereact/menuitem
  multiple?: boolean; // Allows multiple menu items to be expanded
  pt?: MegaMenuPassThroughOptions | null; // Uses to pass attributes to DOM elements inside the component
  ptOptions?: PassThroughOptions | null; // Used to configure passthrough(pt) options of the component
  transitionOptions?: CSSTransitionProps | null; // Transition options for animations
  unstyled?: boolean; // When enabled, removes component-related styles
  className?: string; // Custom CSS class for styling
  breakpoint?: string | null; // The breakpoint to define the maximum width boundary when responsiveness is enabled
  end?: React.ReactNode; // The template of trailing element
  menuIcon?: IconType<MegaMenuProps> | null; // Icon to display in the horizontal menu
  orientation?: "horizontal" | "vertical"; // Defines the orientation (horizontal or vertical)
  scrollHeight?: string; // Maximum height of the options panel on responsive mode
  start?: React.ReactNode | ((props: MegaMenuProps) => React.ReactNode); // The template of starting element
  submenuIcon?: IconType<MegaMenuProps>; // Icon of the submenu
  tabIndex?: number | null; // Index of the element in tabbing order
  endItems?: MenuItem[];
}
