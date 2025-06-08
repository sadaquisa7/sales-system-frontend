import {
  MultiSelectChangeEvent,
  MultiSelectPassThroughOptions,
  MultiSelectProps,
  MultiSelectTemplateOptions,
  MultiSelectPanelHeaderTemplateEvent,
} from "primereact/multiselect";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { CSSTransitionProps } from "primereact/csstransition";
import { VirtualScrollerProps } from "primereact/virtualscroller";
import { SelectItemOptionsType } from "primereact/selectitem";
import { ApiResponse } from "@interfaces/axios/axio.interface";

export interface SelectMultipleFormProps<T = unknown> {
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  ariaLabelledBy?: string;
  autoOptionFocus?: boolean;
  checkboxIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  clearIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  dataKey?: string;
  disabled?: boolean;
  display?: "comma" | "chip";
  dropdownIcon?: React.ReactNode;
  emptyFilterMessage?:
    | React.ReactNode
    | ((props: MultiSelectProps) => React.ReactNode);
  emptyMessage?: string;
  filter?: boolean;
  filterBy?: string;
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
    | ((options: MultiSelectTemplateOptions) => React.ReactNode);
  fixedPlaceholder?: boolean;
  flex?: boolean;
  focusOnHover?: boolean;
  id: string;
  inline?: boolean;
  inputId?: string;
  inputRef?: React.Ref<HTMLSelectElement>;
  invalid?: boolean;
  itemCheckboxIcon?: React.ReactNode;
  itemClassName?: string;
  itemTemplate?: React.ReactNode | ((option: T) => React.ReactNode);
  loading?: boolean;
  loadingIcon?: React.ReactNode;
  maxSelectedLabels?: number;
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
  overlayVisible?: boolean;
  panelClassName?: string;
  panelFooterTemplate?:
    | React.ReactNode
    | ((props: MultiSelectProps, hide: () => void) => React.ReactNode);
  panelHeaderTemplate?:
    | React.ReactNode
    | ((event: MultiSelectPanelHeaderTemplateEvent) => React.ReactNode);
  panelStyle?: React.CSSProperties;
  placeholder?: string;
  pt?: MultiSelectPassThroughOptions;
  ptOptions?: PassThroughOptions;
  removeIcon?: React.ReactNode;
  resetFilterOnHide?: boolean;
  scrollHeight?: string;
  selectAll?: boolean;
  selectAllLabel?: string;
  selectedItemsLabel?: string;
  selectedItemTemplate?: React.ReactNode | ((value: T) => React.ReactNode);
  selectionLimit?: number;
  selectOnFocus?: boolean;
  showClear?: boolean;
  showSelectAll?: boolean;
  style?: React.CSSProperties;
  tabIndex?: number;
  tooltip?: string;
  tooltipOptions?: TooltipOptions;
  transitionOptions?: CSSTransitionProps;
  unstyled?: boolean;
  useOptionAsValue?: boolean;
  value?: string[] | number[] | object[];
  variant?: "filled" | "outlined";
  virtualScrollerOptions?: VirtualScrollerProps;
  label?: string;
  onChange?: (event: MultiSelectChangeEvent) => void;
  errors?: string[];
  serviceGetOptions?: () => Promise<ApiResponse<SelectItemOptionsType>>;
  autoLoadService?: boolean;
  textLoading?: string;
  exposeServiceRef?: React.MutableRefObject<(() => Promise<void>) | undefined>;
  onHide?: (event: string[] | number[] | object[]) => void;
}
