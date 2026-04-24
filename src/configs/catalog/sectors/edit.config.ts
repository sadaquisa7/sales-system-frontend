import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { sectorsService } from "@/services/catalog/sectors.service";
import { Sector } from "@interfaces/services/catalog/sectors.interface";

export const ConfigForm = (item: Sector | null): FormConfig => ({
  info: {
    title: {
      value: "Editar Sector",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: (data) => sectorsService.update(item?.id ?? 0, data),
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
            className: "lg:col-span-6 col-span-12",
            props: { required: true },
          },
          {
            type: "text_area",
            name: "description",
            label: "Descripción",
            defaultValue: item?.description,
            className: "col-span-12",
            props: { required: true, id: "description", rows: 5 },
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
        url: "/sectors/list",
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
