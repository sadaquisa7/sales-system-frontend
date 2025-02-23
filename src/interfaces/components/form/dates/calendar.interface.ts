import { CalendarPassThroughOptions, CalendarProps } from "primereact/calendar";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { CSSTransitionProps } from "primereact/csstransition";
import { IconType } from "primereact/utils";
export interface DateCalendarFormProps {
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  ariaLabel?: string;
  ariaLabelledBy?: string;
  autoFocus?: boolean;
  autoZIndex?: boolean;
  baseZIndex?: number;
  children?: React.ReactNode;
  className?: string;
  clearButtonClassName?: string;
  dateFormat?: string;
  decrementIcon?: IconType<CalendarProps>;
  disabled?: boolean;
  disabledDates?: Date[];
  disabledDays?: number[];
  enabledDates?: Date[];
  hideOnDateTimeSelect?: boolean;
  hideOnRangeSelection?: boolean;
  hourFormat?: "12" | "24";
  icon?: IconType<CalendarProps>;
  iconPos?: "left" | "right";
  id?: string;
  incrementIcon?: IconType<CalendarProps>;
  inline?: boolean;
  inputClassName?: string;
  inputId?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  inputStyle?: React.CSSProperties;
  invalid?: boolean;
  keepInvalid?: boolean;
  locale?: string;
  mask?: string;
  maskSlotChar?: string;
  maxDate?: Date;
  maxDateCount?: number;
  minDate?: Date;
  monthNavigator?: boolean;
  name: string;
  nextIcon?: IconType<CalendarProps>;
  numberOfMonths?: number;
  panelClassName?: string;
  panelStyle?: React.CSSProperties;
  placeholder?: string;
  prevIcon?: IconType<CalendarProps>;
  pt?: CalendarPassThroughOptions;
  ptOptions?: PassThroughOptions;
  readOnlyInput?: boolean;
  required?: boolean;
  selectionMode?: "single" | "range" | "multiple";
  selectOtherMonths?: boolean;
  shortYearCutoff?: string;
  showButtonBar?: boolean;
  showIcon?: boolean;
  showMillisec?: boolean;
  showMinMaxRange?: boolean;
  showOnFocus?: boolean;
  showOtherMonths?: boolean;
  showSeconds?: boolean;
  showTime?: boolean;
  showWeek?: boolean;
  stepHour?: number;
  stepMillisec?: number;
  stepMinute?: number;
  stepSecond?: number;
  style?: React.CSSProperties;
  tabIndex?: number;
  timeOnly?: boolean;
  todayButtonClassName?: string;
  tooltip?: string;
  tooltipOptions?: TooltipOptions;
  touchUI?: boolean;
  transitionOptions?: CSSTransitionProps;
  unstyled?: boolean;
  value?: string | Date | number | (string | Date | number | null)[] | null;
  variant?: "filled" | "outlined";
  view?: "month" | "year" | "date";
  viewDate?: Date | null;
  visible?: boolean;
  yearNavigator?: boolean;
  yearRange?: string;
  label?: string;
  onChange?: (
    value: string | Date | number | (string | Date | number | null)[] | null
  ) => void;
  dateFormatValue?: string;
  dateFormatInput?: string;
}

export type CalendarValue =
  | string
  | Date
  | number
  | (string | Date | number | null)[]
  | null;
