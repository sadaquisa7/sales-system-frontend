"use client";
import { useState } from "react";
import { DataTableValue } from "primereact/datatable";

import DataTableComponent from "@components/form/tables/dataTable";
import { ColumnsTemplateComponent } from "./columns/template";
import ConfirmationModal from "./modals/confirmation";
import { HeaderFormComponent } from "./header";

import {
  SectionsListProps,
  ActionHandlers,
} from "@interfaces/components/dynamic/sections/list.interface";
import { ColumnFormProps } from "@interfaces/components/form/tables/column.interface";
import { ApiResponse } from "@interfaces/axios/axio.interface";

import { useToast } from "@contexts/toast/toast.context";

export default function SectionsListComponent<TData extends DataTableValue>(
  props: SectionsListProps<TData>
) {
  const [refetchData, setRefetchData] = useState<() => void>(() => () => {});
  const [pendingService, setPendingService] = useState<
    (() => Promise<ApiResponse>) | null
  >(null);

  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { success, error } = useToast();
  const { columns, header, serviceGetData } = props;

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

  const actionHandlers: ActionHandlers = {
    executeLoading,
    setShowConfirm,
    setPendingService,
  };

  const newColumns: ColumnFormProps[] = columns.map(
    (column: ColumnFormProps) => {
      const body = ColumnsTemplateComponent(column, actionHandlers);
      return body
        ? {
            ...column,
            body,
          }
        : column;
    }
  );

  const onAccept = async () => {
    if (pendingService) {
      await executeLoading(true);
      const response = await pendingService();
      await executeLoading(false, response);
      setPendingService(null);
    }
    setShowConfirm(false);
  };

  const onReject = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <DataTableComponent<TData>
        columns={newColumns}
        loading={loading}
        header={HeaderFormComponent(header)}
        serviceGetData={serviceGetData}
        onRefetchSetter={(fn) => setRefetchData(() => fn)}
      />
      <ConfirmationModal
        visible={showConfirm}
        onAccept={onAccept}
        onReject={onReject}
      />
    </>
  );
}
