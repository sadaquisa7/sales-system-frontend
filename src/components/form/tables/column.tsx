"use client";
import { Column } from "primereact/column";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";

const propsDefault: ColumnFormProps = {
  type: "text",
  headerClassName: "uppercase text-center !font-bold",
  alignHeader: "center",
};

export const ColumnsFormComponent = (propsCurrent: ColumnFormProps): any => {
  const props = { ...propsDefault, ...propsCurrent };
  return <Column key={props.field} {...props} />;
};
