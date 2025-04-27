/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormField,
  ValueComponent,
} from "@/interfaces/components/dynamic/forms/form.interface";
import { FIELD_TYPES } from "@constants/form.constants";
export const getDefaultValue = (field: FormField): ValueComponent => {
  if (field.defaultValue !== undefined) return field.defaultValue;

  switch (field.type) {
    case FIELD_TYPES.INPUT_NUMBER:
      return 0;
    case FIELD_TYPES.INPUT_SWITCH:
      return false;
    case FIELD_TYPES.SELECT_MULTIPLE:
      return [];
    case FIELD_TYPES.DATE:
      return null;
    default:
      return "";
  }
};

// Utility to extract event value
export const extractValue = (type: string, event: any): ValueComponent => {
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
    case FIELD_TYPES.TEXT_AREA:
    case FIELD_TYPES.INPUT_PASSWORD:
      return event.target.value;
    case FIELD_TYPES.INPUT_MASK:
    case FIELD_TYPES.INPUT_NUMBER:
      return 0;
    case FIELD_TYPES.INPUT_SWITCH:
    case FIELD_TYPES.SELECT_SIMPLE:
    case FIELD_TYPES.SELECT_MULTIPLE:
      return event.value;
    case FIELD_TYPES.DATE:
      return event;
    default:
      return "";
  }
};

// Utility to extract event value
export const getErrors = (errors: any): Record<string, string[]> => {
  const fieldErrors: Record<string, string[]> = {};
  errors.forEach((err: any) => {
    const fieldName = err.path[0]?.toString();
    if (fieldName) {
      if (!fieldErrors[fieldName]) {
        fieldErrors[fieldName] = [];
      }
      fieldErrors[fieldName].push(err.message);
    }
  });

  return fieldErrors;
};
