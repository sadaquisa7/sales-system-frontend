"use client";

import { useState, useMemo } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { InputTextareaFormProps } from "@/interfaces/components/form/inputs/inputTextarea.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageSimpleFormComponent from "@/components/form/messages/messageSimple.component";

const propsDefault: Partial<InputTextareaFormProps> = {
  autoResize: false,
  invalid: false,
  pt: {},
  ptOptions: {},
  tooltip: "",
  tooltipOptions: {},
  unstyled: false,
  variant: "outlined",
  value: "",
  name: "input-textarea-name",
  id: "input-textarea-id",
  required: false,
  readOnly: false,
  disabled: false,
};

const InputTextareaFormComponent: React.FC<InputTextareaFormProps> = (
  propsCurrent
) => {
  const props = useMemo(
    () => ({
      ...propsDefault,
      ...propsCurrent,
      invalid: propsCurrent.errors && propsCurrent.errors.length > 0,
    }),
    [propsCurrent]
  );

  const [internalValue, setInternalValue] = useState(propsCurrent.value || "");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    if (props.onChange) {
      props.onChange(event);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <div>
      {props.label && (
        <LabelFormComponent
          for={props.name ?? "name-input-text"}
          value={props.label}
        />
      )}
      <InputTextarea
        autoResize={props.autoResize}
        invalid={props.invalid}
        keyfilter={props.keyfilter}
        pt={props.pt}
        ptOptions={props.ptOptions}
        tooltip={props.tooltip}
        tooltipOptions={props.tooltipOptions}
        unstyled={props.unstyled}
        variant={props.variant}
        value={props.value ?? internalValue}
        onChange={handleChange}
        id={props.id}
        name={props.name}
        className="w-full"
        required={props.required}
        readOnly={props.readOnly}
        disabled={props.disabled}
        rows={props.rows}
        cols={props.cols}
      />

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

export default InputTextareaFormComponent;
