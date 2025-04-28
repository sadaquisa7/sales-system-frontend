import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { rolesService } from "@/services/security/roles.service";
import { permissionsService } from "@/services/security/permissions.service";
import { Role } from "@interfaces/services/security/roles.interface";

export const ConfigForm = (item: Role | null): FormConfig => ({
  info: {
    title: {
      value: "Editar Rol",
      className:
        "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: (data) => rolesService.update(item?.id ?? 0, data),
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
            name: "code",
            label: "Código",
            className: "lg:col-span-3 col-span-12",
            defaultValue: item?.code,
            props: {
              required: true,
            },
          },
          {
            type: "select_multiple",
            name: "permissions",
            label: "Permisos",
            className: "lg:col-span-6 col-span-12",
            defaultValue: item?.permissions.map((item) => item.id),
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
});
