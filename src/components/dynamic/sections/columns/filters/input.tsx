"use client";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ColumnFilterElementTemplateOptions } from "primereact/column";

import InputTextFormComponent from "@/components/form/inputs/inputText.component";
import { useMemo } from "react";

export const ColumnFilterInput = (
  { field }: ColumnFormProps,
  {
    value: initialValue,
    filterCallback,
    filterApplyCallback,
    index,
  }: ColumnFilterElementTemplateOptions
): React.ReactElement => {
  const value = useMemo(() => initialValue ?? "", [initialValue]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterCallback(event.target.value, index);
  };
  const handleEnter = (value: string) => {
    filterApplyCallback(value);
  };
  return (
    <InputTextFormComponent
      id={`filterInput${field ?? ""}`}
      name={`filterInput${field ?? ""}`}
      value={value}
      onChange={handleChange}
      onEnter={handleEnter}
    />
  );
};
