import React from 'react'
import SupplierIndex from './SupplierIndex'
import SupplierDeliveries from './supplier-deliveries/SupplierDeliveries'
import SupplierOrders from './supplier-orders/SupplierOrders'
import SupplierProducts from './supplier-products/SupplierProducts'
import SupplierPayments from './supplier-payments/SupplierPayments'
import { Route, Routes } from 'react-router-dom'
import FileNotFound from '../../components/organisms/errors/fileNotFound'

const index = () => {
  return (
    <div className="flex flex-row">
      {/* <div className="flex-[1]">
        <Sidebar data={sideNavData} />
      </div> */}

      <div className="flex-[7]">
        <Routes>
          <Route path="overview" element={<SupplierIndex />} />
          <Route path="deliveries" element={<SupplierDeliveries />} />
          <Route path="orders" element={<SupplierOrders />} />
          <Route path="products" element={<SupplierProducts />} />
          <Route path="payments" element={<SupplierPayments />} />
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
    </div>
  )
}

export default index