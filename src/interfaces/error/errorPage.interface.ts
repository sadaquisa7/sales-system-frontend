import { Information } from "@/interfaces/error/errorDisplay.interface";

export interface ErrorPageProps {
  status: number;
}

export interface ErrorData {
  [key: number]: Information;
}

export interface Head {
  title: string;
  description: string;
}

export interface ErrorHead {
  [key: number]: Head;
}
