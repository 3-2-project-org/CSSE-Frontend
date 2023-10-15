import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../../utils/components/molecules/common-Table/Table";
import { getDataFromLocalStorage } from "../../../utils/accessLocalStorage";
import { getAllOrders } from "../../../api/order";
import { orderColumns } from "../../../utils/common/dataTable";
import ToastMessage from "../../../components/atoms/ToastMessage/ToastMessage";

const SupplierOrders = () => {
  const user = getDataFromLocalStorage("user");
  const [orders, setOrders] = useState([]);
  const [pages, setPages] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [queries, setQueries] = useState({
    page: 1,
    is_active: true,
  });

  const [params, setParams] = useState(
    `page=${queries.page}&is_active=${queries.is_active}`
  );

  const { data, isSuccess, refetch } = getAllOrders(params, user._id);

  useEffect(() => {
    setParams(
      `page=${queries.page}&is_active=${queries.is_active}`
    );
  }, [queries]);

  useEffect(() => {
    if (isSuccess && data) {
      setOrders(data.data.data);
      // setPages(data.data.data.totalPages);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    refetch(params);
  }, []);

  useEffect(() => {
    refetch(params);
  }, [params]);

  const refactorData = (data) => {
    if (data.length > 0) {
      const refactoredArray = data.map((item) => {
        return {
          _id: item._id,
          username: item.buyerID.username || "Not provided",
          productName: item.products[0].productID.name || "Not provided",
          quantity: item.products[0].quantity || "Not provided",
          amount: item.amount || "Not provided",
          deliveryAddress: item.deliveryAddress || "Not provided",
          requiredDate: item.requiredDate || "Not provided",
        }
      });

      return refactoredArray;
    } else {
      return [];
    }
    
  }
  return (
    <div className="flex relative">
      <div className="flex-[7] w-full">
        <span>All order details</span>
        {/* <div className="flex justify-end mt-5 mr-4">
          <Link to="/supplier/add-product">
            <button className="w-36 h-10 rounded-sm text-white bg-blue-600">
              Add new product
            </button>
          </Link>
        </div> */}

        <Table
          response={refactorData(orders)}
          title={"Orders"}
          dataCols={orderColumns}
          setIsOpen={setIsOpen}
        />
      </div>

      <ToastMessage
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        message={"Order deleted successfully"}
      />
    </div>
  );
};

export default SupplierOrders;
