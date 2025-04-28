"use client";
// Import Basic
import SectionsListComponent from "@components/dynamic/sections/list";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Header } from "@/interfaces/components/dynamic/sections/list.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";

// Import Dynamic
import { Role } from "@interfaces/services/security/roles.interface";
import { rolesService } from "@/services/security/roles.service";

export default function SecurityRolesComponent() {
  const urlBase = "/roles";
  const columns: ColumnFormProps[] = [
    {
      field: "name",
      header: "Rol",
      sortable: true,
    },
    { field: "code", header: "Código", sortable: true },
    { field: "description", header: "Descripción", sortable: true },
    {
      field: "permissions",
      header: "Permisos",
      keyToRender: "name",
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
          service: rolesService.state,
        },
        {
          type: "redirect",
          icon: "pi pi-pen-to-square",
          redirect: `${urlBase}/edit/{id}`,
          params: ["id"],
        },
        {
          type: "delete",
          service: rolesService.delete,
        },
      ],
    },
  ];
  const header: Header = {
    title: "Listado de roles",
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
    <SectionsListComponent<Role>
      header={header}
      columns={columns}
      params={params}
      serviceGetData={rolesService.list}
    />
  );
}
