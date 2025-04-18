export interface ApiResponse<D = undefined> {
  status: boolean;
  message: string | object;
  data?: D | Paginated<D>;
  code: number | string;
}

export interface Paginated<I> {
  items: I[];
  total: number;
  page: number;
  limit: number;
}

export interface ErrorResponse {
  message?: string;
}
