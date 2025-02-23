import {
  DropdownPassThroughOptions,
  DropdownProps,
  DropdownChangeEvent,
  DropdownFilterOptions,
} from "primereact/dropdown";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { CSSTransitionProps } from "primereact/csstransition";
import { VirtualScrollerProps } from "primereact/virtualscroller";
import { SelectItemOptionsType } from "primereact/selectitem";

export interface SelectSimpleFormProps<T = unknown> {
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  ariaLabel?: string;
  ariaLabelledBy?: string;
  autoFocus?: boolean;
  autoOptionFocus?: boolean;
  checkmark?: boolean;
  className?: string;
  clearIcon?: React.ReactNode;
  collapseIcon?: React.ReactNode;
  dataKey?: string;
  disabled?: boolean;
  dropdownIcon?: React.ReactNode;
  editable?: boolean;
  emptyFilterMessage?:
    | React.ReactNode
    | ((props: DropdownProps) => React.ReactNode);
  emptyMessage?: React.ReactNode | ((props: DropdownProps) => React.ReactNode);
  filter?: boolean;
  filterBy?: string;
  filterClearIcon?: React.ReactNode;
  filterIcon?: React.ReactNode;
  filterInputAutoFocus?: boolean;
  filterLocale?: string;
  filterMatchMode?:
    | "endsWith"
    | "startsWith"
    | "contains"
    | "equals"
    | "notEquals";
  filterPlaceholder?: string;
  filterTemplate?:
    | React.ReactNode
    | ((options: { filterOptions: DropdownFilterOptions }) => React.ReactNode);
  focusInputRef?: React.Ref<HTMLInputElement>;
  focusOnHover?: boolean;
  highlightOnSelect?: boolean;
  id: string;
  inputId?: string;
  inputRef?: React.Ref<HTMLSelectElement>;
  invalid?: boolean;
  itemTemplate?: React.ReactNode | ((option: T) => React.ReactNode);
  loading?: boolean;
  loadingIcon?: React.ReactNode;
  maxLength?: number;
  name: string;
  optionDisabled?: string | ((option: T) => boolean);
  optionGroupChildren?: string;
  optionGroupLabel?: string;
  optionGroupTemplate?:
    | React.ReactNode
    | ((option: T, index: number) => React.ReactNode);
  optionLabel?: string;
  options?: SelectItemOptionsType;
  optionValue?: string;
  panelClassName?: string;
  panelFooterTemplate?:
    | React.ReactNode
    | ((props: DropdownProps, hide: () => void) => React.ReactNode);
  panelStyle?: React.CSSProperties;
  placeholder?: string;
  pt?: DropdownPassThroughOptions;
  ptOptions?: PassThroughOptions;
  required?: boolean;
  resetFilterOnHide?: boolean;
  scrollHeight?: string;
  selectOnFocus?: boolean;
  showClear?: boolean;
  showFilterClear?: boolean;
  showOnFocus?: boolean;
  style?: React.CSSProperties;
  tabIndex?: number;
  tooltip?: string;
  tooltipOptions?: TooltipOptions;
  transitionOptions?: CSSTransitionProps;
  unstyled?: boolean;
  useOptionAsValue?: boolean;
  value?: string | number | object;
  valueTemplate?:
    | React.ReactNode
    | ((option: T, props: DropdownProps) => React.ReactNode);
  variant?: "filled" | "outlined";
  virtualScrollerOptions?: VirtualScrollerProps | null;
  label?: string;
  onChange?: (event: DropdownChangeEvent) => void;
}
