import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { usersService } from "@/services/security/users.service";
import { permissionsService } from "@/services/security/permissions.service";
import { rolesService } from "@/services/security/roles.service";
import { User } from "@interfaces/services/security/users.interface";

export const ConfigForm = (item: User | null): FormConfig => ({
  info: {
    title: {
      value: "Editar Usuario",
      className:
        "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: (data) => usersService.update(item?.id ?? 0, data),
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
            name: "first_name",
            label: "Nombres",
            defaultValue: item?.first_name,
            className: "lg:col-span-4 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "input_text",
            name: "last_name",
            defaultValue: item?.last_name,
            label: "Apellidos",
            className: "lg:col-span-4 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "input_text",
            name: "email",
            defaultValue: item?.email,
            label: "Correo",
            className: "lg:col-span-4 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "select_multiple",
            name: "roles",
            label: "Roles",
            className: "lg:col-span-6 col-span-12",
            defaultValue: item?.roles.map((item) => item.id),
            props: {
              required: true,
              id: "roles",
              optionLabel: "name",
              optionValue: "id",
              placeholder: "Selecciona Roles",
              serviceGetOptions: rolesService.all,
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
        url: "/users/list",
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
