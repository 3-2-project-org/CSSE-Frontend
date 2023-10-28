import { useFormik } from "formik";
import React, { useEffect } from "react";
import { registerUser } from "../../../api/auth";
import { useNavigate } from "react-router-dom";

const AddNewUser = () => {
  const { mutate, isSuccess } = registerUser();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    type: "",
    phonenumber: "",
    address: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      mutate({
        ...values,
      });
    },
  });

  useEffect(() => {
    if (isSuccess) {
        alert("User added successfully");
        navigate("/admin/people");
    }
    }, [isSuccess]);

  const { values, errors, handleChange, handleSubmit } = formik;
  return (
    <form onSubmit={handleSubmit}>
      <span className="text-2xl font-bold">Add User</span>
      <div className="flex flex-col mt-16 w-[1000px]">
        <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col">
          <span className="text-xl font-semibold">Username</span>
          <input
            type="text"
            name="username"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.username}
          />
          {
            <span className="text-red-500">
              {errors.username ? errors.username : ""}
            </span>
          }
        </div>

        <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col mt-10">
          <span className="text-xl font-semibold">Email</span>
          <input
            type="text"
            name="email"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.email}
          />
          {
            <span className="text-red-500">
              {errors.email ? errors.email : ""}
            </span>
          }
        </div>

        <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col mt-10">
          <span className="text-xl font-semibold">Address</span>
          <input
            type="text"
            name="address"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.address}
          />
          {
            <span className="text-red-500">
              {errors.email ? errors.email : ""}
            </span>
          }
        </div>

        <div className="w-full bg-white shadow-lg gap-2 rounded-lg p-6 flex flex-row mt-10">
          <div className="flex-1 w-full flex-col flex">
            <span className="text-xl font-semibold">Phone number</span>
            <input
              type="text"
              name="phonenumber"
              className="border-2 border-gray-300 p-2 rounded-md mt-2"
              onChange={handleChange}
              value={values.phonenumber}
            />
          </div>
          <div className="flex-1 w-full flex-col flex">
            <span className="text-xl font-semibold">Role</span>
            <select
              className="border-2 border-gray-300 p-2 rounded-md mt-2"
              name="type"
              onSelect={(e) => {
                console.log(e.target.value);
                formik.setFieldValue("type", e.target.value);
              }}
              onChange={handleChange}
            >
              <option value="site manager">Site manager</option>
              <option value="supplier">Supplier</option>
              <option value="sales manager">Sales manager</option>
            </select>
          </div>
        </div>

        {/* <div className="w-full flex flex-col mt-10 bg-white p-6">
          <span className="text-xl font-semibold">Product image</span>
          <Dropzone
            onDrop={(files) => {
              setFiles(files[0]);
              formik.setFieldValue("image", files[0]);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div className="container  h-40">
                <div
                  className=" bg-blue-300 h-40"
                  {...getRootProps({
                    className: "dropzone",
                    onDrop: (event) => event.stopPropagation(),
                  })}
                >
                  <input {...getInputProps()} />
                  <div>
                    <div className="h-40 border-dashed border-2 flex text-center justify-center items-center">
                      <p className="text-base">
                        {values.image !== ""
                          ? values.image.path
                          : "Drag 'n' drop some files here, or click to select files"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Dropzone>
        </div> */}
      </div>

      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="w-64 h-10 rounded-sm text-white bg-blue-600 mt-10"
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddNewUser;
