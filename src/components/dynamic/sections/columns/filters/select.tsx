"use client";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ColumnFilterElementTemplateOptions } from "primereact/column";

import SelectSimpleFormComponent from "@/components/form/selects/selectSimple.component";
import { DropdownChangeEvent } from "primereact/dropdown";
import { useMemo } from "react";

export const ColumnFilterSelect = (
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
    filterApplyCallback(newValue);
  };
  if (filterComponent === "select") {
    const { filter, options, optionLabel, optionValue } =
      filterComponentProps ?? {};
    return (
      <SelectSimpleFormComponent
        id={`filterSelect${field ?? ""}`}
        inputId={`filterSelectInput${field ?? ""}`}
        name={`filterSelect${field ?? ""}`}
        value={value}
        filter={filter}
        options={options}
        optionLabel={optionLabel}
        optionValue={optionValue}
        onChange={handleChange}
      />
    );
  }
};
