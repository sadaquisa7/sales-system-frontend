export interface LoadingContextValue {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
  setLoading: (state: boolean) => void;
}
