"use client";
import SectionsListComponent from "@components/dynamic/sections/list";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Permission } from "@interfaces/services/security/permissions.interface";
import { permissionsService } from "@/services/security/permissions.service";
export default function SecurityPermissionsComponent() {
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
          type: "redirect",
          icon: "pi pi-pen-to-square",
          redirect: `/permissions/edit/{id}`,
          params: ["id"],
        },
        {
          type: "delete",
          service: permissionsService.delete,
        },
        {
          type: "state",
          service: permissionsService.state,
        },
      ],
    },
  ];
  return (
    <SectionsListComponent<Permission>
      titleHeader="Listado de permisos"
      columns={columns}
      serviceGetData={permissionsService.list}
    />
  );
}
