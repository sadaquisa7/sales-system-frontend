/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonFormComponent from "@/components/form/buttons/button.component";
import InputTextFormComponent from "@/components/form/inputs/inputText.component";
import InputMaskFormComponent from "@/components/form/inputs/inputMask.component";
import InputNumberFormComponent from "@/components/form/inputs/inputNumber.component";
import InputSwitchFormComponent from "@/components/form/inputs/inputSwitch.component";
import InputPasswordFormComponent from "@/components/form/inputs/inputPassword.component";
import SelectSimpleFormComponent from "@/components/form/selects/selectSimple.component";
import SelectMultipleFormComponent from "@/components/form/selects/selectMultiple.component";
import DateCalendarFormComponent from "@/components/form/dates/calendar.component";
import {
  FormConfig,
  FormField,
  FormButton,
  FormSection,
  ValueComponent,
} from "@/interfaces/components/dynamic/forms/form.interface";
import { FIELD_TYPES } from "@constants/form.constants";
import { extractValue, getDefaultValue } from "@/utils/form/getValue.utils";

// Field renderer component
const FieldRenderer: React.FC<{
  field: FormField;
  value: ValueComponent;
  onChange: (fieldName: string, value: ValueComponent) => void;
}> = ({ field, value, onChange }) => {
  const commonProps = {
    value,
    id: field.id || `${field.name}-id`,
    name: field.name || `${field.name}-name`,
    label: field.label,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(field.name, extractValue(field.type, e)),
    ...(field.props || {}),
  };

  const fieldComponents: Record<string, React.FC<any>> = {
    [FIELD_TYPES.INPUT_TEXT]: InputTextFormComponent,
    [FIELD_TYPES.INPUT_MASK]: InputMaskFormComponent,
    [FIELD_TYPES.INPUT_NUMBER]: InputNumberFormComponent,
    [FIELD_TYPES.INPUT_SWITCH]: InputSwitchFormComponent,
    [FIELD_TYPES.INPUT_PASSWORD]: InputPasswordFormComponent,
    [FIELD_TYPES.SELECT_SIMPLE]: SelectSimpleFormComponent,
    [FIELD_TYPES.SELECT_MULTIPLE]: SelectMultipleFormComponent,
    [FIELD_TYPES.DATE]: DateCalendarFormComponent,
  };

  const Component = fieldComponents[field.type];
  return Component ? <Component {...commonProps} /> : null;
};

const ButtonRenderer: React.FC<{
  button: FormButton;
  onClick: (button: FormButton) => void;
}> = ({ button, onClick }) => {
  const buttonProps = {
    label: button.label,
    onClick: () => onClick(button),
    ...(button.props || {}),
  };

  return <ButtonFormComponent {...buttonProps} />;
};
const FormComponent = <T extends Record<string, any>>({
  config,
}: {
  config: FormConfig;
}) => {
  const router = useRouter();

  const initialState = config.sections.reduce(
    (acc: Partial<T>, section: FormSection) => {
      section.fields.forEach((field) => {
        (acc as Record<string, ValueComponent>)[field.name] =
          getDefaultValue(field);
      });
      return acc;
    },
    {} as Partial<T>
  ) as T;

  const [formData, setFormData] = useState<T>(initialState);

  const handleFieldChange = (fieldName: string, value: ValueComponent) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value } as T));
  };

  const handleButtonClick = (
    button: FormButton & { onClick?: (formData: T) => void }
  ) => {
    switch (button.action) {
      case "redirect":
        if (button.url) {
          router.push(button.url);
        }
        break;
      case "button":
        button.onClick?.(formData);
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ejecuto esto");
  };

  return (
    <>
      {config.info.title?.value && (
        <h1
          className={config.info.title.className || "text-2xl font-bold mb-4"}
        >
          {config.info.title.value}
        </h1>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        {config.sections.map((section, index) => (
          <div key={index} className={section.className}>
            {section.fields.map((field) => (
              <div key={field.name} className={field.className}>
                <FieldRenderer
                  field={field}
                  value={formData[field.name]}
                  onChange={handleFieldChange}
                />
              </div>
            ))}
          </div>
        ))}
        <div className={config.buttons.className}>
          {config.buttons.items.map((button, index) => (
            <ButtonRenderer
              key={index}
              button={button}
              onClick={handleButtonClick}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default FormComponent;
