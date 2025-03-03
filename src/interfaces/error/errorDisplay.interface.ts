// Define the Information interface (same as before)
export interface Information {
  img: string;
  status: number;
  message: string;
  description: string;
}

// Define props interface
export interface ErrorDisplayProps {
  information: Information;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
}
