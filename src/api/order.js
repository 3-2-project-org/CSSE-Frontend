import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const getAllOrders = (data, userID) => {
  return useQuery({
    queryKey: ["orders", data],
    queryFn: async () => {
      const url = `/order/seller-orders/${userID}`;
      const data = await axiosInstance.get(url);
      return data;
    },
    enabled: false,
    refetchOnMount: true,
  });
};

export const getOrderById = (id) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      return await axiosInstance.get(`/order/${id}`);
    },
    enabled: true,
    refetchOnMount: true,
  });
};
