import { FormConfig } from "@/interfaces/components/dynamic/forms/form.interface";
import { productsService } from "@/services/products/products.service";
import { categoriesService } from "@/services/catalog/categories.service";
import { unitsService } from "@/services/catalog/units.service";
import { Product } from "@interfaces/services/products/products.interface";

export const ConfigForm = (item: Product | null): FormConfig => ({
  info: {
    title: {
      value: "Editar Producto",
      className: "text-5xl mb-2 text-center uppercase font-bold tracking-tight text-gray-900",
    },
    service: (data) => productsService.update(item?.id ?? 0, data),
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
            className: "lg:col-span-3 col-span-12",
            props: { required: true, id: "price", mode: "decimal", minFractionDigits: 2 },
          },
          {
            type: "input_number",
            name: "stock",
            label: "Stock",
            defaultValue: item?.stock,
            className: "lg:col-span-3 col-span-12",
            props: { required: true, id: "stock" },
          },
          {
            type: "select_simple",
            name: "category_id",
            label: "Categoría",
            defaultValue: item?.category_id,
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
            defaultValue: item?.unit_id,
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
            defaultValue: item?.description ?? "",
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
});
