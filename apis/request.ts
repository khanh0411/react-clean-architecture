import axios, { AxiosError } from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

// ✅ REQUEST INTERCEPTOR: Thêm token
api.interceptors.request.use(
  (config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// ✅ RESPONSE INTERCEPTOR: Bắt lỗi
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) {
      switch (response.status) {
        case 401:
          console.error("Token hết hạn. Đăng nhập lại.");
          break;
        case 403:
          console.error("Không đủ quyền.");
          break;
        case 500:
          console.error("Lỗi server.");
          break;
        default:
          console.error(response?.data?.message || "Lỗi không xác định.");
      }
    } else {
      console.error("Không thể kết nối đến máy chủ.");
    }

    return Promise.reject(error);
  }
);


export default api;
