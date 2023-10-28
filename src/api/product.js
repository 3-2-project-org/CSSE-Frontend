import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const getAllProducts = (data) => {
  return useQuery({
    queryKey: ["products", data],
    queryFn: async () => {
      const url = "/product?" + data;
      return await axiosInstance.get(url);
    },
    enabled: false,
    refetchOnMount: true,
  });
};

export const deleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      return await axiosInstance.delete(`/product/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
};

export const createProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInstance.post("/product", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
};

export const getProductById = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      return await axiosInstance.get(`/product/${id}`);
    },
    enabled: true,
    refetchOnMount: true,
  });
}


export const getProductCount = () => {
  return useQuery({
    queryKey: ["productCount"],
    queryFn: async () => {
      return await axiosInstance.get(`/product/count`);
    },
    enabled: true,
    refetchOnMount: true,
  });
}