import {
  DataTableFilterMeta,
  DataTableFilterMetaData,
  DataTableOperatorFilterMetaData,
} from "primereact/datatable";

import { FilterQueryParams } from "@interfaces/components/form/tables/dataTable.interface";

// Type guard: filtro simple
function isFilterMetaData(meta: any): meta is DataTableFilterMetaData {
  return meta && typeof meta.matchMode === "string" && "value" in meta;
}

// Type guard: filtro con operador lógico
function isOperatorFilterMetaData(
  meta: any
): meta is DataTableOperatorFilterMetaData {
  return meta && (Array.isArray(meta.constraints) || meta.operator);
}

export function convertToAndFilterObject(
  filter: DataTableFilterMeta
): FilterQueryParams {
  const and: Record<string, { matchMode: string; value: any }> = {};

  for (const [field, meta] of Object.entries(filter)) {
    if (isFilterMetaData(meta)) {
      if (meta.value !== null && meta.value !== undefined) {
        and[field] = {
          matchMode: meta.matchMode.toUpperCase(),
          value: meta.value,
        };
      }
    } else if (isOperatorFilterMetaData(meta)) {
      const validConstraint = (meta.constraints || []).find(
        (c) => c.value !== null && c.value !== undefined
      );
      if (validConstraint) {
        and[field] = {
          matchMode: validConstraint.matchMode.toUpperCase(),
          value: validConstraint.value,
        };
      }
    }
  }

  return { and };
}
