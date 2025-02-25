import { LabelFormProps } from "@/interfaces/components/form/labels/label.interface";

const propsDefault: Partial<LabelFormProps> = {
  value: "",
  for: "",
};

const LabelFormComponent: React.FC<LabelFormProps> = (propsCurrent) => {
  const props = { ...propsDefault, ...propsCurrent };
  if (!props.value) {
    return "";
  }
  return (
    <label
      className="block text-sm/6 font-bold text-gray-900"
      htmlFor={props.for}
    >
      {props.value}
    </label>
  );
};

export default LabelFormComponent;
