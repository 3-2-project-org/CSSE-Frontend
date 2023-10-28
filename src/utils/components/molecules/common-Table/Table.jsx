import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../../../api/product";
import { deleteDelivery } from "../../../../api/delivery";

const Table = ({ response, title, dataCols, setIsOpen }) => {
  const { mutate, isSuccess, isError } = deleteProduct();
  const {
    mutate: deliveryMutate,
    isSuccess: dekiverySuccess,
    isError: deliveryError,
  } = deleteDelivery();
  const handleDelete = (id) => {
    if (title === "Products") {
      mutate(id);
    } else if (title === "Deliveries") {
      deliveryMutate(id);
    }
  };

  useEffect(() => {
    if (isError) {
      alert("Something went wrong");
    }
    if (isSuccess) {
      alert("Product deleted successfully");
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (deliveryError) {
      alert("Something went wrong");
    }
    if (dekiverySuccess) {
      alert("Delivery deleted successfully");
    }
  }, [dekiverySuccess, deliveryError]);
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={
                title === "Products"
                  ? "/supplier/edit-product/" + params.row._id
                  : title === "Deliveries"
                  ? "/supplier/view-delivery/" + params.row._id
                  : title === "Orders"
                  ? "/supplier/view-order/" + params.row._id
                  : title === "Sites"
                  ? "/admin/editSite/" + params.row._id
                  : "/admin/edit/" + params.row._id
              }
            >
              <button className="w-20 h-7 mr-3 border bg-primary border-blue-600 text-blue-600">
                {title === "Orders" || title === "Deliveries" ? "View" : "Edit"}
              </button>
            </Link>

            <button
              onClick={() => handleDelete(params.row._id)}
              className="w-20 h-7 mr-3 border border-[#D31616] text-[#D31616]"
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className="ml-5 mt-5 shadow-lg mr-4">
      {title}
      <div style={{ height: "auto", width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={response}
          columns={dataCols.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[5]}
          onRowClick={(row) => {}}
        />
      </div>
    </div>
  );
};

export default Table;
