import { User } from "../security/users.interface";
interface DeviceInfo {
  browser: string;
  browser_version: string;
  device_type: string;
  os: string;
  os_version: string;
  user_agent: string;
}

export interface Session {
  id: number;
  state: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  ip_address: string;
  device_info: DeviceInfo;
  browser: string;
  browser_version: string;
  device_type: string;
  screen_resolution: string | null;
  language: string;
  user_agent: string;
  timezone: string;
  geo_location: string | null;
  expires_at: string;
  user: User;
}
