import { useFormik } from "formik";
import React, { useEffect } from "react";
import { createSite } from "../../../api/sites";
import { useNavigate } from "react-router-dom";

const AddSite = () => {
  const navigate = useNavigate();
  const { mutate, isSuccess } = createSite();
  const initialValues = {
    Address: "",
    Manager: "",
    phone: "",
    Allocated_budget: "",
    Remaining_Budget: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      mutate(values);
    },
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  useEffect(() => {
    if (isSuccess) {
      alert("Site added successfully");
      navigate("/admin/sites");
    }
  }, [isSuccess]);
  return (
    <form onSubmit={handleSubmit}>
      <span className="text-2xl font-bold">Add Site</span>
      <div className="flex flex-col mt-16 w-[1000px]">
        <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col">
          <span className="text-xl font-semibold">Site Location</span>
          <input
            type="text"
            name="Address"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.Address}
          />
          {
            <span className="text-red-500">
              {errors.Address ? errors.Address : ""}
            </span>
          }
        </div>

        <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col mt-10">
          <span className="text-xl font-semibold">Contact number </span>
          <input
            type="text"
            name="phone"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.phone}
          />
          {
            <span className="text-red-500">
              {errors.phone ? errors.phone : ""}
            </span>
          }
        </div>

        {/* <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col mt-10">
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
        </div> */}

        <div className="w-full bg-white shadow-lg gap-2 rounded-lg p-6 flex flex-row mt-10">
          <div className="flex-1 w-full flex-col flex">
            <span className="text-xl font-semibold">Allocated budget</span>
            <input
              type="number"
              name="Allocated_budget"
              className="border-2 border-gray-300 p-2 rounded-md mt-2"
              onChange={handleChange}
              value={values.Allocated_budget}
            />
          </div>
          <div className="flex-1 w-full flex-col flex">
            <span className="text-xl font-semibold">Manager</span>
            <select
              className="border-2 border-gray-300 p-2 rounded-md mt-2"
              name="Manager"
              onSelect={(e) => {
                formik.setFieldValue("Manager", e.target.value);
              }}
              onChange={handleChange}
            >
              <option value="6525afdf630e4a2aa363542e">
                Tuan Fazid Manager
              </option>
              <option value="652c8edae89d62d028e93815">Csse Manager</option>
              <option value="653d36e773f79e28f148ca0b">Thushan Withana</option>
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
          Add Site
        </button>
      </div>
    </form>
  );
};

export default AddSite;
