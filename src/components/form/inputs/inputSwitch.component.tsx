"use client";
import { useState, useMemo } from "react";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import { InputSwitchFormProps } from "@/interfaces/components/form/inputs/inputSwitch.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageSimpleFormComponent from "@/components/form/messages/messageSimple.component";

const propsDefault: Partial<InputSwitchFormProps> = {
  autoFocus: false,
  value: false,
  className: "",
  disabled: false,
  falseValue: false,
  id: "input-switch-id",
  inputRef: null,
  invalid: false,
  name: "input-switch-name",
  pt: {},
  ptOptions: {},
  style: {},
  tabIndex: 0,
  tooltip: "",
  tooltipOptions: {},
  trueValue: true,
  unstyled: false,
  variant: "outlined",
  label: "",
  required: false,
  readOnly: false,
};

const InputSwitchFormComponent: React.FC<InputSwitchFormProps> = (
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
  const [internalChecked, setInternalChecked] = useState(
    propsCurrent.value || false
  );

  const handleChange = (event: InputSwitchChangeEvent) => {
    const checked = event.value;
    if (props.onChange) {
      props.onChange(event);
    } else {
      setInternalChecked(checked);
    }
  };

  return (
    <div>
      {props.label && (
        <LabelFormComponent for={props.name} value={props.label} />
      )}
      <div className="flex items-center gap-2">
        <InputSwitch
          autoFocus={props.autoFocus}
          checked={props.value ?? internalChecked}
          className={props.className}
          disabled={props.disabled}
          id={props.id}
          inputId={props.inputId ?? props.id}
          inputRef={props.inputRef}
          invalid={props.invalid}
          name={props.name}
          pt={props.pt}
          ptOptions={props.ptOptions!}
          style={props.style}
          tabIndex={props.tabIndex}
          tooltip={props.tooltip}
          tooltipOptions={props.tooltipOptions!}
          unstyled={props.unstyled}
          onChange={handleChange}
          required={props.required}
          readOnly={props.readOnly}
        />
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

export default InputSwitchFormComponent;
