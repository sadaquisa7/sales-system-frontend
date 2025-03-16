"use client";
import DataTableComponent from "@components/form/tables/dataTable";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";

export default function ProfileConfigComponent() {
  const columns: ColumnFormProps[] = [
    {
      field: "ip_address",
      header: "Dirección IP",
    },
    { field: "browser", header: "Navegador" },
    { field: "device_type", header: "Tipo de Dispositivo" },
    { field: "language", header: "Idioma" },
    { field: "user_agent", header: "Agente de Usuario" },
    { field: "timezone", header: "Zona Horaria" },
    { field: "geo_location", header: "Ubicación Geográfica" },
    { field: "state", header: "Estado" },
    { field: "created_at", header: "Fecha de Creación" },
    { field: "updated_at", header: "Última Actualización" },
    { field: "expires_at", header: "Fecha de Expiración" },
  ];

  const header = (
    <div className="font-extrabold text-2xl text-center lg:text-start">
      SESSIONES ACTIVAS
    </div>
  );
  return <DataTableComponent columns={columns} header={header} />;
}
