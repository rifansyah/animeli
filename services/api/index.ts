import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Toast from "react-native-toast-message";

const BASE_URL = "https://api.jikan.moe/v4";

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

interface ApiError {
  message: string;
  status?: number;
  data?: any;
}

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    const apiError: ApiError = {
      message:
        error.response?.data?.message || error.message || "An error occurred",
      status: error.response?.status,
      data: error.response?.data,
    };
    return Promise.reject(apiError);
  }
);

class ApiService {
  async get<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await apiClient.get<T>(endpoint, config);

      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Api error",
        text2: error.message || error,
      });

      throw error;
    }
  }

  async post<T>(
    endpoint: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response = await apiClient.post<T>(endpoint, data, config);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
    } catch (error) {
      throw error;
    }
  }
}

const api = new ApiService();

export default api;
