"use client";
import { useMemo } from "react";
import { DataTableFormProps } from "@interfaces/components/form/tables/dataTable.interface";
import { DataTable, DataTableValueArray } from "primereact/datatable";
import { ColumnsFormComponent } from "./column";

const propsDefault: DataTableFormProps<any> = {
  alwaysShowPaginator: true,
  breakpoint: "960px",
  className: "w-full",
  columnResizeMode: "fit",
  compareSelectionBy: "deepEquals",
  csvSeparator: ",",
  currentPageReportTemplate:
    "Mostrando del {first} al {last} de {totalRecords} registros",
  defaultSortOrder: null,
  dragSelection: false,
  emptyMessage: "No hay registros",
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
  removableSort: false,
  reorderableColumns: false,
  reorderableRows: false,
  resizableColumns: false,
  responsiveLayout: "scroll",
  rowHover: false,
  rows: 5,
  scrollable: false,
  scrollHeight: "400px",
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
};

const DataTableFormComponent = <TValue extends DataTableValueArray>(
  propsCurrent: DataTableFormProps<TValue>
): React.ReactElement => {
  const props = useMemo(
    () => ({
      ...propsDefault,
      ...propsCurrent,
    }),
    [propsCurrent]
  );
  return (
    <DataTable {...props}>{props.columns.map(ColumnsFormComponent)}</DataTable>
  );
};

export default DataTableFormComponent;
