import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { inventoryService } from "@/services/inventory/inventory.service";
import { productsService } from "@/services/products/products.service";

const movementTypeOptions = [
  { label: "Entrada (IN)", value: "IN" },
  { label: "Salida (OUT)", value: "OUT" },
];

export const ConfigForm: FormConfig = {
  info: {
    title: {
      value: "Registrar Movimiento",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: inventoryService.create,
  },
  sections: {
    items: {
      create: {
        className: { items: "gap-4 grid lg:grid-cols-12" },
        fields: [
          {
            type: "select_simple",
            name: "product_id",
            label: "Producto",
            className: "lg:col-span-6 col-span-12",
            props: {
              required: true,
              id: "product_id",
              optionLabel: "name",
              optionValue: "id",
              placeholder: "Selecciona producto",
              serviceGetOptions: productsService.all,
            },
          },
          {
            type: "select_simple",
            name: "movement_type",
            label: "Tipo de Movimiento",
            className: "lg:col-span-3 col-span-12",
            props: {
              required: true,
              id: "movement_type",
              optionLabel: "label",
              optionValue: "value",
              placeholder: "Selecciona tipo",
              options: movementTypeOptions,
            },
          },
          {
            type: "input_number",
            name: "quantity",
            label: "Cantidad",
            className: "lg:col-span-3 col-span-12",
            props: { required: true, id: "quantity" },
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
        url: "/inventory/list",
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
