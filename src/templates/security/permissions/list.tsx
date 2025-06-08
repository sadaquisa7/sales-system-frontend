"use client";
import SectionsListComponent from "@components/dynamic/sections/list";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Permission } from "@interfaces/services/security/permissions.interface";
import { permissionsService } from "@/services/security/permissions.service";
import { Header } from "@/interfaces/components/dynamic/sections/list.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";
import { DataTableFilterMeta } from "primereact/datatable";
import { FilterMatchMode } from "primereact/api";
import { STATE_LIST } from "@constants/state.constants";

export default function SecurityPermissionsComponent() {
  const urlBase = "/permissions";
  const columns: ColumnFormProps[] = [
    {
      field: "name",
      header: "Permiso",
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
      filterComponent: "input",
      filter: true,
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
      filterComponent: "input",
      filter: true,
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
      field: "route",
      header: "Ruta",
      sortable: true,
      filterComponent: "input",
      filter: true,
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
      field: "methods",
      header: "Métodos",
      keyToRender: "method",
    },
    {
      field: "updated_at",
      header: "Última Actualización",
      sortable: true,
      filterComponent: "date",
      filter: true,
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
      filterComponent: "select",
      filter: true,
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
        {
          type: "state",
          service: permissionsService.state,
        },
        {
          type: "redirect",
          icon: "pi pi-pen-to-square",
          redirect: `${urlBase}/edit/{id}`,
          params: ["id"],
        },
        {
          type: "delete",
          service: permissionsService.delete,
        },
      ],
    },
  ];
  const header: Header = {
    title: "Listado de permisos",
    btnCreate: {
      redirect: `${urlBase}/create`,
    },
  };
  const params: QueryParams = {
    order: {
      field: "updated_at",
      direction: "DESC",
    },
  };

  const filters: DataTableFilterMeta = {
    name: {
      value: null,
      matchMode: FilterMatchMode.CONTAINS,
    },
    code: {
      value: null,
      matchMode: FilterMatchMode.STARTS_WITH,
    },
    description: {
      value: null,
      matchMode: FilterMatchMode.STARTS_WITH,
    },
    route: {
      value: null,
      matchMode: FilterMatchMode.CONTAINS,
    },
    updated_at: {
      value: null,
      matchMode: FilterMatchMode.BETWEEN,
    },
    state: {
      value: null,
      matchMode: FilterMatchMode.EQUALS,
    },
  };

  return (
    <SectionsListComponent<Permission>
      filters={filters}
      header={header}
      columns={columns}
      params={params}
      serviceGetData={permissionsService.list}
    />
  );
}
