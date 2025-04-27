import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { permissionsService } from "@/services/security/permissions.service";
import { methodsService } from "@/services/security/methods.service";

export const ConfigForm: FormConfig = {
  info: {
    title: {
      value: "Crear Permiso",
      className:
        "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: permissionsService.create,
  },
  sections: {
    items: {
      create: {
        className: {
          items: "gap-4 grid lg:grid-cols-12",
        },
        fields: [
          {
            type: "input_text",
            name: "name",
            label: "Nombre",
            className: "lg:col-span-3 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "input_text",
            name: "route",
            label: "Ruta",
            className: "lg:col-span-3 col-span-12",
            props: {
              required: true,
              placeholder: "/api/v1/permissions",
            },
          },
          {
            type: "select_multiple",
            name: "methods",
            label: "Métodos",
            className: "lg:col-span-4 col-span-12",
            props: {
              required: true,
              id: "methods",
              optionLabel: "method",
              optionValue: "id",
              placeholder: "Selecciona Métodos",
              filter: false,
              serviceGetOptions: methodsService.all,
            },
          },
          {
            type: "input_text",
            name: "code",
            label: "Código",
            className: "lg:col-span-2 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "text_area",
            name: "description",
            label: "Descripción",
            className: "col-span-12",
            props: {
              required: true,
              id: "description",
              rows: 5,
            },
          },
        ],
      },
    },
  },
  buttons: {
    className: "mt-5 gap-3 flex justify-between	items-center",
    items: [
      {
        label: "Regresar",
        action: "redirect",
        url: "/permissions/list",
        props: {
          icon: "pi pi-arrow-left",
        },
      },
      {
        label: "Guardar",
        action: "button",
        props: {
          type: "submit",
          icon: "pi pi-save",
        },
      },
    ],
  },
};
