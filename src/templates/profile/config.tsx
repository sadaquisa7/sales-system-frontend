"use client";
import DataTableComponent from "@components/form/tables/dataTable";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { Session } from "@interfaces/services/profile/config.interface";
import { sessionsService } from "@/services/profile/session.service";
export default function ProfileConfigComponent() {
  const columns: ColumnFormProps[] = [
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
    { field: "state", header: "Estado", sortable: true },
  ];
  return (
    <DataTableComponent<Session>
      columns={columns}
      titleHeader="sessiones activas"
      serviceGetData={sessionsService.list}
    />
  );
}
