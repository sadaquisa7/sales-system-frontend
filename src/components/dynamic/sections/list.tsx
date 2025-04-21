"use client";
import DataTableComponent from "@components/form/tables/dataTable";
import { useState } from "react";
import { SectionsListProps } from "@interfaces/components/dynamic/sections/list.interface";
import { DataTableValue } from "primereact/datatable";
import { ColumnsTemplateComponent } from "./columns/template";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { useToast } from "@contexts/toast/toast.context";
import { ApiResponse } from "@interfaces/axios/axio.interface";

export default function SectionsListComponent<TData extends DataTableValue>(
  props: SectionsListProps<TData>
) {
  const [refetchData, setRefetchData] = useState<() => void>(() => () => {});
  const [loading, setLoading] = useState(false);
  const { success, error } = useToast();
  const { columns, titleHeader, serviceGetData } = props;

  const executeLoading = async (loading: boolean, response?: ApiResponse) => {
    setLoading(loading);
    if (response) {
      const { message, status } = response;
      if (status) {
        success(message);
        refetchData();
      } else {
        error(message);
      }
    }
  };

  const newColumns: ColumnFormProps[] = columns.map(
    (column: ColumnFormProps) => {
      const body = ColumnsTemplateComponent(column, executeLoading);
      return body
        ? {
            ...column,
            body,
          }
        : column;
    }
  );

  return (
    <DataTableComponent<TData>
      columns={newColumns}
      loading={loading}
      titleHeader={titleHeader}
      serviceGetData={serviceGetData}
      onRefetchSetter={(fn) => setRefetchData(() => fn)}
    />
  );
}
