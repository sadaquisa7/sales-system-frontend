"use client";
// Import Basic
import SectionsListComponent from "@components/dynamic/sections/list";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Header } from "@/interfaces/components/dynamic/sections/list.interface";

// Import Dynamic
import { User } from "@interfaces/services/security/users.interface";
import { usersService } from "@/services/security/users.service";

export default function SecurityUsersComponent() {
  const urlBase = "/roles";
  const columns: ColumnFormProps[] = [
    {
      field: "first_name",
      header: "Nombres",
      sortable: true,
    },
    { field: "last_name", header: "Apellidos", sortable: true },
    { field: "email", header: "Correo", sortable: true },
    {
      field: "max_active_sessions",
      header: "Cantidad de sesiones activas",
      sortable: true,
    },
    {
      field: "roles",
      header: "Roles",
      keyToRender: "name",
    },
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
          service: usersService.state,
        },
        {
          type: "redirect",
          icon: "pi pi-pen-to-square",
          redirect: `${urlBase}/edit/{id}`,
          params: ["id"],
        },
        {
          type: "delete",
          service: usersService.delete,
        },
      ],
    },
  ];
  const header: Header = {
    title: "Listado de usuarios",
    btnCreate: {
      redirect: `${urlBase}/create`,
    },
  };
  return (
    <SectionsListComponent<User>
      header={header}
      columns={columns}
      serviceGetData={usersService.list}
    />
  );
}
