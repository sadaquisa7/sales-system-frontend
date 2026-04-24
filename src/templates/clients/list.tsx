"use client";
import SectionsListComponent from "@components/dynamic/sections/list";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Header } from "@/interfaces/components/dynamic/sections/list.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";
import { Client } from "@interfaces/services/clients/clients.interface";
import { clientsService } from "@/services/clients/clients.service";
import { DataTableFilterMeta } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import { STATE_LIST } from "@constants/state.constants";

export default function ClientsListComponent() {
  const urlBase = "/clients";
  const columns: ColumnFormProps[] = [
    {
      field: "first_name",
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
      field: "last_name",
      header: "Apellido",
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
    { field: "document_type", header: "Tipo Doc.", sortable: true },
    {
      field: "document_number",
      header: "N° Documento",
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
    {
      field: "email",
      header: "Email",
      sortable: true,
      filter: true,
      filterComponent: "input",
      showFilterMenu: true,
      filterOptionsMatchMode: [
        FilterMatchMode.CONTAINS,
        FilterMatchMode.EQUALS,
      ],
    },
    { field: "phone", header: "Teléfono", sortable: true },
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
        { type: "state", service: clientsService.state },
        { type: "redirect", icon: "pi pi-pen-to-square", redirect: `${urlBase}/edit/{id}`, params: ["id"] },
        { type: "delete", service: clientsService.delete },
      ],
    },
  ];
  const header: Header = {
    title: "Listado de clientes",
    btnCreate: { redirect: `${urlBase}/create` },
  };
  const params: QueryParams = {
    order: { field: "updated_at", direction: "DESC" },
  };
  const filters: DataTableFilterMeta = {
    first_name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    last_name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    document_number: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    email: { value: null, matchMode: FilterMatchMode.CONTAINS },
    updated_at: { value: null, matchMode: FilterMatchMode.BETWEEN },
    state: { value: null, matchMode: FilterMatchMode.EQUALS },
  };
  return (
    <SectionsListComponent<Client>
      filters={filters}
      header={header}
      columns={columns}
      params={params}
      serviceGetData={clientsService.list}
    />
  );
}
