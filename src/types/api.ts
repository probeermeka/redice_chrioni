export interface ApiResponse<T = void> {
  success: boolean;
  error?: string;
  data?: T;
}