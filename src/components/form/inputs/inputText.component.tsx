"use client";
import { useState, useMemo } from "react";

import { InputText } from "primereact/inputtext";
import { InputTextFormProps } from "@/interfaces/components/form/inputs/inputText.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageFormProps from "@/components/form/messages/message.component";

const propsDefault: Partial<InputTextFormProps> = {
  invalid: false,
  pt: {
    root: {
      className:
        "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6",
    },
  },
  ptOptions: {},
  size: "small",
  tooltip: null,
  tooltipOptions: {},
  unstyled: false,
  validateOnly: false,
  value: null,
  variant: "outlined",
  id: "input-text-id",
  name: "input-text-name",
};

const InputTextFormComponent: React.FC<InputTextFormProps> = (propsCurrent) => {
  const props = { ...propsDefault, ...propsCurrent };

  const [internalValue, setInternalValue] = useState(propsCurrent.value || "");
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (props.onChange) {
      props.onChange(event);
    } else {
      setInternalValue(newValue);
    }
    setErrors([]);
  };

  const dynamicPt = useMemo(() => {
    return {
      root: {
        className: `block w-full rounded-md bg-white px-3 py-1.5 text-base ${
          errors.length > 0
            ? "text-red-900 outline outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
            : "text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        } sm:text-sm/6`,
      },
    };
  }, [errors]);

  return (
    <div>
      {props.label && (
        <LabelFormComponent for={props.name} value={props.label} />
      )}
      <InputText
        invalid={props.invalid}
        keyfilter={props.keyfilter}
        pt={dynamicPt}
        ptOptions={props.ptOptions!}
        size={props.size}
        tooltip={props.tooltip!}
        tooltipOptions={props.tooltipOptions!}
        unstyled={props.unstyled}
        validateOnly={props.validateOnly}
        value={props.value !== undefined ? props.value : internalValue}
        variant={props.variant}
        onChange={handleChange}
        id={props.id}
        name={props.name}
      />
      {errors.length > 0 && (
        <div className="pt-1 space-y-1">
          {errors.map((error, index) => (
            <div key={index}>
              <MessageFormProps text={error} severity="error" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputTextFormComponent;
