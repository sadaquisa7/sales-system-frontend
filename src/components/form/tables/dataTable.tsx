"use client";
import { useMemo, useEffect, useState } from "react";

import {
  DataTableFormProps,
  PaginatorProps,
  QueryParams,
} from "@interfaces/components/form/tables/dataTable.interface";
import { DataTable } from "primereact/datatable";

import { ColumnsFormComponent } from "./column";
import { EmptyMessageFormComponent } from "./emptyMessage";
import { HeaderFormComponent } from "./header";

import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";

import { ALLOWED_KEYS } from "@constants/dataTable.constants";

const DataTableFormComponent = <D,>(
  propsCurrent: DataTableFormProps<D>
): React.ReactElement => {
  const propsDefault: DataTableFormProps<D> = {
    alwaysShowPaginator: true,
    breakpoint: "960px",
    className: "w-full",
    columnResizeMode: "fit",
    compareSelectionBy: "deepEquals",
    csvSeparator: ",",
    currentPageReportTemplate:
      "Mostrando del {first} al {last} de {totalRecords} registros",
    dragSelection: false,
    emptyMessage: EmptyMessageFormComponent,
    filterDelay: 300,
    filterDisplay: "menu",
    first: 0,
    frozenRow: false,
    lazy: false,
    loading: false,
    metaKeySelection: true,
    paginator: true,
    paginatorPosition: "bottom",
    pageLinkSize: 5,
    removableSort: true,
    reorderableColumns: false,
    reorderableRows: false,
    resizableColumns: false,
    responsiveLayout: "scroll",
    rowHover: false,
    rows: 5,
    scrollable: false,
    selectAll: false,
    selectionPageOnly: false,
    selectOnEdit: true,
    showGridlines: true,
    showHeaders: true,
    size: "normal",
    sortMode: "single",
    stateStorage: "session",
    stripedRows: false,
    unstyled: false,
    value: [],
    columns: [],
    tableStyle: { minWidth: "50rem", maxWidth: "100%" },
    rowsPerPageOptions: [5, 10, 15, 25, 50, 100],
    paginatorTemplate:
      "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",
    sortOrder: -1,
    header: HeaderFormComponent(propsCurrent.titleHeader),
  };

  const mergedProps = useMemo(() => {
    return {
      ...propsDefault,
      ...propsCurrent,
    };
  }, [propsCurrent]);

  const [data, setData] = useState<D[]>([]);
  const [loading, setLoading] = useState(
    !!propsCurrent.serviceGetData || propsCurrent.loading
  );
  const [configPaginator, setConfigPaginator] = useState<PaginatorProps>({
    rows: mergedProps.rows ?? 5,
    first: mergedProps.first ?? 0,
    page: mergedProps.first ?? 0,
    totalRecords: mergedProps.totalRecords ?? 1,
  });

  const fetchData = async (queryParams?: Partial<QueryParams>) => {
    try {
      setLoading(true);
      if (propsCurrent.serviceGetData) {
        const params: QueryParams = {
          limit: queryParams?.limit ?? configPaginator.rows,
          page: (queryParams?.page ?? configPaginator.page) + 1,
        };

        const { status, data } = await propsCurrent.serviceGetData(params);
        if (
          status &&
          typeof data === "object" &&
          data !== null &&
          "items" in data
        ) {
          const { items, total } = data;
          setConfigPaginator((prev) => ({
            ...prev,
            totalRecords: total,
          }));
          setData(items);
        }
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const props = useMemo(() => {
    return Object.fromEntries(
      Object.entries({
        ...mergedProps,
        value: data,
        loading: loading,
        paginator: !propsCurrent.serviceGetData,
      }).filter(([key]) => ALLOWED_KEYS.includes(key))
    );
  }, [mergedProps, data, loading, propsCurrent.serviceGetData]);

  const onPageChange = async (event: PaginatorPageChangeEvent) => {
    const { rows, page, first } = event;
    setConfigPaginator((prev) => ({
      ...prev,
      rows,
      page,
      first,
    }));
    await fetchData({ limit: rows, page });
  };

  return (
    <>
      <DataTable {...props}>
        {props.columns.map(ColumnsFormComponent)}
      </DataTable>
      {mergedProps.paginator && !props.paginator && (
        <Paginator
          first={configPaginator.first}
          rows={configPaginator.rows}
          totalRecords={configPaginator.totalRecords}
          rowsPerPageOptions={props.rowsPerPageOptions}
          onPageChange={onPageChange}
          currentPageReportTemplate={props.currentPageReportTemplate}
          template={props.paginatorTemplate}
        />
      )}
    </>
  );
};

export default DataTableFormComponent;
