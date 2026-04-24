import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { categoriesService } from "@/services/catalog/categories.service";
import { Category } from "@interfaces/services/catalog/categories.interface";

export const ConfigForm = (item: Category | null): FormConfig => ({
  info: {
    title: {
      value: "Editar Categoría",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: (data) => categoriesService.update(item?.id ?? 0, data),
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
        url: "/categories/list",
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
