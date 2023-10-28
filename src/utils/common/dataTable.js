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
  { field: "_id", headerName: "ID", width: 250 },
  { field: "username", headerName: "Customer Name", width: 180 },
  {
    field: `productName`,
    headerName: "Product Name",
    width:150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 70,
    },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 70,
  },
  {
    field: "deliveryAddress",
    headerName: "Delivery Address",
    description: "This column has a value getter and is not sortable.",
    width: 150,
  },
  {
    field: "requiredDate",
    headerName: "Required Date",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 150,
  },
];

export const deliveryColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  { field: "username", headerName: "Customer Name", width: 130 },
  {
    field: 'orderID',
    headerName: 'Order ID',
    width: 130,
  },
  {
    field: "deliveryAddress",
    headerName: "Delivery Address",
    description: "This column has a value getter and is not sortable.",

  },
  {
    field: "diliveryDate",
    headerName: "Delivery Date",
    description: "This column has a value getter and is not sortable.",
  },
  {
    field: "deliveryNote",
    headerName: "Delivery Note",
    description: "This column has a value getter and is not sortable.",
  }
]

export const userColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  { field: "username", headerName: "User Name", width: 130 },
  {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 130,
  },
  {
    field: "type",
    headerName: "Role",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 130,
  },
  {
    field: "is_active",
    headerName: "Is Active",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 130,
  },

]

export const siteColumns = [
  { field: "_id", headerName: "ID", width: 180 },
  {
    field: "address",
    headerName: "Address",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 130,
  },
  {
    field: "managerName",
    headerName: "Manager Name",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 130,
  },
  {
    field: "Allocated_budget",
    headerName: "Allocated Budget",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 130,
  },
  {
    field: "Remaining_Budget",
    headerName: "Remaining Budget",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 130,
  }
]