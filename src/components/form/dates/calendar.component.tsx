"use client";
import { useMemo, useState } from "react";
import { Calendar } from "primereact/calendar";
import {
  DateCalendarFormProps,
  CalendarValue,
} from "@/interfaces/components/form/dates/calendar.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageFormProps from "@/components/form/messages/message.component";
import { SyntheticEvent } from "react";
import { FormEvent, Nullable } from "primereact/ts-helpers";
import { configureLocale } from "@utils/calendar/localeConfig.utils";
import {
  convertToArrayDate,
  formatDateUTC,
} from "@utils/calendar/convertedDate.utils";

configureLocale("es");

const propsDefault: Partial<DateCalendarFormProps> = {
  autoFocus: false,
  autoZIndex: true,
  baseZIndex: 0,
  className: "w-full",
  clearButtonClassName: "p-secondary-button",
  dateFormat: "dd/mm/yy",
  dateFormatInput: "dd/mm/yyyy",
  dateFormatValue: "yyyy-mm-dd HH:MM",
  disabled: false,
  hourFormat: "24",
  iconPos: "right",
  id: "calendar-id",
  inline: false,
  inputId: "calendar-input-id",
  invalid: false,
  keepInvalid: false,
  name: "calendar-name",
  numberOfMonths: 1,
  panelClassName: "",
  placeholder: "",
  selectionMode: "single",
  showButtonBar: true,
  showIcon: true,
  showOnFocus: true,
  showOtherMonths: true,
  showTime: false,
  stepHour: 1,
  stepMinute: 1,
  stepSecond: 1,
  style: {},
  tabIndex: 0,
  todayButtonClassName: "p-secondary-button",
  tooltip: "",
  variant: "outlined",
  view: "date",
  locale: "es",
  hideOnRangeSelection: true,
};

const DateCalendarFormComponent: React.FC<DateCalendarFormProps> = (
  propsCurrent
) => {
  const props = useMemo(
    () => ({
      ...propsDefault,
      ...propsCurrent,
      dateFormat:
        propsCurrent.dateFormatInput?.replace("yyyy", "yy") ||
        propsDefault.dateFormat,
    }),
    [propsCurrent]
  );

  const [internalValue, setInternalValue] = useState<CalendarValue>(
    props.value ?? null
  );

  const convertedValue = useMemo(
    () => convertToArrayDate(internalValue, props.dateFormatValue ?? ""),
    [internalValue, props.dateFormatValue]
  );

  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    event: FormEvent<
      Date | Date[] | (Date | null)[] | SyntheticEvent<Element, Event>
    >
  ) => {
    const newValue = event.value as Nullable<Date | Date[] | (Date | null)[]>;
    const convertedNewValue = formatDateUTC(
      newValue,
      props.dateFormatValue ?? ""
    );
    if (props.onChange) {
      props.onChange(convertedNewValue);
    }
    setInternalValue(convertedNewValue);
    setErrors([]);
  };

  return (
    <div>
      {props.label && (
        <LabelFormComponent for={props.name} value={props.label} />
      )}
      <div>
        <Calendar
          appendTo={props.appendTo}
          ariaLabel={props.ariaLabel}
          ariaLabelledBy={props.ariaLabelledBy}
          autoFocus={props.autoFocus}
          autoZIndex={props.autoZIndex}
          baseZIndex={props.baseZIndex}
          className={props.className}
          clearButtonClassName={props.clearButtonClassName}
          dateFormat={props.dateFormat}
          decrementIcon={props.decrementIcon}
          disabled={props.disabled}
          disabledDates={props.disabledDates}
          disabledDays={props.disabledDays}
          enabledDates={props.enabledDates}
          hideOnDateTimeSelect={props.hideOnDateTimeSelect}
          hideOnRangeSelection={props.hideOnRangeSelection}
          hourFormat={props.hourFormat}
          icon={props.icon}
          iconPos={props.iconPos}
          id={props.id}
          incrementIcon={props.incrementIcon}
          inline={props.inline}
          inputClassName={props.inputClassName}
          inputId={props.inputId ?? props.id}
          inputRef={props.inputRef}
          inputStyle={props.inputStyle}
          invalid={props.invalid}
          keepInvalid={props.keepInvalid}
          locale={props.locale}
          mask={props.mask}
          maskSlotChar={props.maskSlotChar}
          maxDate={props.maxDate}
          maxDateCount={props.maxDateCount}
          minDate={props.minDate}
          monthNavigator={props.monthNavigator}
          name={props.name}
          nextIcon={props.nextIcon}
          numberOfMonths={props.numberOfMonths}
          panelClassName={props.panelClassName}
          panelStyle={props.panelStyle}
          placeholder={props.placeholder}
          prevIcon={props.prevIcon}
          pt={props.pt}
          ptOptions={props.ptOptions}
          readOnlyInput={props.readOnlyInput}
          required={props.required}
          selectionMode={props.selectionMode}
          selectOtherMonths={props.selectOtherMonths}
          shortYearCutoff={props.shortYearCutoff}
          showButtonBar={props.showButtonBar}
          showIcon={props.showIcon}
          showMillisec={props.showMillisec}
          showMinMaxRange={props.showMinMaxRange}
          showOnFocus={props.showOnFocus}
          showOtherMonths={props.showOtherMonths}
          showSeconds={props.showSeconds}
          showTime={props.showTime}
          showWeek={props.showWeek}
          stepHour={props.stepHour}
          stepMillisec={props.stepMillisec}
          stepMinute={props.stepMinute}
          stepSecond={props.stepSecond}
          style={props.style}
          tabIndex={props.tabIndex}
          timeOnly={props.timeOnly}
          todayButtonClassName={props.todayButtonClassName}
          tooltip={props.tooltip}
          tooltipOptions={props.tooltipOptions}
          touchUI={props.touchUI}
          transitionOptions={props.transitionOptions}
          unstyled={props.unstyled}
          value={convertedValue}
          variant={props.variant}
          view={props.view}
          viewDate={props.viewDate}
          visible={props.visible}
          yearNavigator={props.yearNavigator}
          yearRange={props.yearRange}
          onChange={handleChange}
        />
      </div>
      {errors.length > 0 && (
        <div className="pt-1 space-y-1">
          {errors.map((error, index) => (
            <div key={index}>
              <MessageFormProps text={error} severity="error" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateCalendarFormComponent;
