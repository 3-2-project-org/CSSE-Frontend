import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import orderRequest from "../api/Order/order.request";
import AccountSidebar from "../components/AccountSidebar";

const Response = () => {
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
                    width: "1120px",
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
                        height: "220px",
                        marginLeft: "50px",
                      }}></div>

                    <div style={{ display: "flex" }}>
                      <div style={{ marginLeft: "30px" }}>
                        <p>Placed By : {order.managerID}</p>
                        <br />
                        <p>Supplier : {order.supplierID}</p>
                        <br />
                        <p>Approval Status : {order.approval}</p>
                        <br />
                        <p>Delivery Status : {order.available}</p>
                        <br />
                      </div>
                      <div style={{ marginLeft: "150px" }}>
                        <p>Order Created Date : {order.requiredDate}</p>
                        <br />
                        <p>Delivered Date : {order.deliveredDate}</p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;
