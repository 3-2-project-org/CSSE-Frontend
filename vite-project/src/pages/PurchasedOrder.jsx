import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import orderRequest from "../api/Order/order.request";

const PurchasedOrder = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    orderRequest.getOrders().then((res) => {
      console.log(res.data);
      setorders(res.data);
    });
  }, []);

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
          <div class="grid grid-cols-3 gap-4" style={{ marginLeft: "100px" }}>
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
                    height: "510px",
                    width: "300px",
                    textAlign: "center",
                    padding: "10px",
                  }}>
                  <p style={{ fontWeight: "bold" }}>Order ID </p>
                  <br />
                  <p>{order._id}</p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Manager ID</p>
                  <br />
                  <p>{order.managerID}</p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Supplier ID</p>
                  <br />
                  <p>{order.supplierID}</p>
                  <br />
                  <p style={{ fontWeight: "bold" }}>Delivery Status</p>
                  <br />
                  <p style={{ backgroundColor: "yellow" }}>{order.available}</p>
                  <br />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasedOrder;
