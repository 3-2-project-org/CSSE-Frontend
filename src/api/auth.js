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
