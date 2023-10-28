import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./axios";

export const getAllSites = () => {
  return useQuery({
    queryKey: "sites",
    queryFn: async () => {
      return await axiosInstance.get("/site");
    },
  });
};

export const createSite = () => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInstance.post("/site", data);
    },
  });
};

export const updateSite = () => {
  return useMutation({
    mutationFn: async (data) => {
      return await axiosInstance.patch("/site/" + data.id, data.values);
    },
  });
};


export const getSiteById = (id) => {
  return useQuery({
    queryKey: "site",
    queryFn: async () => {
      return await axiosInstance.get("/site/" + id);
    },
  });
}