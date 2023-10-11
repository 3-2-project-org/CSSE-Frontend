import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import paymentReq from "../api/payment/payment.request";
import Swal from "sweetalert2";

const PaymentHistory = () => {
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    fetchPayment();
  }, []);

  const fetchPayment = () => {
    paymentReq.getPaymentByManagerId().then((res) => {
      console.log(res);
      setPayment(res.data);
      console.log(payment);
    });
  };

  const handleDelete = (id) => {
    paymentReq
      .deletePayment(id)
      .then((res) => {
        console.log(res);
        Swal.fire(
          `Payment Deleted Successfully!`,
          "Click Ok to continue",
          "success",
        );
      })
      .catch((err) => {
        Swal.fire("Error!", "Something went wrong", "error");
      });
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
                Payment History
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
                    <form onSubmit={""}>
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
                              <th>Payment type</th>
                              <th>Payment Amount (Rs.)</th>
                              <th>Payment Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {payment.map((payment, i) => (
                              <tr key={i}>
                                <th scope="row">{i + 1}</th>

                                <td>{payment.paymentType}</td>
                                <td>{payment.paymentAmount.toString()}</td>
                                <td>{payment.paymentStatus}</td>
                                <td>
                                  &nbsp;&nbsp;&nbsp;
                                  <a
                                    className=""
                                    href="#"
                                    onClick={() => handleDelete(payment._id)}>
                                    <button style={{ borderRadius: "25px" }}>
                                      Delete
                                    </button>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </form>
                    <br />
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

export default PaymentHistory;
