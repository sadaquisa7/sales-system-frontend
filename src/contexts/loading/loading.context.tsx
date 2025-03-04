"use client";

import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import SpinnerComponent from "@components/loadings/spinner.component";
import { LoadingContextValue } from "@interfaces/loadings/loading.interface";

// Create context with undefined as default value
const LoadingContext = createContext<LoadingContextValue | undefined>(
  undefined
);

export function LoadingProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [isLoading, setIsLoading] = useState(false);

  // Functions to control loading state
  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);
  const setLoading = (state: boolean) => setIsLoading(state);

  // Context value
  const value: LoadingContextValue = useMemo(
    () => ({
      isLoading,
      showLoading,
      hideLoading,
      setLoading,
    }),
    [isLoading, showLoading, hideLoading, setLoading]
  );

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <SpinnerComponent />}
      {children}
    </LoadingContext.Provider>
  );
}

// Custom hook for using loading context
export function useLoading(): LoadingContextValue {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
