import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const getAllTasks = () => {
  return useQuery({
    queryKey: "tasks",
    queryFn: async () => {
      return await axiosInstance.get("/task");
    },
  });
};

export const createTask = () => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInstance.post("/task", data);
    },
  });
};

export const updateTask = () => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInstance.patch("/task/" + data.id, data.values);
    },
  });
};

export const getTaskById = (id) => {
  return useQuery({
    queryKey: "task",
    queryFn: async () => {
      return await axiosInstance.get("/task/" + id);
    },
  });
};

export const deleteTask = () => {
  return useMutation({
    mutationFn: async (id) => {
      return await axiosInstance.delete("/task/" + id);
    },
  });
}