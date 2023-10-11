import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import UpdateOrderRequest from "../components/models/UpdateOrderRequest";
import Swal from "sweetalert2";
import orderRequest from "../api/Order/order.request";

const PlacedOrderRequest = () => {
  const [orders, setorders] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  useEffect(() => {
    orderRequest.getOrdersforManager().then((res) => {
      console.log(res.data);
      setorders(res.data);
    });
  }, []);

  const fetchOrders = () => {
    orderRequest.getOrdersforManager().then((res) => {
      console.log(res.data);
      setorders(res.data);
    });
  };

  const deleteOrder = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: `Please confirm whether you intend to delete this Order`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    })
      .then((res) => {
        if (res.value) {
          orderRequest
            .deleteOrderRequest(id)
            .then((res) => {
              fetchOrders();
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
        Swal.fire("Error!", msgText, "error");
      });
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    setWordEntered(searchWord);
    const newFilter = orders.filter((res) => {
      return (
        res.supplierID.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.status.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.available.toLowerCase().includes(searchWord.toLowerCase()) ||
        res.requiredDate.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      console.log("EMPLTY");
      orderRequest.getOrders().then((res) => {
        console.log(res.data);
        setorders(res.data);
      });
    } else {
      setorders(newFilter);
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
              marginRight: "236px",
              width: "400px",
              marginLeft: "290px",
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
            {!orders.length ? (
              <div style={{ width: "1300px" }}>
                <div
                  style={{
                    background: "lightblue",
                    marginLeft: "150px",
                    marginTop: "150px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}>
                  <h4>No Order Purchase Created !</h4>
                  <p>No Orders Were Found.</p>
                </div>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  class="rounded-lg shadow-lg bg-white max-w-m"
                  style={{
                    height: "260px",
                    width: "1000px",
                    marginBottom: "50px",
                  }}>
                  <br />

                  <div style={{ display: "flex" }}>
                    <div>
                      <p style={{ marginLeft: "30px", paddingTop: "30px" }}>
                        Order ID <br />
                        {order._id}
                      </p>

                      <br />
                    </div>
                    <div
                      style={{
                        borderLeft: "6px solid black",
                        height: "230px",
                        marginLeft: "50px",
                      }}></div>

                    <div style={{ display: "flex" }}>
                      <div style={{ marginLeft: "30px" }}>
                        <p>Placed By : {order.managerID}</p>
                        <br />
                        <p>Supplier : {order.supplierID}</p>
                        <br />
                        <p>Order Status : {order.status}</p>
                        <br />
                        <p>Delivery Status : {order.available}</p>
                        <br />
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginLeft: "150px", display: "flex" }}>
                          <p style={{ paddingRight: "20px" }}>
                            {order.requiredDate}
                          </p>
                          <UpdateOrderRequest order={order} />
                          <div
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                            onClick={() => deleteOrder(order._id)}>
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
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacedOrderRequest;
