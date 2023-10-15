import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const login = () => {
  return useMutation({
    mutationFn: async (data) => {
      console.log(data);
      return await axiosInstance.post("/auth/login", data);
    },
  });
};

export const resetPassword = () => {
  return useMutation({
    mutationFn: async (data) => {
      console.log("data ", data);
      return await axiosInstance.patch("/auth/reset-password", data);
    },
  });
}
