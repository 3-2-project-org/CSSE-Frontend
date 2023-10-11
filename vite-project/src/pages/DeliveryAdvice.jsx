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

const DeliveryAdvice = () => {
  const [deliveries, setdeliveries] = useState([]);
  useEffect(() => {
    deliveryRequest.getdelivery().then((res) => {
      //console.log(res.data);
      setdeliveries(res.data);
    });
  }, []);
  const deleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Please confirm whether you intend to delete this Delivery Advice`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    })
      .then((res) => {
        if (res.value) {
          deliveryRequest
            .deletedeliveryAdvice(id)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err.message);
              const msgText = err.message.split("Error: ")[1];
              Swal.fire("Error!", msgText, "error");
            });
        }
      })
      .catch((err) => {
        console.log(err.message);
        const msgText = err.message.split("Error: ")[1];
        swal.fire("Error!", msgText, "error");
      });
  };
  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <SupplierSidebar />
        <div
          class="h-full   pt-14 pb-14 md:ml-64"
          style={{
            backgroundImage: `url(${Cover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "1200px",
          }}>
          <div
            class="flex justify-center"
            style={{ marginRight: "40px", display: "grid" }}>
            <AddDeliveryAdvice />
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
                        <th class="py-3 px-6 text-center">Manager ID</th>
                        <th class="py-3 px-6 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                      {!deliveries.length ? (
                        <div>
                          <div>
                            <h4>No Medical Details Added !</h4>
                            <p>No Medical Details Were Found.</p>
                          </div>
                        </div>
                      ) : (
                        deliveries.map((chi) => (
                          <tr class="border-b border-gray-200 hover:bg-gray-100">
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
                                <span class="font-medium">{chi.unitPrice}</span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">{chi.total}</span>
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
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">{chi.managerID}</span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex item-center justify-center">
                                <UpdateDeliveryAdvice chi={chi} />

                                <div
                                  class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                  onClick={() => deleteOrder(chi._id)}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </div>
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

export default DeliveryAdvice;
