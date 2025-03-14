"use client";
import { useState, useMemo } from "react";
import { Password } from "primereact/password";
import { InputPasswordFormProps } from "@/interfaces/components/form/inputs/inputPassword.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageSimpleFormComponent from "@/components/form/messages/messageSimple.component";
import "@css/input/inputPassword.css";

const propsDefault: Partial<InputPasswordFormProps> = {
  appendTo: null,
  feedback: true,
  invalid: false,
  mediumLabel: "Complejidad media",
  mediumRegex:
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).",
  promptLabel: "Escriba una contraseña",
  pt: {
    showIcon: {
      className: "sss",
    },
  },
  ptOptions: {},
  strongLabel: "Contraseña compleja",
  strongRegex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
  toggleMask: false,
  tooltip: "",
  tooltipOptions: {},
  unstyled: false,
  variant: "outlined",
  weakLabel: "Demasiado simple",
  id: "input-password-id",
  name: "input-password-name",
  value: "",
  required: false,
  readOnly: false,
  disabled: false,
};

const InputPasswordFormComponent: React.FC<InputPasswordFormProps> = (
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <LabelFormComponent for={props.name} value={props.label} />
      )}
      <Password
        appendTo={props.appendTo}
        feedback={props.feedback}
        invalid={props.invalid}
        keyfilter={props.keyfilter}
        mediumLabel={props.mediumLabel}
        mediumRegex={props.mediumRegex}
        promptLabel={props.promptLabel}
        pt={props.pt}
        ptOptions={props.ptOptions!}
        strongLabel={props.strongLabel}
        strongRegex={props.strongRegex}
        toggleMask={props.toggleMask}
        tooltip={props.tooltip}
        tooltipOptions={props.tooltipOptions!}
        transitionOptions={props.transitionOptions}
        unstyled={props.unstyled}
        variant={props.variant}
        weakLabel={props.weakLabel}
        value={props.value ?? internalValue}
        onChange={handleChange}
        id={props.id}
        name={props.name}
        inputClassName="w-full"
        className="p-inputtext-sm w-full p-inputpassword"
        required={props.required}
        readOnly={props.readOnly}
        disabled={props.disabled}
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

export default InputPasswordFormComponent;
