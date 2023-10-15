import axios from "axios";
import { getDataFromLocalStorage } from "../utils/accessLocalStorage";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3007/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getDataFromLocalStorage("token");
  config.headers.Authorization = `Bearer ${
    token || ""
  }`;
  return config;
});

export const apiRequest = async (request) => {
  const response = await request()
    .then((res) => ({
      ...res.data,
      success: true,
    }))
    .catch((error) => {
      const message = error.response.data.message;
      return {
        ...error.response,
        success: false,
        message: message,
      };
    });
  return response;
};
