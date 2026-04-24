"use client";
import SectionsListComponent from "@components/dynamic/sections/list";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Header } from "@/interfaces/components/dynamic/sections/list.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";
import { Inventory } from "@interfaces/services/inventory/inventory.interface";
import { inventoryService } from "@/services/inventory/inventory.service";
import { DataTableFilterMeta } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";

const movementTypeOptions = [
  { label: "Entrada (IN)", value: "IN" },
  { label: "Salida (OUT)", value: "OUT" },
];

export default function InventoryListComponent() {
  const urlBase = "/inventory";
  const columns: ColumnFormProps[] = [
    { field: "product", header: "Producto", keyToRender: "name" },
    {
      field: "movement_type",
      header: "Tipo",
      sortable: true,
      filter: true,
      filterComponent: "select",
      filterComponentProps: {
        options: movementTypeOptions,
        filter: false,
        optionLabel: "label",
        optionValue: "value",
      },
    },
    { field: "quantity", header: "Cantidad", sortable: true },
    {
      field: "created_at",
      header: "Fecha",
      sortable: true,
      filter: true,
      filterComponent: "date",
      filterComponentProps: {
        showTime: true,
        dateFormatInput: "dd/mm/yyyy",
        dateFormatValue: "yyyy-mm-dd HH:MM",
        maxDate: new Date(),
      },
    },
    {
      field: "action",
      header: "Acciones",
      type: "actions",
      actions: [
        { type: "delete", service: inventoryService.delete },
      ],
    },
  ];
  const header: Header = {
    title: "Movimientos de inventario",
    btnCreate: { redirect: `${urlBase}/create` },
  };
  const params: QueryParams = {
    order: { field: "created_at", direction: "DESC" },
  };
  const filters: DataTableFilterMeta = {
    movement_type: { value: null, matchMode: FilterMatchMode.EQUALS },
    created_at: { value: null, matchMode: FilterMatchMode.BETWEEN },
  };
  return (
    <SectionsListComponent<Inventory>
      filters={filters}
      header={header}
      columns={columns}
      params={params}
      serviceGetData={inventoryService.list}
    />
  );
}
