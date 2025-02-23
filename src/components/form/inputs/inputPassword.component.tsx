"use client";
import { useState, useMemo } from "react";
import { Password } from "primereact/password";
import { InputPasswordFormProps } from "@/interfaces/components/form/inputs/inputPassword.interface";
import LabelFormComponent from "@/components/form/labels/label.component";
import MessageFormProps from "@/components/form/messages/message.component";
import "@css/input/inputPassword.css";

const propsDefault: Partial<InputPasswordFormProps> = {
  appendTo: null,
  feedback: true,
  invalid: false,
  mediumLabel: "Medium",
  mediumRegex:
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}).",
  promptLabel: "Please enter a password",
  pt: {
    showIcon: {
      className: "sss",
    },
  },
  ptOptions: {},
  strongLabel: "Strong",
  strongRegex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
  toggleMask: false,
  tooltip: "",
  tooltipOptions: {},
  unstyled: false,
  variant: "outlined",
  weakLabel: "Weak",
  id: "input-password-id",
  name: "input-password-name",
  value: "",
};

const InputPasswordFormComponent: React.FC<InputPasswordFormProps> = (
  propsCurrent
) => {
  const props = useMemo(
    () => ({ ...propsDefault, ...propsCurrent }),
    [propsCurrent]
  );
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

export default InputPasswordFormComponent;
