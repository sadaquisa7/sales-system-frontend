"use client";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ColumnFilterElementTemplateOptions } from "primereact/column";

import DateCalendarFormComponent from "@/components/form/dates/calendar.component";
import { CalendarValue } from "@/interfaces/components/form/dates/calendar.interface";
import { useMemo } from "react";

export const ColumnFilterDate = (
  { field, filterComponentProps, filterComponent }: ColumnFormProps,
  {
    value: initialValue,
    filterCallback,
    filterApplyCallback,
    index,
  }: ColumnFilterElementTemplateOptions
): React.ReactElement | undefined => {
  const value = useMemo(() => initialValue ?? "", [initialValue]);
  const handleChange = (value: CalendarValue) => {
    filterCallback(value, index);
  };
  const onHide = (value: CalendarValue) => {
    filterApplyCallback(value);
  };
  if (filterComponent === "date") {
    const {
      showTime = false,
      dateFormat = "dd/mm/yy",
      dateFormatInput = "dd/mm/yyyy",
      dateFormatValue = "yyyy-mm-dd",
      numberOfMonths = 2,
      selectionMode = "range",
      maxDate,
      minDate,
    } = filterComponentProps ?? {};
    return (
      <DateCalendarFormComponent
        id={`filterDate${field ?? ""}`}
        inputId={`filterDateInput${field ?? ""}`}
        name={`filterDate${field ?? ""}`}
        value={value}
        numberOfMonths={numberOfMonths}
        selectionMode={selectionMode}
        showIcon={false}
        readOnlyInput={true}
        onChange={handleChange}
        onHide={onHide}
        showTime={showTime}
        dateFormat={dateFormat}
        dateFormatInput={dateFormatInput}
        dateFormatValue={dateFormatValue}
        maxDate={maxDate}
        minDate={minDate}
      />
    );
  }
};
