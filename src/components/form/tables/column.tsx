import { Column } from "primereact/column";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ColumnsTemplateComponent } from "./column/template";
const propsDefault: ColumnFormProps = {
  type: "text",
  headerClassName: "uppercase  !font-bold",
  align: "center",
};

export const ColumnsFormComponent = (
  propsCurrent: ColumnFormProps
): React.ReactElement => {
  const props = { ...propsDefault, ...propsCurrent };
  if (!props.body) {
    const bodyTemplate = ColumnsTemplateComponent(props);
    if (bodyTemplate) {
      props.body = bodyTemplate;
    }
  }
  return <Column key={props.field} {...props} />;
};
