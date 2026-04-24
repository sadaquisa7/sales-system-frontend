import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { servicesService } from "@/services/services/services.service";
import { Service } from "@interfaces/services/services/services.interface";

export const ConfigForm = (item: Service | null): FormConfig => ({
  info: {
    title: {
      value: "Editar Servicio",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: (data) => servicesService.update(item?.id ?? 0, data),
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
            type: "input_number",
            name: "price",
            label: "Precio",
            defaultValue: item?.price ? parseFloat(item.price) : undefined,
            className: "lg:col-span-6 col-span-12",
            props: { required: true, id: "price", mode: "decimal", minFractionDigits: 2 },
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
        url: "/services/list",
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
