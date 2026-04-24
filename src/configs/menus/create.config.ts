import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { menusService } from "@/services/menus/menus.service";
import { permissionsService } from "@/services/security/permissions.service";

export const ConfigForm: FormConfig = {
  info: {
    title: {
      value: "Crear Menú",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: menusService.create,
  },
  sections: {
    items: {
      create: {
        className: { items: "gap-4 grid lg:grid-cols-12" },
        fields: [
          {
            type: "input_text",
            name: "name",
            label: "Nombre",
            className: "lg:col-span-4 col-span-12",
            props: { required: true },
          },
          {
            type: "input_text",
            name: "code",
            label: "Código",
            className: "lg:col-span-4 col-span-12",
            props: { required: true },
          },
          {
            type: "input_number",
            name: "sort_order",
            label: "Orden",
            className: "lg:col-span-2 col-span-12",
            props: { required: true, id: "sort_order" },
          },
          {
            type: "input_text",
            name: "icon",
            label: "Ícono",
            className: "lg:col-span-2 col-span-12",
            props: { required: true },
          },
          {
            type: "input_text",
            name: "route",
            label: "Ruta",
            className: "lg:col-span-6 col-span-12",
            props: { required: true },
          },
          {
            type: "select_simple",
            name: "parent_id",
            label: "Menú Padre",
            className: "lg:col-span-6 col-span-12",
            props: {
              id: "parent_id",
              optionLabel: "name",
              optionValue: "id",
              placeholder: "Sin padre (raíz)",
              serviceGetOptions: menusService.all,
            },
          },
          {
            type: "select_multiple",
            name: "permissions",
            label: "Permisos",
            className: "col-span-12",
            props: {
              required: true,
              id: "permissions",
              optionLabel: "name",
              optionValue: "id",
              placeholder: "Selecciona permisos",
              serviceGetOptions: permissionsService.all,
            },
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
        url: "/menus/list",
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
