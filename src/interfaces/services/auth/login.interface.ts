export interface LoginResponse {
  access_token: string;
  expires_at: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}
