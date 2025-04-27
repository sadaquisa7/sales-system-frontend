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
import InputTextareaFormComponent from "@/components/form/inputs/inputTextarea.component";

import SelectSimpleFormComponent from "@/components/form/selects/selectSimple.component";
import SelectMultipleFormComponent from "@/components/form/selects/selectMultiple.component";

import DateCalendarFormComponent from "@/components/form/dates/calendar.component";
import {
  FormConfig,
  FormField,
  FormButton,
  ValueComponent,
} from "@/interfaces/components/dynamic/forms/form.interface";
import { FIELD_TYPES } from "@constants/form.constants";
import {
  extractValue,
  getDefaultValue,
  getErrors,
} from "@/utils/form/getValue.utils";
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
    [FIELD_TYPES.TEXT_AREA]: InputTextareaFormComponent,
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
const FormComponent = <T extends Record<string, any>, Response = undefined>({
  config,
  schema,
}: {
  config: FormConfig;
  schema?: z.ZodObject<any> | z.ZodEffects<z.ZodObject<any>>;
}) => {
  const router = useRouter();
  const { success, error } = useToast();
  const { showLoading, hideLoading } = useLoading();
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const initialState = Object.values(config.sections.items || {}).reduce(
    (acc: Partial<T>, section) => {
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
    setErrors((prev) => ({ ...prev, [fieldName]: [] }));
  };

  const handleButtonClick = async (
    button: FormButton & { onClick?: (formData: T) => void }
  ) => {
    switch (button.action) {
      case "redirect":
        if (button.url) {
          router.push(button.url);
        }
        break;
      case "button":
        if (!button.onClick) return;

        if (!button.isValidate) {
          button.onClick(formData);
          return;
        }

        const validationResult = await validateForm(formData);
        if (validationResult.isValid && validationResult.validatedData) {
          button.onClick(validationResult.validatedData);
        }
        break;
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    if (schema) {
      const validationResult = await validateForm(formData);
      if (!validationResult.isValid || !validationResult.validatedData) {
        return;
      }

      if (!config?.info?.service) {
        return false;
      }
      showLoading();
      try {
        const response: ApiResponse<Response> = await config.info.service(
          validationResult.validatedData
        );
        const { message, status } = response;
        if (status) {
          success(message);
          config.info.onSuccess?.(response);
        } else {
          error(message);
          config.info.onError?.(response);
        }
      } catch (e) {
        console.error("Error calling service:", e);
        error("An unexpected error occurred");
        config.info.onError?.(e);
      } finally {
        hideLoading();
      }
    } else {
      console.log("Form submitted without schema validation:", formData);
    }
  };

  // Reusable validation function
  const validateForm = async (
    data: T
  ): Promise<{ isValid: boolean; validatedData?: T }> => {
    if (!schema) {
      return { isValid: true, validatedData: data };
    }

    // Call onBeforeValidation if it exists and await its result
    if (config?.info?.onBeforeValidation) {
      const shouldProceed = await config.info.onBeforeValidation(data);
      if (shouldProceed !== true) {
        console.log("Validation halted by onBeforeValidation");
        return { isValid: false };
      }
    }

    const result = schema.safeParse(data);
    let fieldErrors: Record<string, string[]> = {};

    if (!result.success) {
      fieldErrors = getErrors(result.error.errors);
      setErrors(fieldErrors);
      return { isValid: false };
    }

    // Call onAfterValidation for successful validation
    if (config?.info?.onAfterValidation) {
      const shouldContinue = await config.info.onAfterValidation(
        data,
        fieldErrors
      );
      if (shouldContinue !== true) {
        console.log("Validation halted by onAfterValidation");
        return { isValid: false };
      }
    }

    return { isValid: true, validatedData: result.data as T };
  };

  return (
    <>
      {config?.info?.title?.value && (
        <h1
          className={config.info.title.className || "text-2xl font-bold mb-4"}
        >
          {config.info.title.value}
        </h1>
      )}
      <form onSubmit={handleSubmit}>
        <div className={config.sections.config?.className || ""}>
          {config.sections.items &&
            Object.entries(config.sections.items).map(
              ([sectionKey, section]) => (
                <div key={sectionKey} className={section.className?.container}>
                  {section.title?.value && (
                    <h2 className={section.title.className}>
                      {section.title.value}
                    </h2>
                  )}
                  <div className={section.className?.items}>
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
                </div>
              )
            )}
        </div>
        {config.buttons && config.buttons?.items?.length > 0 && (
          <div className={config.buttons.className}>
            {config.buttons.items.map((button, index) => (
              <ButtonRenderer
                key={index}
                button={button}
                onClick={handleButtonClick}
              />
            ))}
          </div>
        )}
      </form>
    </>
  );
};

export default FormComponent;
