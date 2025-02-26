export interface ApiResponse<T = undefined> {
  status: boolean;
  message: string | object;
  data?: T;
  code: number | string;
}

export interface ErrorResponse {
  message?: string;
}
