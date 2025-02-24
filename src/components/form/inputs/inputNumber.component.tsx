"use client";
import { useState, useMemo } from "react";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { InputNumberFormProps } from "@/interfaces/components/form/inputs/inputNumber.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageSimpleFormComponent from "@/components/form/messages/messageSimple.component";

const propsDefault: Partial<InputNumberFormProps> = {
  allowEmpty: false,
  disabled: false,
  invalid: false,
  pt: {},
  ptOptions: {},
  readOnly: false,
  required: false,
  size: 1,
  tooltipOptions: {},
  unstyled: false,
  value: null,
  variant: "outlined",
  id: "input-number-id",
  name: "input-number-name",
  group: false,
  leftAddonType: "text",
  rightAddonType: "text",
  mode: "decimal",
  step: 1,
};

const InputNumberFormComponent: React.FC<InputNumberFormProps> = (
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
  const [internalValue, setInternalValue] = useState<number | null>(
    propsCurrent.value ?? null
  );

  const handleChange = (event: InputNumberValueChangeEvent) => {
    const newValue = event.value ?? null;
    if (props.onChange) {
      props.onChange(event);
    } else {
      setInternalValue(newValue);
    }
  };

  // const dynamicPt = useMemo(() => {
  //   return {
  //     input: {
  //       root: {
  //         className: `block w-full ${
  //           !props.group ? "rounded-md" : ""
  //         } bg-white px-3 py-1.5 text-base ${
  //           errors.length > 0
  //             ? "text-red-900 outline outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
  //             : "text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
  //         } sm:text-sm/6`,
  //       },
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
        <InputNumber
          allowEmpty={props.allowEmpty}
          disabled={props.disabled}
          invalid={props.invalid}
          max={props.max}
          min={props.min}
          minFractionDigits={props.minFractionDigits}
          maxFractionDigits={props.maxFractionDigits}
          mode={props.mode}
          name={props.name}
          placeholder={props.placeholder}
          pt={props.pt}
          ptOptions={props.ptOptions!}
          readOnly={props.readOnly}
          required={props.required}
          size={props.size}
          step={props.step}
          tooltip={props.tooltip}
          inputClassName={props.inputClassName}
          tooltipOptions={props.tooltipOptions!}
          unstyled={props.unstyled}
          value={props.value !== undefined ? props.value : internalValue}
          variant={props.variant}
          onValueChange={handleChange}
          inputId={props.id}
          locale={props.locale}
          currency={props.currency}
          showButtons={props.showButtons}
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

export default InputNumberFormComponent;
