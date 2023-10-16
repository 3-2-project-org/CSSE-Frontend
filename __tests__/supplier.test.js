import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios"; 
import {
  getAllProducts,
  deleteProduct,
  createProduct,
  getProductById,
} from "../src/api/product"; 

jest.mock("axios"); // Mock the axios module

describe("Product Hooks", () => {
  beforeEach(() => {
    axios.mockReset(); 
  });

  // Mock the axiosInstance used in your hooks
  const mockAxiosInstance = axios.create();
  jest.spyOn(axios, "create").mockReturnValue(mockAxiosInstance);

  test("getAllProducts should fetch products", async () => {
    const queryKey = ["products", "Data"];
    const { result, waitFor } = renderHook(() => getAllProducts("Data"));

    axios.get.mockResolvedValue({ data: "Product" });

    await waitFor(() => result.current.isFetched);
    expect(result.current.data).toEqual("Product");
  });

  test("deleteProduct should delete a product", async () => {
    const queryClient = {
      invalidateQueries: jest.fn(),
    };
    const { result } = renderHook(() => deleteProduct());

    mockAxiosInstance.delete.mockResolvedValue();

    await act(async () => {
      await result.current.mutateAsync("productId");
    });

    expect(mockAxiosInstance.delete).toHaveBeenCalledWith("/product/productId");
    expect(queryClient.invalidateQueries).toHaveBeenCalledWith("products");
  });

  test("createProduct should create a product", async () => {
    const queryClient = {
      invalidateQueries: jest.fn(),
    };
    const { result } = renderHook(() => createProduct());

    mockAxiosInstance.post.mockResolvedValue();

    await act(async () => {
      await result.current.mutateAsync("productData");
    });

    expect(mockAxiosInstance.post).toHaveBeenCalledWith("/product", "productData");
    expect(queryClient.invalidateQueries).toHaveBeenCalledWith("products");
  });

  test("getProductById should fetch a product by ID", async () => {
    const productId = "randProductId";
    const queryKey = ["product", productId];
    const { result, waitFor } = renderHook(() => getProductById(productId));

    axios.get.mockResolvedValue({ data: "yourExpectedData" });

    await waitFor(() => result.current.isFetched);
    expect(result.current.data).toEqual("yourExpectedData");
  });
});
