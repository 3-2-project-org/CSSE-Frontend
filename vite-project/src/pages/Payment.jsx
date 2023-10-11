import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import paymentReq from "../api/payment/payment.request";
import deliveryAdvice from "../api/delivaryadvice/delivery.request";
import Swal from "sweetalert2";

const Payment = () => {
  const [orders, setorders] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    fetchOrders();
    paymentCalculator();
  }, []);

  const fetchOrders = () => {
    deliveryAdvice.getdeliveryforManager().then((res) => {
      setorders(res.data);
      console.log(orders);
      paymentCalculator();
    });
  };

  const handleSubmit = (e) => {
    console.log("Submit Call");
    paymentReq
      .savePayment({
        paymentName: new Date() + totalPrice,
        paymentType: "Regular",
        paymentAmount: totalPrice,
        paymentStatus: "Paid",
      })
      .then((res) => {
        console.log(res);
        Swal.fire(
          `Payment Created Successfully!`,
          "Click Ok to continue",
          "success",
        );
      })
      .catch((err) => {
        Swal.fire("Error!", "Something went wrong", "error");
      });
  };

  const paymentCalculator = () => {
    console.log("PAYMENT CALCULATOR EXECUTE");
    let total = 0;
    orders.map((orders, i) => {
      let key = i;
      console.log("KEY: " + key);
      console.log(orders.orderID);
      total += orders.unitPrice * orders.quantity;
    });
    setTotalPrice(total);
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
          <div class="flex justify-center" style={{ marginRight: "40px" }}>
            <div class="rounded-lg shadow-lg bg-white max-w-m">
              <h2
                style={{
                  textAlign: "center",
                  paddingTop: "20px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}>
                Payments
              </h2>
              <div
                style={{
                  width: "600px",
                  marginLeft: "30px",
                  padding: "50px",
                }}></div>
              <div>
                <div class="col">
                  <center>
                    <form onSubmit={handleSubmit}>
                      <div>
                        <table
                          id="table"
                          class="table"
                          responsive
                          className="table table-hover"
                          style={{ marginTop: "20px", marginLeft: "10px" }}>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Item Name</th>
                              <th>quantity</th>
                              <th>Unit Price (Rs.)</th>
                              <th>Total (Rs.)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.map((orders, i) => (
                              <tr key={i}>
                                <th scope="row">{i + 1}</th>

                                <td>{orders.deliveryItems}</td>
                                <td>{orders.quantity.toString()}</td>
                                <td>{orders.unitPrice.toString()}</td>
                                <td>
                                  {(
                                    orders.unitPrice * orders.quantity
                                  ).toString()}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </form>
                    <br />
                    <div>
                      {totalPrice ? (
                        <h5></h5>
                      ) : (
                        <button
                          onClick={() => paymentCalculator()}
                          className="btn btn-primary btn-block">
                          Check the Total Price
                        </button>
                      )}
                    </div>
                    <div>
                      {totalPrice ? (
                        <div>
                          <div>
                            <h3>Total Price (Rs.) = {totalPrice}</h3>
                          </div>
                          <br />
                          <button
                            onClick={() => handleSubmit()}
                            className="btn btn-primary btn-block">
                            Settle the Payment
                          </button>
                        </div>
                      ) : (
                        <h4></h4>
                      )}
                    </div>
                    <br />
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
