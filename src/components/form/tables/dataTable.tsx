"use client";
import { useMemo, useEffect, useState, useRef, useCallback } from "react";
import {
  DataTableFormProps,
  PaginatorProps,
  QueryParams,
  SortOption,
  SortQueryParams,
  FilterQueryParams,
} from "@interfaces/components/form/tables/dataTable.interface";
import {
  DataTable,
  DataTableStateEvent,
  DataTableValue,
  SortOrder,
} from "primereact/datatable";
import { ApiResponse } from "@interfaces/axios/axio.interface";

import { ColumnsFormComponent } from "./column";
import { EmptyMessageFormComponent } from "./emptyMessage";
import { HeaderFormComponent } from "./header";

import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";

import { ALLOWED_KEYS } from "@constants/dataTable.constants";

import { convertToAndFilterObject } from "@/utils/datatable/filters";

const DataTableFormComponent = <D extends DataTableValue>(
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
    filterDisplay: "row",
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
    header: HeaderFormComponent(propsCurrent.titleHeader),
  };

  const mergedProps = useMemo(() => {
    return {
      ...propsDefault,
      ...propsCurrent,
    };
  }, [propsCurrent]);

  const [data, setData] = useState<D[]>((mergedProps.value as D[]) ?? []);
  const [filtersAux, setFiltersAux] = useState<FilterQueryParams | null>(null);
  const [loading, setLoading] = useState(
    !!propsCurrent.serviceGetData || propsCurrent.loading
  );
  const [configPaginator, setConfigPaginator] = useState<PaginatorProps>({
    rows: mergedProps.rows ?? 5,
    first: mergedProps.first ?? 0,
    page: mergedProps.first ?? 0,
    totalRecords: mergedProps.totalRecords ?? 1,
  });

  const GetSortOrder = (direction?: string): SortOrder => {
    if (direction === "ASC") return 1;
    if (direction === "DESC") return -1;
    return 0;
  };

  const [sort, setSort] = useState<SortOption | null>({
    field: mergedProps.params?.order?.field ?? "",
    order: GetSortOrder(mergedProps.params?.order?.direction),
  });

  const buildQueryParams = (
    queryParams?: Partial<QueryParams>
  ): QueryParams => {
    const baseParams: QueryParams = {
      limit: queryParams?.limit ?? configPaginator.rows,
      page: (queryParams?.page ?? configPaginator.page) + 1,
    };
    if (queryParams?.order !== null) {
      baseParams.order = queryParams?.order ?? mergedProps.params?.order;
    }
    if (queryParams?.filters) {
      baseParams.filters = queryParams?.filters;
    }
    return baseParams;
  };

  const handleResponse = (response: ApiResponse<D>) => {
    const { status, data } = response;
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
    } else {
      setData([]);
    }
  };

  const fetchData = useCallback(
    async (queryParams?: Partial<QueryParams>) => {
      if (!propsCurrent.serviceGetData) return;
      try {
        setLoading(true);
        const params = buildQueryParams(queryParams);
        const response = await propsCurrent.serviceGetData(params);
        handleResponse(response);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    },
    [configPaginator, sort, propsCurrent.serviceGetData]
  );

  const fetchDataRef = useRef(fetchData);

  useEffect(() => {
    fetchDataRef.current = fetchData;
  }, [fetchData]);

  useEffect(() => {
    fetchData();
    if (propsCurrent.onRefetchSetter) {
      propsCurrent.onRefetchSetter(() => fetchDataRef.current());
    }
  }, []);

  const props = useMemo(() => {
    return Object.fromEntries(
      Object.entries({
        ...mergedProps,
        paginator: !mergedProps.serviceGetData,
        loading: loading || mergedProps.loading,
      }).filter(([key]) => ALLOWED_KEYS.includes(key))
    );
  }, [mergedProps, loading]);

  const onPageChange = async (event: PaginatorPageChangeEvent) => {
    const { rows, page, first } = event;
    setConfigPaginator((prev) => ({
      ...prev,
      rows,
      page,
      first,
    }));
    fetchData({ limit: rows, page });
  };

  const onSort = async (event: DataTableStateEvent) => {
    const { sortField, sortOrder } = event;
    setSort(null);
    let order: SortQueryParams | null = null;
    if (sortOrder) {
      setSort({ field: sortField, order: sortOrder });
      order = {
        field: sortField,
        direction: sortOrder === 1 ? "ASC" : "DESC",
      };
    }
    await fetchData({
      limit: configPaginator.rows,
      page: configPaginator.page,
      order,
    });
  };

  const onFilter = async (event: DataTableStateEvent) => {
    const filters = convertToAndFilterObject(event.filters);
    if (JSON.stringify(filters) === JSON.stringify(filtersAux)) {
      return;
    }
    const order: SortQueryParams | null = {
      field: sort?.field ?? "",
      direction: sort?.order === 1 ? "ASC" : "DESC",
    };
    setFiltersAux(filters);
    await fetchData({
      limit: configPaginator.rows,
      page: configPaginator.page,
      filters,
      order,
    });
  };
  return (
    <>
      <DataTable
        {...props}
        onSort={onSort}
        value={data}
        sortField={sort?.field}
        sortOrder={sort?.order}
        onFilter={onFilter}
      >
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
