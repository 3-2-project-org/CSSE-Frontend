import { CloseOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { creteDelivery } from "../../../api/delivery";

const DeliveryPrompt = ({
  showDeliverPrompt,
  setShowDeliverPrompt,
  orderId,
  deliveryAddress,
  diliveryDate,
  buyer,
}) => {
  const [deliveryNote, setDeliveryNote] = useState("");

  const [diliveryAddress, setDiliveryAddress] = useState(deliveryAddress || "");
  const {mutate, isSuccess} = creteDelivery();
  const handleDeliver = () => {
    const data = {
        order: orderId,
        diliveryDate: diliveryDate,
        buyer: buyer,
        diliveryAddress: diliveryAddress,
        deliveryNote: deliveryNote,
    }
    mutate(data);
  }

  useEffect(() => {
    if (isSuccess) {
      alert("Order delivered successfully");
      setShowDeliverPrompt(false);
    }
  }, [isSuccess]);
  return (
    <div className="shadow-2xl mt-32 h-auto w-auto p-7 bg-white rounded-xl ">
      <div className="flex justify-between">
        <span className="text-2xl font-bold">Deliver the order</span>
        <CloseOutlined
          sx={{
            top: "30px",
            right: "30px",
            cursor: "pointer",
          }}
          onClick={() => setShowDeliverPrompt(false)}
        />
      </div>

      <div className="w-[600px] flex flex-col mt-10">
        <div className="w-full justify-between flex">
          <span className="text-xl font-semibold">Order Id:</span>
          <input
            type="text"
            contentEditable={false}
            value={orderId}
            className="ml-4 border-2 px-2 w-2/3"
          />
        </div>

        <div className="w-full justify-between flex mt-2">
          <span className="text-xl font-semibold">Delivery Address:</span>
          <input
            type="text"
            contentEditable={false}
            value={diliveryAddress}
            className="ml-4 border-2 px-2 w-2/3"
            onChange={(e) => setDiliveryAddress(e.target.value)}
          />
        </div>

        <div className="w-full justify-between flex mt-2">
          <span className="text-xl font-semibold">Delivery Note:</span>
          <input
            type="text"
            value={deliveryNote}
            onChange={(e) => setDeliveryNote(e.target.value)}
            className="ml-4 border-2 px-2 w-2/3"
          />
        </div>
        <button type="submit" className="mt-10 bg-blue-200 py-5 text-blue-600" onClick={handleDeliver}>
          Deliver
        </button>
      </div>
    </div>
  );
};

export default DeliveryPrompt;
