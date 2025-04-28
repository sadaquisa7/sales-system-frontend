import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { permissionsService } from "@/services/security/permissions.service";
import { methodsService } from "@/services/security/methods.service";
import { Permission } from "@interfaces/services/security/permissions.interface";

export const ConfigForm = (item: Permission | null): FormConfig => ({
  info: {
    title: {
      value: "Editar Permiso",
      className:
        "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: (data) => permissionsService.update(item?.id ?? 0, data),
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
            defaultValue: item?.name,
            className: "lg:col-span-3 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "input_text",
            name: "route",
            label: "Ruta",
            defaultValue: item?.route,
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
            defaultValue: item?.methods.map((item) => item.id),
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
            defaultValue: item?.code,
            props: {
              required: true,
            },
          },
          {
            type: "text_area",
            name: "description",
            label: "Descripción",
            className: "col-span-12",
            defaultValue: item?.description,
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
});
