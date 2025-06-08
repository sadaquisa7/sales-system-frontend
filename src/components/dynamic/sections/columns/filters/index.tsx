import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ColumnFilterInput } from "./input";
import { ColumnFilterDate } from "./date";
import { ColumnFilterSelect } from "./select";
import { ColumnFilterMultiSelect } from "./multiselect";

import { ColumnFilterElementTemplateOptions } from "primereact/column";
export const ColumnsFiltersComponent = (
  props: ColumnFormProps
):
  | ((options: ColumnFilterElementTemplateOptions) => React.ReactNode)
  | undefined => {
  const { filterComponent } = props;
  if (filterComponent === "input") {
    return (options) => ColumnFilterInput(props, options);
  } else if (filterComponent === "date") {
    return (options) => ColumnFilterDate(props, options);
  } else if (filterComponent === "select") {
    return (options) => ColumnFilterSelect(props, options);
  } else if (filterComponent === "multiselect") {
    return (options) => ColumnFilterMultiSelect(props, options);
  }
  return undefined;
};
