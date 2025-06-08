"use client";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ColumnFilterElementTemplateOptions } from "primereact/column";

import SelectMultipleFormComponent from "@/components/form/selects/selectMultiple.component";
import { DropdownChangeEvent } from "primereact/dropdown";
import { useMemo } from "react";

export const ColumnFilterMultiSelect = (
  { field, filterComponentProps, filterComponent }: ColumnFormProps,
  {
    value: initialValue,
    filterCallback,
    filterApplyCallback,
    index,
  }: ColumnFilterElementTemplateOptions
): React.ReactElement | undefined => {
  const value = useMemo(() => initialValue ?? "", [initialValue]);
  const handleChange = (value: DropdownChangeEvent) => {
    const newValue = value.target.value;
    filterCallback(newValue, index);
  };
  const onHide = (value: string[] | number[] | object[]) => {
    filterApplyCallback(value);
  };
  if (filterComponent === "multiselect") {
    const { filter, options, optionLabel, optionValue } =
      filterComponentProps ?? {};
    return (
      <SelectMultipleFormComponent
        id={`filterMultiSelect${field ?? ""}`}
        inputId={`filterMultiSelectInput${field ?? ""}`}
        name={`filterMultiSelect${field ?? ""}`}
        value={value}
        filter={filter}
        options={options}
        optionLabel={optionLabel}
        optionValue={optionValue}
        onChange={handleChange}
        onHide={onHide}
      />
    );
  }
};
