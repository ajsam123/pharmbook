import { authApi } from "../api/authApi";
import type { LoginData, SignUpData } from "../types/auth";

const login = async (data: LoginData) => {
  const res = await authApi.post("/login", data);
  return res.data;
};

const signup = async (data: SignUpData) => {
  const res = await authApi.post("/register", data);
  return res.data;
};

export { login, signup };
