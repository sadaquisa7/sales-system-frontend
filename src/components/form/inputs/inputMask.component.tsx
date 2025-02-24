"use client";
import { useState, useMemo } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { InputMaskFormProps } from "@/interfaces/components/form/inputs/inputMask.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageSimpleFormComponent from "@/components/form/messages/messageSimple.component";

const propsDefault: Partial<InputMaskFormProps> = {
  autoClear: true,
  disabled: false,
  invalid: false,
  pt: {},
  ptOptions: {},
  readOnly: false,
  required: false,
  size: "small",
  slotChar: "_",
  tooltipOptions: {},
  unmask: false,
  unstyled: false,
  validateOnly: false,
  value: null,
  variant: "outlined",
  id: "input-mask-id",
  name: "input-mask-name",
  group: false,
  leftAddonType: "text",
  rightAddonType: "text",
};

const InputMaskFormComponent: React.FC<InputMaskFormProps> = (propsCurrent) => {
  const props = useMemo(
    () => ({
      ...propsDefault,
      ...propsCurrent,
      invalid: propsCurrent.errors && propsCurrent.errors.length > 0,
    }),
    [propsCurrent]
  );
  const [internalValue, setInternalValue] = useState(propsCurrent.value || "");

  const handleChange = (event: InputMaskChangeEvent) => {
    const newValue = event.value ?? "";
    if (props.onChange) {
      props.onChange(event);
    } else {
      setInternalValue(newValue);
    }
  };

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
        <InputMask
          autoClear={props.autoClear}
          disabled={props.disabled}
          invalid={props.invalid}
          keyfilter={props.keyfilter}
          mask={props.mask}
          pt={props.pt}
          ptOptions={props.ptOptions!}
          readOnly={props.readOnly}
          required={props.required}
          size={props.size}
          slotChar={props.slotChar}
          tooltip={props.tooltip}
          tooltipOptions={props.tooltipOptions!}
          unmask={props.unmask}
          unstyled={props.unstyled}
          validateOnly={props.validateOnly}
          value={props.value !== undefined ? props.value : internalValue}
          variant={props.variant}
          onChange={handleChange}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          className="p-inputtext-sm w-full"
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

export default InputMaskFormComponent;
