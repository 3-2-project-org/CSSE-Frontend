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
