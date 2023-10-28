import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const creteDelivery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInstance.post("/delivery", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("delivery");
    },
  });
};

export const getAllDeliveries = () => {
  return useQuery({
    queryKey: ["delivery"],
    queryFn: async () => {
      return await axiosInstance.get("/delivery");
    },
  });
}

export const deleteDelivery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      return await axiosInstance.delete(`/delivery/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("delivery");
    },
  });
}

export const getDeliveryById = (id) => {
  return useQuery({
    queryKey: ["delivery", id],
    queryFn: async () => {
      return await axiosInstance.get(`/delivery/${id}`);
    },
  });
}