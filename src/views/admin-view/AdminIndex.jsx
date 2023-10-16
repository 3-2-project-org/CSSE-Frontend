import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";

const AdminIndex = () => {
  return (
    <div>
     
      <div className="flex flex-wrap">
        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Sites</h1>
            <h1 className="text-2xl font-bold">100</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Site Managers</h1>
            <h1 className="text-2xl font-bold">100</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Suppliers</h1>
            <h1 className="text-2xl font-bold">100</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">People</h1>
            <h1 className="text-2xl font-bold">100</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
