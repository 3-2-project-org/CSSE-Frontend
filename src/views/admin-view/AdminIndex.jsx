import React, { useEffect } from "react";
import { getAllSites } from "../../api/sites";
import { getAllEmployees, getAllSuppliers, getAllUsers } from "../../api/auth";

const AdminIndex = () => {
  const [numberOfSites, setNumberOfSites] = React.useState(0);
  const [numberOfSiteManagers, setNumberOfSiteManagers] = React.useState(0);
  const [numberOfSuppliers, setNumberOfSuppliers] = React.useState(0);
  const [numberOfPeople, setNumberOfPeople] = React.useState(0);
  const { data, isSuccess } = getAllSites();
  const { data: userData, isSuccess: userIsSuccess } = getAllUsers();
  const { data: employeeData, isSuccess: employeeIsSuccess } =
    getAllEmployees();

  const { data: supplierData, isSuccess: supplierIsSuccess } =
    getAllSuppliers();
  useEffect(() => {
    if (isSuccess && data) {
      setNumberOfSites(data.data.data.data.length);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (userIsSuccess && userData) {
      console.log(userData.data.data);
      setNumberOfSiteManagers(userData.data.data.length);
    }
  }, [userData, userIsSuccess]);

  useEffect(() => {
    if (employeeIsSuccess && employeeData) {
      setNumberOfPeople(employeeData.data.data.length);
    }
  }, [employeeData, employeeIsSuccess]);

  useEffect(() => {
    if (supplierIsSuccess && supplierData) {
      console.log(supplierData.data.data);
      setNumberOfSuppliers(supplierData.data.data.length);
    }
  }, [supplierData, supplierIsSuccess]);
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Sites</h1>
            <h1 className="text-2xl font-bold">{numberOfSites}</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Site Managers</h1>
            <h1 className="text-2xl font-bold">{numberOfSiteManagers}</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">Suppliers</h1>
            <h1 className="text-2xl font-bold">{numberOfSuppliers}</h1>
          </div>
        </div>

        <div className="w-64 h-36  m-5 rounded-3xl border-gray-400 shadow-lg transition-all ease-in-out duration-150 hover:border-2 hover:border-blue-500">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-lg font-medium text-gray-400">People</h1>
            <h1 className="text-2xl font-bold">{numberOfPeople}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
