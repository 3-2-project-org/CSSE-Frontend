import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  name: Yup.string().required("Product name is required"),
  price: Yup.number().required("Product price is required"),
  description: Yup.string().required("Product description is required"),
  image: Yup.mixed().notRequired(),
  inStock: Yup.number().required("Product stock is required"),
});
