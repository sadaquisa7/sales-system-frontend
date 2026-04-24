import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { productsService } from "@/services/products/products.service";
import { categoriesService } from "@/services/catalog/categories.service";
import { unitsService } from "@/services/catalog/units.service";

export const ConfigForm: FormConfig = {
  info: {
    title: {
      value: "Crear Producto",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: productsService.create,
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
            type: "input_number",
            name: "price",
            label: "Precio",
            className: "lg:col-span-3 col-span-12",
            props: { required: true, id: "price", mode: "decimal", minFractionDigits: 2 },
          },
          {
            type: "input_number",
            name: "stock",
            label: "Stock",
            className: "lg:col-span-3 col-span-12",
            props: { required: true, id: "stock" },
          },
          {
            type: "select_simple",
            name: "category_id",
            label: "Categoría",
            className: "lg:col-span-6 col-span-12",
            props: {
              required: true,
              id: "category_id",
              optionLabel: "name",
              optionValue: "id",
              placeholder: "Selecciona categoría",
              serviceGetOptions: categoriesService.all,
            },
          },
          {
            type: "select_simple",
            name: "unit_id",
            label: "Unidad",
            className: "lg:col-span-6 col-span-12",
            props: {
              required: true,
              id: "unit_id",
              optionLabel: "name",
              optionValue: "id",
              placeholder: "Selecciona unidad",
              serviceGetOptions: unitsService.all,
            },
          },
          {
            type: "text_area",
            name: "description",
            label: "Descripción",
            className: "col-span-12",
            props: { id: "description", rows: 4 },
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
        url: "/products/list",
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
