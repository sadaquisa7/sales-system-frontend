"use client";
import SectionsListComponent from "@components/dynamic/sections/list";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Header } from "@/interfaces/components/dynamic/sections/list.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";
import { Category } from "@interfaces/services/catalog/categories.interface";
import { categoriesService } from "@/services/catalog/categories.service";
import { DataTableFilterMeta } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import { STATE_LIST } from "@constants/state.constants";

export default function CategoriesListComponent() {
  const urlBase = "/categories";
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
      field: "description",
      header: "Descripción",
      sortable: true,
      filter: true,
      filterComponent: "input",
      showFilterMenu: true,
      filterOptionsMatchMode: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.ENDS_WITH,
      ],
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
        { type: "state", service: categoriesService.state },
        { type: "redirect", icon: "pi pi-pen-to-square", redirect: `${urlBase}/edit/{id}`, params: ["id"] },
        { type: "delete", service: categoriesService.delete },
      ],
    },
  ];
  const header: Header = {
    title: "Listado de categorías",
    btnCreate: { redirect: `${urlBase}/create` },
  };
  const params: QueryParams = {
    order: { field: "updated_at", direction: "DESC" },
  };
  const filters: DataTableFilterMeta = {
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    description: { value: null, matchMode: FilterMatchMode.CONTAINS },
    updated_at: { value: null, matchMode: FilterMatchMode.BETWEEN },
    state: { value: null, matchMode: FilterMatchMode.EQUALS },
  };
  return (
    <SectionsListComponent<Category>
      filters={filters}
      header={header}
      columns={columns}
      params={params}
      serviceGetData={categoriesService.list}
    />
  );
}
