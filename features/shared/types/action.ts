export type ApiErrorCode = "INVALID_REQUEST" | "REQUEST_FAILED" | "NETWORK_ERROR";

export type ApiResponse<TData = never> =
  | { success: true; data?: TData[] }
  | { success: false; error: ApiErrorCode };
