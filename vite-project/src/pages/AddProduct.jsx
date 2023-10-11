import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import Swal from "sweetalert2";
import FileBase from "react-file-base64";
import productRequest from "../api/product/product.request";
import SupplierSidebar from "../components/SupplierSidebar";

const AddProduct = () => {
  const [itemName, setitemName] = useState("");
  const [title, settitle] = useState("");
  const [itemBrand, setitemBrand] = useState("");
  const [image, setimage] = useState("");
  const [availableQty, setavailableQty] = useState("");
  const [description, setdescription] = useState("");
  const [measuringUnit, setmeasuringUnit] = useState("");
  const [price, setprice] = useState(0);
  const [inStock, setinStock] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    productRequest
      .saveProduct({
        itemName,
        title,
        itemBrand,
        image,
        availableQty,
        description,
        measuringUnit,
        price,
        inStock: false,
      })
      .then((res) => {
        console.log(res);
        Swal.fire(
          `Product Added Successfully!`,
          "Click Ok to continue",
          "success",
        );
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
        <SupplierSidebar />
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
                Create Product
              </h2>
              <div
                style={{ width: "600px", marginLeft: "30px", padding: "50px" }}>
                <form onSubmit={handleSubmit}>
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
                        title
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
                        value={title}
                        onChange={(e) => settitle(e.target.value)}
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
                        ItemBrand
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
                        value={itemBrand}
                        onChange={(e) => setitemBrand(e.target.value)}
                      />
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
                        value={availableQty}
                        onChange={(e) => setavailableQty(e.target.value)}
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
                        for="exampleFormControlInput1"
                        class="form-label inline-block mb-2 text-gray-700">
                        price
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
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="w-full">
                    <div class="mb-1">
                      <label
                        for="hobby"
                        class="mb-3 block text-base font-medium text-[#07074D]">
                        Product Image
                      </label>
                      <br />
                      <FileBase
                        type="file"
                        id="img"
                        multiple={false}
                        onDone={({ base64 }) => setimage(base64)}
                        required
                      />
                      <br />
                    </div>
                  </div>

                  <div style={{ paddingTop: "30px" }}>
                    <button
                      type="submit"
                      class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      Submit
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

export default AddProduct;
