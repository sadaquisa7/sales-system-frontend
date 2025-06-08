import { Column } from "primereact/column";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ColumnsTemplateComponent } from "./column/template";
import { FILTER_MATCH_MODE_OPTIONS } from "@/constants/dataTable.constants";

const propsDefault: ColumnFormProps = {
  type: "text",
  headerClassName: "uppercase  !font-bold",
  align: "center",
  showFilterMenu: false,
};

export const ColumnsFormComponent = (
  propsCurrent: ColumnFormProps
): React.ReactElement => {
  // Combinar props default con los actuales
  let props = { ...propsDefault, ...propsCurrent };

  // Aplicar filtro de opciones
  props = applyFilterOptions(props);

  // Aplicar plantilla del body si no existe
  props = applyBodyTemplate(props);

  return <Column key={props.field} {...props} />;
};

const applyFilterOptions = (props: ColumnFormProps) => {
  if (
    props.showFilterMenu &&
    props.filterOptionsMatchMode &&
    Array.isArray(props.filterOptionsMatchMode)
  ) {
    const filteredOptions = FILTER_MATCH_MODE_OPTIONS.filter((option) =>
      props.filterOptionsMatchMode!.includes(option.value)
    );
    if (filteredOptions.length === 0) {
      return { ...props, showFilterMenu: false };
    }
    return { ...props, filterMatchModeOptions: filteredOptions };
  }
  return props;
};

const applyBodyTemplate = (props: ColumnFormProps) => {
  if (!props.body) {
    const bodyTemplate = ColumnsTemplateComponent(props);
    if (bodyTemplate) {
      return { ...props, body: bodyTemplate };
    }
  }
  return props;
};
