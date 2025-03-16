export interface LoginResponse {
  access_token: string;
  expires_at: number;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserRequest {
  last_name: string;
  first_name: string;
  password?: string;
}
