export interface Method {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  method: string;
  description: string;
}

export interface Permission {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  name: string;
  code: string;
  description: string;
  route: string;
  methods: Method[];
}

export interface CreateOrUpdatePermissionDto {
  name: string;
  code: string;
  description: string;
  route: string;
  methods: number[];
}
