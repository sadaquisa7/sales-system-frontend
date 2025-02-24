/* eslint-disable @typescript-eslint/no-explicit-any */
// Tipos básicos para los campos del formulario
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

// Tipo para una sección del formulario
export interface FormSection {
  className: string; // Clases CSS para la sección
  fields: FormField[]; // Array de campos en esta sección
}

export interface FormTitle {
  value?: string;
  className?: string;
}

// Tipo para la información general del formulario
export interface FormInfo {
  title?: FormTitle; // Título del formulario
  service: string; // URL del servicio para "save"
}

// Tipo para el grupo de botones
export interface FormButtons {
  className: string; // Clases CSS para el contenedor de botones
  items: FormButton[]; // Array de botones
}

// Tipo principal para la configuración del formulario
export interface FormConfig {
  info: FormInfo;
  sections: FormSection[];
  buttons: FormButtons;
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
