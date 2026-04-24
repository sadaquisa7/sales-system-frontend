export interface Menu {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  name: string;
  code: string;
  icon: string;
  route: string;
  sort_order: number;
  parent_id: number | null;
  redirect: string | null;
  is_public: number;
  parent: Menu | null;
  children: Menu[];
  permissions: MenuPermission[];
}

interface MenuPermission {
  id: number;
  name: string;
  code: string;
}

export interface CreateOrUpdateMenuDto {
  name: string;
  code: string;
  icon: string;
  route: string;
  sort_order: number;
  parent_id?: number | null;
  permissions: number[];
}
