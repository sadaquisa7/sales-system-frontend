// permissions.ts
export const permissions: Record<string, string[]> = {
  "/products": ["view_products"],
  "/orders": ["view_orders"],
};

export const permissions_all: string = "ALL_ADMIN";
