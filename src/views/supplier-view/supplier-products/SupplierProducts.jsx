import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../api/product";
import { getDataFromLocalStorage } from "../../../utils/accessLocalStorage";
import Table from "../../../utils/components/molecules/common-Table/Table";
import { productColumns } from "../../../utils/common/dataTable";
import { Link } from "react-router-dom";
import ToastMessage from "../../../components/atoms/ToastMessage/ToastMessage";

const SupplierProducts = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const [queries, setQueries] = useState({
    page: 1,
    sellerId: getDataFromLocalStorage("user")._id,
    is_active: true,
  });

  const [params, setParams] = useState(
    `page=${queries.page}&sellerId=${queries.sellerId}&is_active=${queries.is_active}`
  );

  useEffect(() => {
    setParams(
      `page=${queries.page}&sellerId=${queries.sellerId}&is_active=${queries.is_active}`
    );
  }, [queries]);

  const { isSuccess, data, remove, isFetching, refetch } =
    getAllProducts(params);
  useEffect(() => {
    if (isSuccess) {
      setProducts(data.data.data.data);
      setPages(data.data.data.totalPages);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    refetch(params);
  }, []);

  useEffect(() => {
    refetch(params);
  }, [params]);

  return (
    <div className="flex relative">
      <div className="flex-[7] w-full">
        <div className="flex justify-end mt-5 mr-4">
          <Link to="/supplier/add-product">
            <button className="w-36 h-10 rounded-sm text-white bg-blue-600">
              Add new product
            </button>
          </Link>
        </div>

        <Table
          response={products}
          title={"Products"}
          dataCols={productColumns}
          setIsOpen={setIsOpen}
        />
      </div>

      <ToastMessage
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        message={"Product deleted successfully"}
      />
    </div>
  );
};

export default SupplierProducts;
