import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";

const getDisplayValue = (
  rawValue: any,
  props: ColumnFormProps
): string | undefined => {
  const { keyToRender, keySeparator = ",", displaySeparator = " " } = props;

  if (!rawValue) return undefined;

  if (keyToRender && typeof rawValue === "object") {
    const keys = keyToRender.split(keySeparator).map((k) => k.trim());
    const values = keys.map((k) => rawValue[k]).filter((v) => v !== undefined);
    return values.length > 0
      ? values.join(displaySeparator)
      : JSON.stringify(rawValue);
  }

  return typeof rawValue === "object" ? JSON.stringify(rawValue) : rawValue;
};

const ArrayItems: React.FC<{
  items: any[];
  props: ColumnFormProps;
}> = ({ items, props }) => {
  if (items.length === 1) {
    return <span>{getDisplayValue(items[0], props)}</span>;
  }
  return (
    <ul className="list-disc pl-4">
      {items.map((item, idx) => (
        <li key={idx}>{getDisplayValue(item, props)}</li>
      ))}
    </ul>
  );
};

export const ColumnTemplateText = (
  props: ColumnFormProps,
  rowData: any
): React.ReactElement => {
  const { field } = props;
  const rawValue = field ? rowData[field] : undefined;

  if (Array.isArray(rawValue)) {
    return <ArrayItems items={rawValue} props={props} />;
  }

  if (typeof rawValue === "object" && rawValue !== null) {
    return <span>{getDisplayValue(rawValue, props)}</span>;
  }

  return <>{rawValue}</>;
};
