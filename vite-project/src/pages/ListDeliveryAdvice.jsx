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
import AccountSidebar from "../components/AccountSidebar";

const ListDeliveryAdvice = () => {
  const [deliveries, setdeliveries] = useState([]);
  useEffect(() => {
    deliveryRequest.getAlldeliveryAdvice().then((res) => {
      //console.log(res.data);
      setdeliveries(res.data);
    });
  }, []);

  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <AccountSidebar />
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

export default ListDeliveryAdvice;
