import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { usersService } from "@/services/security/users.service";
import { permissionsService } from "@/services/security/permissions.service";
import { rolesService } from "@/services/security/roles.service";

export const ConfigForm: FormConfig = {
  info: {
    title: {
      value: "Crear Usuario",
      className:
        "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: usersService.create,
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
            className: "lg:col-span-3 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "input_text",
            name: "last_name",
            label: "Apellidos",
            className: "lg:col-span-3 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "input_text",
            name: "email",
            label: "Correo",
            className: "lg:col-span-3 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "input_text",
            name: "password",
            label: "Contraseña",
            className: "lg:col-span-3 col-span-12",
            props: {
              required: true,
            },
          },
          {
            type: "select_multiple",
            name: "roles",
            label: "Roles",
            className: "lg:col-span-6 col-span-12",
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
};
