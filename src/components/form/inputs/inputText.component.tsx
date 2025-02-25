"use client";
import { useState, useMemo } from "react";

import { InputText } from "primereact/inputtext";
import { InputTextFormProps } from "@/interfaces/components/form/inputs/inputText.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageSimpleFormComponent from "@/components/form/messages/messageSimple.component";

const propsDefault: Partial<InputTextFormProps> = {
  invalid: false,
  pt: {},
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
  group: false,
  leftAddonType: "text",
  rightAddonType: "text",
  required: false,
  readOnly: false,
  disabled: false,
};

const InputTextFormComponent: React.FC<InputTextFormProps> = (propsCurrent) => {
  const props = useMemo(
    () => ({
      ...propsDefault,
      ...propsCurrent,
      invalid: propsCurrent.errors && propsCurrent.errors.length > 0,
    }),
    [propsCurrent]
  );

  const [internalValue, setInternalValue] = useState(propsCurrent.value || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (props.onChange) {
      props.onChange(event);
    } else {
      setInternalValue(newValue);
    }
  };

  // const dynamicPt = useMemo(() => {
  //   return {
  //     root: {
  //       className: `block w-full ${
  //         !props.group ? "rounded-md" : ""
  //       } bg-white px-3 py-1.5 text-base ${
  //         errors.length > 0
  //           ? "text-red-900 outline outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
  //           : "text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
  //       } sm:text-sm/6`,
  //     },
  //   };
  // }, [errors, props.group]);

  return (
    <div>
      {props.label && (
        <LabelFormComponent for={props.name} value={props.label} />
      )}
      <div className={props.group ? "p-inputgroup" : ""}>
        {props.leftAddon && (
          <span className="p-inputgroup-addon">
            {props.leftAddonType === "icon" ? (
              <i className={`pi ${props.leftAddon}`}></i>
            ) : (
              <span>{props.leftAddon}</span>
            )}
          </span>
        )}
        <InputText
          invalid={props.invalid}
          keyfilter={props.keyfilter}
          pt={props.pt}
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
          placeholder={props.placeholder}
          className="p-inputtext-sm w-full"
          required={props.required}
          readOnly={props.readOnly}
          disabled={props.disabled}
        />
        {props.rightAddon && (
          <span className="p-inputgroup-addon">
            {props.rightAddonType === "icon" ? (
              <i className={`pi ${props.rightAddon}`}></i>
            ) : (
              <span>{props.rightAddon}</span>
            )}
          </span>
        )}
      </div>
      {props.errors && props.errors.length > 0 && (
        <div className="pt-1 space-y-1">
          {props.errors.map((error, index) => (
            <div key={index}>
              <MessageSimpleFormComponent text={error} severity="error" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputTextFormComponent;
