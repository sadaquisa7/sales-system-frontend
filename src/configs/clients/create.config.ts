import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { clientsService } from "@/services/clients/clients.service";

const documentTypeOptions = [
  { label: "DNI", value: "DNI" },
  { label: "RUC", value: "RUC" },
  { label: "CE", value: "CE" },
  { label: "Pasaporte", value: "PASS" },
];

export const ConfigForm: FormConfig = {
  info: {
    title: {
      value: "Crear Cliente",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: clientsService.create,
  },
  sections: {
    items: {
      create: {
        className: { items: "gap-4 grid lg:grid-cols-12" },
        fields: [
          {
            type: "input_text",
            name: "first_name",
            label: "Nombre",
            className: "lg:col-span-4 col-span-12",
            props: { required: true },
          },
          {
            type: "input_text",
            name: "last_name",
            label: "Apellido",
            className: "lg:col-span-4 col-span-12",
            props: { required: true },
          },
          {
            type: "input_text",
            name: "business_name",
            label: "Razón Social",
            className: "lg:col-span-4 col-span-12",
            props: {},
          },
          {
            type: "select_simple",
            name: "document_type",
            label: "Tipo de Documento",
            className: "lg:col-span-3 col-span-12",
            props: {
              required: true,
              id: "document_type",
              optionLabel: "label",
              optionValue: "value",
              placeholder: "Selecciona tipo",
              options: documentTypeOptions,
            },
          },
          {
            type: "input_text",
            name: "document_number",
            label: "Número de Documento",
            className: "lg:col-span-3 col-span-12",
            props: { required: true },
          },
          {
            type: "input_text",
            name: "email",
            label: "Email",
            className: "lg:col-span-3 col-span-12",
            props: {},
          },
          {
            type: "input_text",
            name: "phone",
            label: "Teléfono",
            className: "lg:col-span-3 col-span-12",
            props: {},
          },
          {
            type: "input_text",
            name: "address",
            label: "Dirección",
            className: "col-span-12",
            props: {},
          },
        ],
      },
    },
  },
  buttons: {
    className: "mt-5 gap-3 flex justify-between items-center",
    items: [
      {
        label: "Regresar",
        action: "redirect",
        url: "/clients/list",
        props: { icon: "pi pi-arrow-left" },
      },
      {
        label: "Guardar",
        action: "button",
        props: { type: "submit", icon: "pi pi-save" },
      },
    ],
  },
};
