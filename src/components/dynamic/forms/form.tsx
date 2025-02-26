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
import { z } from "zod";
import { useToast } from "@contexts/toast/toast.context";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { useLoading } from "@contexts/loading/loading.context";

// Field renderer component
const FieldRenderer: React.FC<{
  field: FormField;
  value: ValueComponent;
  onChange: (fieldName: string, value: ValueComponent) => void;
  errors?: string[];
}> = ({ field, value, onChange, errors }) => {
  const commonProps = {
    value,
    id: field.id || `${field.name}-id`,
    name: field.name || `${field.name}-name`,
    label: field.label,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(field.name, extractValue(field.type, e)),
    errors,
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
  schema,
}: {
  config: FormConfig;
  schema?: z.ZodObject<any>;
}) => {
  const router = useRouter();
  const { success, error } = useToast();
  const { showLoading, hideLoading } = useLoading();

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
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleFieldChange = (fieldName: string, value: ValueComponent) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value } as T));
    setErrors((prev) => ({ ...prev, [fieldName]: [] }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (schema) {
      const result = schema.safeParse(formData);
      if (!result.success) {
        const fieldErrors: Record<string, string[]> = {};
        result.error.errors.forEach((err) => {
          const fieldName = err.path[0]?.toString();
          if (fieldName) {
            if (!fieldErrors[fieldName]) {
              fieldErrors[fieldName] = [];
            }
            fieldErrors[fieldName].push(err.message);
          }
        });
        setErrors(fieldErrors);
        return;
      }
      console.log("Form data is valid:", result.data);
      if (!(config.info && config.info.service)) {
        return false;
      }
      showLoading();
      try {
        const response: ApiResponse = await config.info.service(result.data);
        console.log("Response from service:", response);
        const { message, status } = response;
        if (status) {
          success(message);
        } else {
          error(message);
        }
      } catch (e) {
        console.error("Error calling service:", e);
        error("An unexpected error occurred");
      } finally {
        hideLoading();
      }
    } else {
      console.log("Form submitted without schema validation:", formData);
    }
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
      <form onSubmit={handleSubmit}>
        {config.sections.map((section, index) => (
          <div key={index} className={section.className}>
            {section.fields.map((field) => (
              <div key={field.name} className={field.className}>
                <FieldRenderer
                  field={field}
                  value={formData[field.name]}
                  onChange={handleFieldChange}
                  errors={errors[field.name]}
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
