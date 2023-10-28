import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOrderById } from "../../../api/order";
import DeliveryPrompt from "../delivery-prompt/DeliveryPrompt";
import { getDeliveryById } from "../../../api/delivery";

const SupplierViewDelivery = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [showDeliverPrompt, setShowDeliverPrompt] = useState(false);
  const { data, isSuccess } = getDeliveryById(id);
  const [order, setOrder] = useState({
    buyer: {
      _id: "",
      username: "",
      email: "",
    },
    deliveryAddress: "",
    diliveryDate: "",
    deliveryNote: "",
    _id: "",
    order: {
      _id: "",
      products: [
        {
          productID: "",
          quantity: "",
        },
      ],
      amount: "",
      status: "",
    },
  });

  useEffect(() => {
    if (isSuccess && data) {
      setOrder(data.data.data);
    }
  }, [data, isSuccess]);
  console.log(order);
  return (
    <div className="flex p-28 relative">
      <div className="flex flex-col bg-white shadow-2xl w-full h-full p-10 rounded-2xl">
        <div className="">
          <span className="text-3xl font-bold">Delivery: {order?._id}</span>
        </div>

        {/* <div className="mt-4">
          <span className="text-2xl font-bold">Total:</span>{" "}
          <span className="text-2xl font-semibold"> Rs: {order?.amount}</span>
        </div> */}

        <div className="mt-10">
          <span className="text-xl font-bold">Buyer:</span>{" "}
          <span className="text-xl font-semibold">{order.buyer.username}</span>
        </div>
        <div>
          <span className="text-xl font-bold">Email:</span>{" "}
          <span className="text-xl font-semibold">{order.buyer.email}</span>
        </div>

        <div className="mt-10">
          <div>
            <span className="text-xl font-bold">Delivery address:</span>{" "}
            <span className="text-xl font-semibold">
              {order.diliveryAddress || "Not Provided"}
            </span>
          </div>
          <div>
            <span className="text-xl font-bold">Delivery address:</span>{" "}
            <span className="text-xl font-semibold">
              {order.deliveryNote || "Not Provided"}
            </span>
          </div>
        </div>

        <div className="mt-10">
          <div>
            <span className="text-xl font-bold">Product Details:</span>{" "}
            <span className="text-xl font-semibold">
              {order?.order?.products[0]?.productID || "Not Provided"}
            </span>
          </div>
          <div>
            <span className="text-xl font-bold">Quantity:</span>{" "}
            <span className="text-xl font-semibold">
              {order?.order?.products[0]?.quantity || "Not Provided"}
            </span>
            <span className="text-xl font-bold ml-10">InStock:</span>{" "}
            <span className="text-xl font-semibold ">
              {/* {order?.products[0]?.productID?.inStock || "Not Provided"} */}
            </span>
          </div>
        </div>
        <div>
          <span className="text-xl font-bold">Required Date:</span>{" "}
          <span className="text-xl font-semibold">
            {order?.order?.requiredDate?.slice(0, 10) || "Not Provided"}
          </span>
        </div>
        <div className="mt-6">
          <span className="text-xl font-bold">Status:</span>{" "}
          <span
            className={`${
              order?.order?.status === "Pending"
                ? "bg-yellow-100 text-yellow-500"
                : order?.status === "Delivered"
                ? "bg-green-100 text-green-500"
                : "bg-red-100 text-red-500"
            } text-xl font-semibold p-2 rounded-lg `}
          >
            {order?.order?.status}
          </span>
        </div>

        {/* <div className="flex mt-10">
          <div
            className="px-4 py-2 mr-4 bg-blue-200 text-blue-600 rounded-md cursor-pointer"
            onClick={() => {
              setShowDeliverPrompt(true);
            }}
          >
            Deliver order
          </div>
          <div
            className="px-4 py-2 rounded-md bg-red-200 text-red-600 cursor-pointer"
            onClick={() => {}}
          >
            Cancel order
          </div>
        </div> */}
      </div>
      {/* <div className="backdrop-blur-lg absolute top-28 bottom-0">
        {showDeliverPrompt && (
          <DeliveryPrompt
            buyer={order.buyerID._id}
            deliveryAddress={order.deliveryAddress}
            diliveryDate={order.requiredDate}
            orderId={order._id}
            setShowDeliverPrompt={setShowDeliverPrompt}
            showDeliverPrompt={showDeliverPrompt}
          />
        )}
      </div> */}
    </div>
  );
};

export default SupplierViewDelivery;
