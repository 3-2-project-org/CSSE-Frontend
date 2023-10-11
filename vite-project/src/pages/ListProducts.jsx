import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import productRequest from "../api/product/product.request";
import SupplierSidebar from "../components/SupplierSidebar";
import UpdateProduct from "../components/models/UpdateProduct";
import Swal from "sweetalert2";

const ListProducts = () => {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    productRequest.getProductsForSupplier().then((res) => {
      console.log(res.data);
      setorders(res.data);
    });
  }, []);

  const deleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Please confirm whether you intend to delete this Product`,
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
        Swal.fire("Error!", msgText, "error");
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
                  <h4>No Products Created !</h4>
                  <p>No Products Were Found.</p>
                </div>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  class="rounded-lg shadow-lg bg-white max-w-m"
                  style={{
                    height: "540px",
                    width: "300px",
                    textAlign: "center",
                    padding: "10px",
                  }}
                  key={order._id}>
                  <img
                    class="w-full"
                    src={order.image}
                    alt="Sunset in the mountains"></img>
                  <p style={{ marginRight: "160px" }}>{order.itemName}</p>
                  <p style={{ marginRight: "160px" }}>{order.itemBrand}</p>
                  <p style={{ marginRight: "160px" }}>
                    Av.Qty : {order.availableQty}
                  </p>
                  <p style={{ marginRight: "160px" }}>price : {order.price}</p>

                  <div
                    class="flex item-center justify-center"
                    style={{ marginLeft: "160px" }}>
                    <UpdateProduct order={order} />

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

export default ListProducts;
