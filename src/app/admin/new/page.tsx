import { Product } from "@prisma/client";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

const initialValues: Product = {
  id: "",
  title: "",
  price: 2,
  description: "",
  thumbnail: "",
  images: "",
  discount: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
  orderId: null,
  rating: 2,
};

const ProductSchema = Yup.object().shape({
  title: Yup.string().min(5, "عنوان محصول باید حداقل 5 کاراکتر باشد"),
});

export default function NewProduct() {
  const submitHandler = async (
    values: Product,
    { resetForm }: FormikHelpers<Product>
  ) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="relative h-20 w-full">
              <Field
                type="text"
                id="title"
                name="title"
                placeholder=""
                // disabled={isLoading}
                className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
                  touched.title && errors.title
                    ? "error-input border-b-2 border-red-500"
                    : ""
                }`}
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-[11px] text-error"
              />
              <label
                htmlFor="title"
                className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                نام محصول
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
