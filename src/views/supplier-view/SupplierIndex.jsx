import React from 'react'

const SupplierIndex = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Active Products</h1>
            <h1 className="text-2xl font-bold">100</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Total Orders Received</h1>
            <h1 className="text-2xl font-bold">100</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Orders Supplied</h1>
            <h1 className="text-2xl font-bold">100</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Pending Orders</h1>
            <h1 className="text-2xl font-bold">100</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupplierIndex