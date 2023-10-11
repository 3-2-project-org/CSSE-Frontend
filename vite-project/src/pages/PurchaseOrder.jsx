import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import supplierRequest from "../api/Supplier/supplier.request";
import orderRequest from "../api/Order/order.request";
import Swal from "sweetalert2";

const PurchaseOrder = () => {
  const [orderType, setorderType] = useState("");
  const [itemName, setitemName] = useState("");
  const [measuringUnit, setmeasuringUnit] = useState("");
  const [quantity, setquantity] = useState(0);
  const [description, setdescription] = useState("");
  const [supplierID, setsupplierID] = useState("");
  const [requiredDate, setrequiredDate] = useState("");
  const [allsuppliers, setAllSuppliers] = useState([]);

  useEffect(() => {
    supplierRequest.getSuppliers().then((res) => {
      console.log(res.data);
      setAllSuppliers(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    orderRequest
      .saveOrderRequest({
        orderType,
        itemName,
        measuringUnit,
        quantity,
        description,
        supplierID,
        requiredDate,
      })
      .then((res) => {
        console.log(res);
        Swal.fire(
          `Purchase Order Created Successfully!`,
          "Click Ok to continue",
          "success",
        );
        clear();
      })
      .catch((err) => {
        Swal.fire("Error!", "Something went wrong", "error");
      });
  };

  const clear = () => {
    setquantity(0);
    setdescription("");
    setsupplierID("");
    setitemName("");
    setrequiredDate("");
    setorderType("");
    setmeasuringUnit("");
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
                Purchase Order
              </h2>
              <div
                style={{ width: "600px", marginLeft: "30px", padding: "50px" }}>
                <form onSubmit={handleSubmit}>
                  <div class="flex justify-center">
                    <div class="mb-3 " style={{ width: "600px" }}>
                      <label
                        for="exampleFormControlInput1"
                        class="form-label inline-block mb-2 text-gray-700">
                        Order Type
                      </label>
                      <select
                        class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        onChange={(e) => setorderType(e.target.value)}>
                        <option selected>select</option>
                        <option value="Delivery">Delivery</option>
                        <option value="Manufacture">Manufacture</option>
                        <option value="Retail">Retail</option>
                      </select>
                    </div>
                  </div>

                  <div class="flex justify-center">
                    <div class="mb-3 " style={{ width: "600px" }}>
                      <label
                        for="exampleFormControlInput1"
                        class="form-label inline-block mb-2 text-gray-700">
                        Item Name
                      </label>
                      <input
                        type="text"
                        class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                        id="exampleFormControlInput1"
                        placeholder="Enter Item Name"
                        value={itemName}
                        onChange={(e) => setitemName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="flex justify-center">
                    <div class="mb-3 " style={{ width: "600px" }}>
                      <label
                        for="exampleFormControlInput1"
                        class="form-label inline-block mb-2 text-gray-700">
                        Measuring Unit
                      </label>
                      <select
                        class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        onChange={(e) => setmeasuringUnit(e.target.value)}>
                        <option selected>select</option>
                        <option value="Kg">Killogram(Kg)</option>
                        <option value="g">gram(g)</option>
                      </select>
                    </div>
                  </div>

                  <div class="flex justify-center">
                    <div class="mb-3 " style={{ width: "600px" }}>
                      <label
                        for="exampleFormControlInput1"
                        class="form-label inline-block mb-2 text-gray-700">
                        Qantity
                      </label>
                      <input
                        type="number"
                        class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                        id="exampleFormControlInput1"
                        placeholder="Enter Qantity"
                        value={quantity}
                        onChange={(e) => setquantity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="mb-4">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Description
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter a Description"
                      value={description}
                      onChange={(e) =>
                        setdescription(e.target.value)
                      }></textarea>
                  </div>

                  <div class="flex justify-center">
                    <div class="mb-3 " style={{ width: "600px" }}>
                      <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Supplier
                      </label>
                      <select
                        class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        onChange={(e) => setsupplierID(e.target.value)}>
                        <option selected>Open this select menu</option>
                        {!allsuppliers.length ? (
                          <option value="none">
                            No Supplier ID's Available
                          </option>
                        ) : (
                          allsuppliers.map((supplier) => (
                            <option value={supplier._id} key={supplier._id}>
                              {supplier._id}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                  </div>

                  <div class="relative">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                      Order Required Date
                    </label>
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <input
                      datepicker
                      datepicker-format="mm/dd/yyyy"
                      type="date"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date"
                      value={requiredDate}
                      onChange={(e) => setrequiredDate(e.target.value)}
                    />
                  </div>
                  <div style={{ paddingTop: "30px" }}>
                    <button
                      type="submit"
                      class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      Purchase Order
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
