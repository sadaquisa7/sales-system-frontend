/* eslint-disable @typescript-eslint/no-explicit-any */
// Tipos básicos para los campos del formulario
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { classNames } from "primereact/utils";

export interface FormField {
  type:
    | "input_text"
    | "input_mask"
    | "input_number"
    | "input_switch"
    | "input_password"
    | "select_simple"
    | "select_multiple"
    | "date"; // Tipos soportados
  name: string; // Nombre único del campo
  label: string; // Etiqueta visible
  props?: Record<string, any>; // Propiedades específicas del componente
  id?: string; // ID opcional, se genera por defecto si no se proporciona
  defaultValue?: ValueComponent; // Add defaultValue
  className?: string; // Add className
}

// Tipos para los botones
export interface FormButton {
  label: string; // Texto del botón
  action: "redirect" | "button"; // Tipo de acción del botón
  url?: string; // Opcional, requerido solo para "redirect"
  onClick?: (formData: any) => void; // Opcional, requerido solo para "button"
  props?: Record<string, any>;
}

export interface ClassNamesSections {
  items?: string;
  container?: string;
}

export interface FormSection {
  title?: FormTitle; // Optional title with value and className
  className?: ClassNamesSections;
  fields: FormField[]; // Required array of fields (renamed from fields to items)
}

export interface FormTitle {
  value?: string;
  className?: string;
}

// Tipo para la información general del formulario
export interface FormInfo<T = any, U = any> {
  title?: FormTitle; // Título del formulario
  service?: (data?: T) => Promise<ApiResponse<U>>;
  onSuccess?: (response: ApiResponse<U>) => void;
  onError?: (error: any) => void;
  onBeforeValidation?: (
    formData: T
  ) => Promise<boolean | undefined | null> | boolean | undefined | null;
  onAfterValidation?: (
    formData: T,
    errors: Record<string, string[]>
  ) => Promise<boolean | undefined | null> | boolean | undefined | null;
}
export interface SectionsConfig {
  className?: string;
}
// Tipo para el grupo de botones
export interface FormButtons {
  className?: string; // Clases CSS para el contenedor de botones
  items: FormButton[]; // Array de botones
}

// Tipo principal para la configuración del formulario
export interface FormConfig {
  info?: FormInfo;
  sections: {
    config?: SectionsConfig;
    items?: Record<string, FormSection>;
  };
  buttons?: FormButtons;
}

// Tipo para el estado del formulario (usado internamente)
export interface FormState {
  [key: string]: ValueComponent; // Clave es el nombre del campo, valor depende del tipo
}

export interface FormComponentProps {
  config: FormConfig;
}

export type ValueComponent =
  | string
  | number
  | object
  | null
  | boolean
  | (string | number | object | boolean | null)[];

export interface FormHandle {
  submitForm: () => Promise<void>;
}
