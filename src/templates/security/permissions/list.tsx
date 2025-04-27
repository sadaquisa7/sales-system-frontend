"use client";
import SectionsListComponent from "@components/dynamic/sections/list";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Permission } from "@interfaces/services/security/permissions.interface";
import { permissionsService } from "@/services/security/permissions.service";
import { Header } from "@/interfaces/components/dynamic/sections/list.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";

export default function SecurityPermissionsComponent() {
  const urlBase = "/permissions";
  const columns: ColumnFormProps[] = [
    {
      field: "name",
      header: "Permiso",
      sortable: true,
    },
    { field: "code", header: "Código", sortable: true },
    { field: "description", header: "Descripción", sortable: true },
    { field: "route", header: "Ruta", sortable: true },
    {
      field: "methods",
      header: "Métodos",
      keyToRender: "method",
    },
    { field: "updated_at", header: "Última Actualización", sortable: true },
    { field: "state", header: "Estado", sortable: true, type: "status" },
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
  return (
    <SectionsListComponent<Permission>
      header={header}
      columns={columns}
      params={params}
      serviceGetData={permissionsService.list}
    />
  );
}
