export const productColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  { field: "name", headerName: "Product Name", width: 130 },
  { field: "description", headerName: "Description", width: 130 },
  {
    field: "inStock",
    headerName: "Quantity Remain",
    type: "number",
    width: 50,
  },
  {
    field: "createdAt",
    headerName: "Received Date",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "is_active",
    headerName: "Is Active",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 50,
  },
];

export const orderColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  { field: "username", headerName: "Customer Name", width: 130 },
  {
    field: `productName`,
    headerName: "Product Name",
    width: 130,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 50,
    },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 50,
  },
  {
    field: "deliveryAddress",
    headerName: "Delivery Address",
    description: "This column has a value getter and is not sortable.",
  },
  {
    field: "requiredDate",
    headerName: "Required Date",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
  },
];
