import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cover from "../assets/images/supply.jpg";
import Swal from "sweetalert2";
import AddDeliveryAdvice from "../components/models/AddDeliveryAdvice";
import UpdateDeliveryAdvice from "../components/models/UpdateDeliveryAdvice";
import userRequest from "../api/User/user.request";
import UpdateUser from "../components/models/updateUser";
import AdminSidebar from "../components/AdminSidebar";

const Users = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    userRequest.getAllUsers().then((res) => {
      console.log(res.data);
      setusers(res.data);
    });
  }, []);

  const fetchUsers = () => {
    userRequest.getAllUsers().then((res) => {
      console.log(res.data);
      setusers(res.data);
    });
  };

  const deleteUser = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: `Please confirm whether you intend to delete this Order`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    })
      .then((res) => {
        if (res.value) {
          userRequest
            .deleteUser(id)
            .then((res) => {
              fetchUsers();
            })
            .catch((err) => {
              console.log(err.message);
              const msgText = err.message.split("Error: ")[1];
              Swal.fire("Error!", msgText, "error");
            });
        }
      })
      .catch((err) => {
        console.log(err.message);
        const msgText = err.message.split("Error: ")[1];
        Swal.fire("Error!", msgText, "error");
      });
  };
  return (
    <div>
      <div class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Header />
        <AdminSidebar />
        <div
          class="h-full   pt-14 pb-14 md:ml-64"
          style={{
            backgroundImage: `url(${Cover})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "1200px",
          }}>
          <div
            class="flex justify-center"
            style={{ marginRight: "40px", display: "grid" }}>
            <br />
            <br />
            <div class="overflow-x-auto ml-10">
              <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                  <table class="min-w-max w-full table-auto">
                    <thead>
                      <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th class="py-3 px-6 text-left">Name</th>
                        <th class="py-3 px-6 text-left">Email</th>
                        <th class="py-3 px-6 text-center">Mobile</th>
                        <th class="py-3 px-6 text-center">Department</th>
                        <th
                          class="py-3 px-6 text-center"
                          style={{ width: "300px" }}>
                          Role
                        </th>
                        <th class="py-3 px-6 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                      {!users.length ? (
                        <div>
                          <div>
                            <h4>No Medical Details Added !</h4>
                            <p>No Medical Details Were Found.</p>
                          </div>
                        </div>
                      ) : (
                        users.map((user) => (
                          <tr
                            class="border-b border-gray-200 hover:bg-gray-100"
                            key={user._id}>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">{user.name}</span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">{user.email}</span>
                              </div>
                            </td>

                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">{user.mobile}</span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">
                                  {user.department}
                                </span>
                              </div>
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="mr-2"></div>
                                <span class="font-medium">{user.role}</span>
                              </div>
                            </td>
                            <td class="py-3 px-6">
                              <div class="flex item-center justify-center">
                                <UpdateUser user={user} />

                                <div
                                  class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                                  onClick={() => deleteUser(user._id)}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
