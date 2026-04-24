import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { categoriesService } from "@/services/catalog/categories.service";

export const ConfigForm: FormConfig = {
  info: {
    title: {
      value: "Crear Categoría",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: categoriesService.create,
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
            className: "lg:col-span-6 col-span-12",
            props: { required: true },
          },
          {
            type: "text_area",
            name: "description",
            label: "Descripción",
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
};
