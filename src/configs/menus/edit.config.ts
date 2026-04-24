import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { menusService } from "@/services/menus/menus.service";
import { permissionsService } from "@/services/security/permissions.service";
import { Menu } from "@interfaces/services/menus/menus.interface";

export const ConfigForm = (item: Menu | null): FormConfig => ({
  info: {
    title: {
      value: "Editar Menú",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: (data) => menusService.update(item?.id ?? 0, data),
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
            defaultValue: item?.name,
            className: "lg:col-span-4 col-span-12",
            props: { required: true },
          },
          {
            type: "input_text",
            name: "code",
            label: "Código",
            defaultValue: item?.code,
            className: "lg:col-span-4 col-span-12",
            props: { required: true },
          },
          {
            type: "input_number",
            name: "sort_order",
            label: "Orden",
            defaultValue: item?.sort_order,
            className: "lg:col-span-2 col-span-12",
            props: { required: true, id: "sort_order" },
          },
          {
            type: "input_text",
            name: "icon",
            label: "Ícono",
            defaultValue: item?.icon,
            className: "lg:col-span-2 col-span-12",
            props: { required: true },
          },
          {
            type: "input_text",
            name: "route",
            label: "Ruta",
            defaultValue: item?.route,
            className: "lg:col-span-6 col-span-12",
            props: { required: true },
          },
          {
            type: "select_simple",
            name: "parent_id",
            label: "Menú Padre",
            defaultValue: item?.parent_id,
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
            defaultValue: item?.permissions.map((p) => p.id),
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
});
