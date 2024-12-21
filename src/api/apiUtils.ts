// src/api/apiUtils.ts
import axiosInstance from "./axiosInstance";
import { ApiError } from "./apiTypes";
import axios from "axios";

// 공통 GET 함수
export const getData = async <T>(
  url: string,
  params?: Record<string, any>,
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// 공통 POST 함수
export const postData = async <T>(url: string, data: unknown): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(url, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// 공통 PUT 함수
export const putData = async <T>(url: string, data: unknown): Promise<T> => {
  try {
    const response = await axiosInstance.put<T>(url, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// 공통 DELETE 함수
export const deleteData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axiosInstance.delete<T>(url);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

// 에러 처리 함수
const handleApiError = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    const apiError = error.response?.data as ApiError;
    console.error(`API Error: ${apiError.message}`);
  } else {
    console.error("Unexpected Error:", error);
  }
};
