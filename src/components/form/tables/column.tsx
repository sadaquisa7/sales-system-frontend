"use client";
import { Column } from "primereact/column";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";

const propsDefault: ColumnFormProps = {
  type: "text",
  headerClassName: "uppercase  !font-bold",
  align: "center",
};

export const ColumnsFormComponent = (
  propsCurrent: ColumnFormProps
): React.ReactElement => {
  const props = { ...propsDefault, ...propsCurrent };
  return <Column key={props.field} {...props} />;
};
