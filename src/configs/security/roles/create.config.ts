import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { permissionsService } from "@/services/security/permissions.service";
import { rolesService } from "@/services/security/roles.service";

export const ConfigForm: FormConfig = {
  info: {
    title: {
      value: "Crear Rol",
      className:
        "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: rolesService.create,
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
            name: "code",
            label: "Código",
            className: "lg:col-span-3 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "select_multiple",
            name: "permissions",
            label: "Permisos",
            className: "lg:col-span-6 col-span-12",
            props: {
              required: true,
              id: "permissions",
              optionLabel: "name",
              optionValue: "id",
              placeholder: "Selecciona Permisos",
              serviceGetOptions: permissionsService.all,
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
        url: "/roles/list",
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
