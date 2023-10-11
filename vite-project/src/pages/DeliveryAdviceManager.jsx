import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import Swal from "sweetalert2";
import AddDeliveryAdvice from "../components/models/AddDeliveryAdvice";
import UpdateDeliveryAdvice from "../components/models/UpdateDeliveryAdvice";
import SupplierSidebar from "../components/SupplierSidebar";
import deliveryRequest from "../api/delivaryadvice/delivery.request";

const DeliveryAdviceManager = () => {
  const [deliveries, setdeliveries] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  useEffect(() => {
    deliveryRequest.getdeliveryforManager().then((res) => {
      //console.log(res.data);
      setdeliveries(res.data);
    });
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    setWordEntered(searchWord);
    const newFilter = deliveries.filter((res) => {
      return (
        res.deliveredDate.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.orderID.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.deliveryItems.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.quantity.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      console.log("EMPLTY");
      deliveryRequest.getdeliveryforManager().then((res) => {
        //console.log(res.data);
        setdeliveries(res.data);
      });
    } else {
      setdeliveries(newFilter);
    }
  };

  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <Sidebar />
        <div
          class="h-full   pt-14 pb-14 md:ml-64"
          style={{
            backgroundImage: `url(${Cover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "1200px",
          }}>
          <div
            style={{
              marginRight: "200px",
              width: "400px",
              marginLeft: "180px",
            }}>
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  value={wordEntered}
                  onChange={handleFilter}
                />
              </div>
              <button
                type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </form>
          </div>
          <br />
          <div
            class="flex justify-center"
            style={{ marginRight: "40px", display: "grid" }}>
            <div class="overflow-x-auto ml-10">
              <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                  <table class="min-w-max w-full table-auto">
                    <thead>
                      <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">Delivery ID</th>
                        <th class="py-3 px-6 text-left">Order ID</th>
                        <th class="py-3 px-6 text-center">Delivery Items</th>
                        <th class="py-3 px-6 text-center">Delivered Date</th>
                        <th class="py-3 px-6 text-center">Quantity</th>
                        <th class="py-3 px-6 text-center">Unit Price</th>
                        <th class="py-3 px-6 text-center">Total</th>
                        <th class="py-3 px-6 text-center">description</th>
                      </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                      {!deliveries.length ? (
                        <div>
                          <div>
                            <h4>No Delivery Advice Added !</h4>
                            <p>No Delivery Advice Were Found.</p>
                          </div>
                        </div>
                      ) : (
                        deliveries.map((chi) => (
                          <tr class="border-b border-gray-200 hover:bg-gray-200">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">{chi._id}</span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">{chi.orderID}</span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">
                                  {chi.deliveryItems}
                                </span>
                              </div>
                            </td>

                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">
                                  {chi.deliveredDate}
                                </span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">{chi.quantity}</span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">
                                  {chi.unitPrice}.00
                                </span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">{chi.total}.00</span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">
                                  {chi.description}
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAdviceManager;
