import api from "../request";

export interface LoginParams {
  email: string;
  password: string;
}

export function loginRequest(params: LoginParams) {
  return api.post(`/login`, params);
}
