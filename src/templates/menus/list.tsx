"use client";
import SectionsListComponent from "@components/dynamic/sections/list";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Header } from "@/interfaces/components/dynamic/sections/list.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";
import { Menu } from "@interfaces/services/menus/menus.interface";
import { menusService } from "@/services/menus/menus.service";
import { DataTableFilterMeta } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import { STATE_LIST } from "@constants/state.constants";

export default function MenusListComponent() {
  const urlBase = "/menus";
  const columns: ColumnFormProps[] = [
    {
      field: "name",
      header: "Nombre",
      sortable: true,
      filter: true,
      filterComponent: "input",
      showFilterMenu: true,
      filterOptionsMatchMode: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
      ],
    },
    {
      field: "code",
      header: "Código",
      sortable: true,
      filter: true,
      filterComponent: "input",
      showFilterMenu: true,
      filterOptionsMatchMode: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.EQUALS,
      ],
    },
    { field: "icon", header: "Ícono", sortable: false },
    { field: "route", header: "Ruta", sortable: true },
    { field: "sort_order", header: "Orden", sortable: true },
    { field: "parent", header: "Padre", keyToRender: "name" },
    {
      field: "permissions",
      header: "Permisos",
      keyToRender: "name",
    },
    {
      field: "updated_at",
      header: "Última Actualización",
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
      field: "state",
      header: "Estado",
      sortable: true,
      type: "status",
      filter: true,
      filterComponent: "select",
      filterComponentProps: {
        options: STATE_LIST,
        filter: false,
        optionLabel: "name",
        optionValue: "value",
      },
    },
    {
      field: "action",
      header: "Acciones",
      type: "actions",
      actions: [
        { type: "state", service: menusService.state },
        { type: "redirect", icon: "pi pi-pen-to-square", redirect: `${urlBase}/edit/{id}`, params: ["id"] },
        { type: "delete", service: menusService.delete },
      ],
    },
  ];
  const header: Header = {
    title: "Listado de menús",
    btnCreate: { redirect: `${urlBase}/create` },
  };
  const params: QueryParams = {
    order: { field: "sort_order", direction: "ASC" },
  };
  const filters: DataTableFilterMeta = {
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    code: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    updated_at: { value: null, matchMode: FilterMatchMode.BETWEEN },
    state: { value: null, matchMode: FilterMatchMode.EQUALS },
  };
  return (
    <SectionsListComponent<Menu>
      filters={filters}
      header={header}
      columns={columns}
      params={params}
      serviceGetData={menusService.list}
    />
  );
}
