import http from "../../../services/http";
import type {
  LoginRequest,
  RegisterRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  AuthResponse,
} from "../types/auth.types";

export const authApi = {
  register: (data: RegisterRequest) =>
    http.post("/auth/register", data),

  login: (data: LoginRequest) =>
    http.post<AuthResponse>("/auth/login", data),

  forgotPassword: (data: ForgotPasswordRequest) =>
    http.post("/auth/forgot-password", data),

  resetPassword: (data: ResetPasswordRequest) =>
    http.post("/auth/reset-password", data),
};
