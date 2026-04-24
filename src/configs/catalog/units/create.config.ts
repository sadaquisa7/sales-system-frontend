import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { unitsService } from "@/services/catalog/units.service";

export const ConfigForm: FormConfig = {
  info: {
    title: {
      value: "Crear Unidad",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: unitsService.create,
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
            className: "lg:col-span-6 col-span-12",
            props: { required: true },
          },
          {
            type: "input_text",
            name: "abbreviation",
            label: "Abreviatura",
            className: "lg:col-span-6 col-span-12",
            props: { required: true },
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
        url: "/units/list",
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
