import React, { useEffect, useState } from 'react'
import { getProductCount } from '../../api/product'
import { getAllOrders } from '../../api/order'
import { getDataFromLocalStorage } from '../../utils/accessLocalStorage';
import { getAllDeliveries } from '../../api/delivery';
import SupplierOrders from './supplier-orders/SupplierOrders';

const SupplierIndex = () => {
  const user = getDataFromLocalStorage("user");
  const [activeProducts, setActiveProducts] = useState(0)
  const [activeOrders, setActiveOrders] = useState(0)
  const [activeDeliveries, setActiveDeliveries] = useState(0)
  const [queries, setQueries] = useState({
    page: 1,
    is_active: true,
  });
  const [params, setParams] = useState(
    `page=${queries.page}&is_active=${queries.is_active}`
  );
  const {data, isSuccess} = getProductCount()
  useEffect(() => {
    if (isSuccess) {
      setActiveProducts(data.data.data)
    }
  }, [data, isSuccess])

  const {data: ordersData, isSuccess: ordersSuccrs} =getAllOrders(params, user._id);

  useEffect(() => {
    if (ordersSuccrs) {
      setActiveOrders(ordersData.data.data.length)
    }
  }, [ordersData, ordersSuccrs])

  const { data: deliveryData, isSuccess:deliverySuccess } = getAllDeliveries();

  useEffect(() => {
    if (deliverySuccess) {
      setActiveDeliveries(deliveryData.data.data.length)
    }
  }, [deliveryData, deliverySuccess])
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Active Products</h1>
            <h1 className="text-2xl font-bold">{activeProducts}</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Total Orders Received</h1>
            <h1 className="text-2xl font-bold">{activeOrders}</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Orders Supplied</h1>
            <h1 className="text-2xl font-bold">{activeDeliveries}</h1>
          </div>
        </div>

        {/* <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Pending Orders</h1>
            <h1 className="text-2xl font-bold">100</h1>
          </div>
        </div> */}
      </div>

      <SupplierOrders />
    </div>
  )
}

export default SupplierIndex