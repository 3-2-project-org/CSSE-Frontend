import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const login = () => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInstance.post("/auth/login", data);
    },
  });
};

export const resetPassword = () => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInstance.patch("/auth/reset-password", data);
    },
  });
}


export const getAllUsers = () => {
  return useQuery({
    queryKey: "sitemanager",
    queryFn: async () => {
      return await axiosInstance.get("/auth/allusers?type=site manager");
    },
  });
}

export const getAllEmployees = () => {
  return useQuery({
    queryKey: "users",
    queryFn: async () => {
      return await axiosInstance.get("/auth/allusers");
    },
  });
}

export const getAllSuppliers = () => {
  return useQuery({
    queryKey: "suppliers",
    queryFn: async () => {
      return await axiosInstance.get("/auth/allusers?type=supplier");
    },
  });
}

export const registerUser = () => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInstance.post("/auth/register", data);
    },
  });
}

export const updateUser = () => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInstance.patch("/auth/edit/" + data.id, data.values);
    },
  });
}

export const getUserById = (id) => {
  return useQuery({
    queryKey: "user",
    queryFn: async () => {
      return await axiosInstance.get("/auth/user/" + id);
    },
  });
}