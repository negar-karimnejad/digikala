"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@prisma/client";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import {
  DownloadCloud,
  LucideUploadCloud,
  UploadCloud,
  UploadCloudIcon,
} from "lucide-react";
import * as Yup from "yup";

const initialValues: Product = {
  id: "",
  title: "",
  price: 0 || null,
  description: "",
  thumbnail: "",
  images: "",
  discount: 0 || null,
  createdAt: new Date(),
  updatedAt: new Date(),
  orderId: null,
  rating: 0,
};

const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "عنوان محصول باید حداقل 5 کاراکتر باشد")
    .required("لطفا عنوان محصول را وارد کنید"),
  description: Yup.string()
    .min(10, "توضیحات محصول باید حداقل 10 کاراکتر باشد")
    .required("توضیحات محصول را وارد کنید"),
  price: Yup.number().required("قیمت محصول را وارد کنید"),
  discount: Yup.number().required("میزان تخفیف محصول را وارد کنید"),
  thumbnail: Yup.string().required("تصویر محصول را وارد کنید"),
});

export default function NewProduct() {
  const submitHandler = async (
    values: Product,
    { resetForm }: FormikHelpers<Product>
  ) => {
    console.log(values);
  };

  const isLoading = false;
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-5">افزودن محصول جدید</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="h-20 relative">
              <Field
                type="text"
                id="title"
                name="title"
                placeholder=""
                className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
                  touched.title && errors.title
                    ? "error-input border-b-2 border-red-500"
                    : ""
                }`}
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-[11px] text-red-500"
              />
              <label
                htmlFor="title"
                className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                نام محصول
              </label>
            </div>
            <div className="h-24 relative">
              <Field
                type="text"
                id="description"
                name="description"
                as="textarea"
                placeholder=""
                className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
                  touched.description && errors.description
                    ? "error-input border-b-2 border-red-500"
                    : ""
                }`}
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-[11px] text-red-500"
              />
              <label
                htmlFor="description"
                className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                معرفی محصول
              </label>
            </div>
            <div className="flex gap-5 w-full">
              <div className="h-20 relative w-full">
                <Field
                  type="number"
                  id="price"
                  name="price"
                  placeholder=""
                  className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
                    touched.price && errors.price
                      ? "error-input border-b-2 border-red-500"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-[11px] text-red-500"
                />
                <label
                  htmlFor="price"
                  className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  قیمت محصول
                </label>
              </div>
              <div className="h-20 relative w-full">
                <Field
                  type="number"
                  id="discount"
                  name="discount"
                  placeholder=""
                  className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
                    touched.discount && errors.discount
                      ? "error-input border-b-2 border-red-500"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="discount"
                  component="div"
                  className="text-[11px] text-red-500"
                />
                <label
                  htmlFor="discount"
                  className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  میزان تخفیف
                </label>
              </div>
            </div>
            <div className="relative h-40 bg-blue-50 rounded-lg border-dashed border-2 border-gray-300">
              <Input
                type="file"
                id="thumbnail"
                name="thumbnail"
                // required={product == null}

                className={`opacity-0 h-full w-full bg-transparent border-0 ${
                  touched.thumbnail && errors.thumbnail
                    ? "error-input border-b-2 border-red-500"
                    : ""
                }`}
              />
              <ErrorMessage
                name="thumbnail"
                component="div"
                className="text-[11px] text-red-500"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 m-auto flex items-center justify-center flex-col gap-2">
                <LucideUploadCloud size={35} className="text-blue-600" />
                <p className="font-bold text-gray-400">تصویر محصول را آپلود کنید</p>
              </div>
              {/* {product != null && (
             <Image
              src={product.imagePath}
              height="400"
              width="400"
              alt="Product Image"
            />
          )} */}
            </div>
            <Button
              className="my-5 w-full text-lg font-bold"
              // disabled={isLoading}
            >
              <div className="flex items-center justify-center gap-2">
                <span>{isLoading ? "در حال افزودن..." : "افزودن محصول"}</span>
                {isLoading && (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-gray-800"></div>
                )}
              </div>
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
