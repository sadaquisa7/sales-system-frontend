"use client";
import SectionsListComponent from "@components/dynamic/sections/list";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Session } from "@interfaces/services/profile/config.interface";
import { sessionsService } from "@/services/profile/session.service";
import { Header } from "@/interfaces/components/dynamic/sections/list.interface";

export default function SecuritySessionsComponent() {
  const columns: ColumnFormProps[] = [
    {
      field: "user",
      header: "Usuario",
      keyToRender: "first_name,last_name",
      keySeparator: ",",
    },
    {
      field: "ip_address",
      header: "Dirección IP",
      sortable: true,
    },
    { field: "browser", header: "Navegador", sortable: true },
    { field: "device_type", header: "Tipo de Dispositivo", sortable: true },
    { field: "user_agent", header: "Agente de Usuario", sortable: true },
    { field: "timezone", header: "Zona Horaria", sortable: true },
    { field: "geo_location", header: "Ubicación Geográfica", sortable: true },
    { field: "updated_at", header: "Última Actualización", sortable: true },
    { field: "expires_at", header: "Fecha de Expiración", sortable: true },
    { field: "state", header: "Estado", sortable: true, type: "status" },
    {
      field: "action",
      header: "Acciones",
      type: "actions",
      actions: [
        {
          type: "state",
          service: sessionsService.state,
        },
        {
          type: "delete",
          service: sessionsService.delete,
        },
      ],
    },
  ];

  const header: Header = {
    title: "sessiones activas",
  };
  return (
    <SectionsListComponent<Session>
      columns={columns}
      header={header}
      serviceGetData={sessionsService.listAll}
    />
  );
}
