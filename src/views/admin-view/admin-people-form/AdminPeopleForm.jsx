import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { productSchema } from "../../../utils/validations/productsValidations";
import storage from "../../../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createProduct } from "../../../api/product";
import { useNavigate } from "react-router-dom";

const SupplierForms = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState();

  const {mutate, data, isSuccess} = createProduct();

  const initialValues = {
    name: "",
    description: "",
    price: "",
    inStock: "",
    image: "",
  };

  const onSubmit = async (values) => {
    console.log("submit", values);
    if (values.image !== "") {
      await handleUpload(values.image);
    }
    mutate({
      ...values,
      image: files,
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: productSchema,
    validateOnChange: true,
  });

  const { values, errors, handleChange, handleSubmit } = formik;

  useEffect(() => {
    if (isSuccess) {
      alert("Product added successfully");
      navigate("/supplier/products");
    }
  }, [data, isSuccess]);

  const handleUpload = async (image) => {
    if (!image) alert("Please select an image to upload");
    else {
      const storageRef = ref(storage, `/files/${image.path}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            formik.setFieldValue("image", url);
            setFiles(url)
          });
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="text-2xl font-bold">Add Products</span>
      <div className="flex flex-col mt-16 w-[1000px]">
        <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col">
          <span className="text-xl font-semibold">Product name</span>
          <input
            type="text"
            name="name"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.name}
          />
          {
            <span className="text-red-500">
              {errors.name ? errors.name : ""}
            </span>
          }
        </div>

        <div className="w-full bg-white shadow-lg rounded-lg p-6 flex flex-col mt-10">
          <span className="text-xl font-semibold">Product Description</span>
          <input
            type="text"
            name="description"
            className="border-2 border-gray-300 p-2 rounded-md mt-2"
            onChange={handleChange}
            value={values.description}
          />
          {
            <span className="text-red-500">
              {errors.description ? errors.description : ""}
            </span>
          }
        </div>

        <div className="w-full   flex flex-row mt-10">
          <div className="flex flex-col flex-1 mx-2 p-6 bg-white shadow-lg rounded-lg">
            <span className="text-xl font-semibold">Unit price</span>
            <input
              type="number"
              name="price"
              className="border-2 border-gray-300 p-2 rounded-md mt-2"
              onChange={handleChange}
              value={values.price}
            />
            {
              <span className="text-red-500">
                {errors.price ? errors.price : ""}
              </span>
            }
          </div>

          <div className="flex flex-col flex-1 mx-2 p-6 bg-white shadow-lg rounded-lg">
            <span className="text-xl font-semibold">Item count</span>
            <input
              type="number"
              name="inStock"
              className="border-2 border-gray-300 p-2 rounded-md mt-2"
              onChange={handleChange}
              value={values.inStock}
            />
            {
              <span className="text-red-500">
                {errors.inStock ? errors.inStock : ""}
              </span>
            }
          </div>
        </div>

        <div className="w-full flex flex-col mt-10 bg-white p-6">
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
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="w-64 h-10 rounded-sm text-white bg-blue-600 mt-10"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default SupplierForms;
