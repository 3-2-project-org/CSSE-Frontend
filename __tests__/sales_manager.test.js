import { renderHook } from "@testing-library/react-hooks";
import axios from "axios"; 
import { getAllOrders, getOrderById } from "../src/api/order"; 

jest.mock("axios"); // Mock the axios module

describe("Orders Hooks", () => {
  beforeEach(() => {
    axios.mockReset(); 
  });

  // Mock the axiosInstance used in your hooks
  const mockAxiosInstance = axios.create();
  jest.spyOn(axios, "create").mockReturnValue(mockAxiosInstance);

  test("getAllOrders should fetch orders", async () => {
    const userId = "yourUserId";
    const queryKey = ["orders", userId];
    const { result, waitFor } = renderHook(() => getAllOrders(userId));

    const expectedData = ["order1", "order2"]; 

    mockAxiosInstance.get.mockResolvedValue({ data: expectedData });

    await waitFor(() => result.current.isFetched);
    expect(result.current.data).toEqual(expectedData);
  });

  test("getOrderById should fetch an order by ID", async () => {
    const orderId = "yourOrderId";
    const queryKey = ["order", orderId];
    const { result, waitFor } = renderHook(() => getOrderById(orderId));

    const expectedData = { id: orderId }; 

    mockAxiosInstance.get.mockResolvedValue({ data: expectedData });

    await waitFor(() => result.current.isFetched);
    expect(result.current.data).toEqual(expectedData);
  });
});
