import React from "react";
import SupplierIndex from "./SupplierIndex";
import SupplierDeliveries from "./supplier-deliveries/SupplierDeliveries";
import SupplierOrders from "./supplier-orders/SupplierOrders";
import SupplierProducts from "./supplier-products/SupplierProducts";
import SupplierPayments from "./supplier-payments/SupplierPayments";
import { Route, Routes } from "react-router-dom";
import FileNotFound from "../../components/organisms/errors/fileNotFound";
import Layout from "../../components/organisms/Layout";
import SupplierForms from "./supplier-forms/SupplierForms";
import SupplierProductEdit from "./supplier-Product-edit-forms/SupplierProductEdit";
import SupplierViewOrder from "./supplier-view-order/SupplierViewOrder";
import SupplierViewDelivery from "./supplier-view-delivery/SupplierViewDelivery";

const index = () => {
  return (
    <div className="flex flex-row bg-[#F7F8FC]">
      {/* <div className="flex-[1]">
        <Sidebar data={sideNavData} />
      </div> */}

      <Layout>
        <div className="flex-[7]">
          <Routes>
            <Route path="overview" element={<SupplierIndex />} />
            <Route path="deliveries" element={<SupplierDeliveries />} />
            <Route path="orders" element={<SupplierOrders />} />
            <Route path="products" element={<SupplierProducts />} />
            <Route path="payments" element={<SupplierPayments />} />
            <Route path="add-product" element={<SupplierForms />} />
            <Route path="edit-product/:id" element={<SupplierProductEdit />} />
            <Route path="view-order/:id" element={<SupplierViewOrder />} />
            <Route path="view-delivery/:id" element={<SupplierViewDelivery />} />
            {/* <Route path="edit/:id" element={<InventoryForm />} />
          <Route path="release/request" element={<ReleaseInventoryMain />} />
          <Route
            path="release/request/form/:id"
            element={<InventoryReleaseForm />}
          />
          <Route path="/stats" element={<InventoryStats />} /> */}
            <Route path="*" element={<FileNotFound />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
};

export default index;
