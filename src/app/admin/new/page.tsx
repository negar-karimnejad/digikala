"use client";

import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { LucideUploadCloud } from "lucide-react";
import { useFormStatus } from "react-dom";
import { TypeOf, z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { addProduct } from "../_actions/products";

const initialValues: ProductFormInputs = {
  title: "",
  description: "",
  price: 0,
  discount: 0,
  thumbnail: null as unknown as File,
};

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

const ProductSchema = z.object({
  title: z
    .string({ required_error: "لطفا عنوان محصول را وارد کنید" })
    .min(5, { message: "عنوان محصول باید حداقل 5 کاراکتر باشد" }),
  description: z
    .string({ required_error: "توضیحات محصول را وارد کنید" })
    .min(10, { message: "توضیحات محصول باید حداقل 10 کاراکتر باشد" }),
  price: z
    .number({ required_error: "قیمت محصول را وارد کنید" })
    .refine((val) => val >= 0, { message: "قیمت نمی تواند عدد منفی باشد" }),

  discount: z
    .number({ required_error: "میزان تخفیف محصول را وارد کنید" })
    .refine((val) => val >= 0, { message: "تخفیف نمی تواند عدد منفی باشد" }),
  thumbnail: imageSchema.refine((file) => file.size > 0, "Required"),
});

export type ProductFormInputs = TypeOf<typeof ProductSchema>;

export default function ProductForm() {
  const submitHandler = async (
    values: ProductFormInputs,
    { resetForm }: FormikHelpers<ProductFormInputs>
  ) => {
    console.log("values🎂", values);

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("price", values.price.toString());
    formData.append("discount", values.discount.toString());
    formData.append("thumbnail", values.thumbnail);

    await addProduct(formData);
    resetForm();
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-5">افزودن محصول جدید</h1>
      <Formik<ProductFormInputs>
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(ProductSchema)}
        onSubmit={submitHandler}
      >
        {(FormikState) => {
          const errors = FormikState.errors;
          return (
            <Form>
              <div className="h-20 relative">
                <Field
                  type="text"
                  id="title"
                  name="title"
                  placeholder=""
                  className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
                    errors.title ? "error-input border-b-2 border-red-500" : ""
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
                  className={`peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
                    errors.description
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
              <div className="flex gap-5 w-full h-24">
                <div className="relative w-full">
                  <Field
                    type="number"
                    id="price"
                    name="price"
                    placeholder=""
                    className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
                      errors.price
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
                <div className="relative w-full">
                  <Field
                    type="number"
                    id="discount"
                    name="discount"
                    placeholder=""
                    className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
                      errors.discount
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
              <div className="relative h-40 bg-rose-50 dark:border-gray-700 dark:bg-gray-900 rounded-lg border-dashed border-2 border-gray-300">
                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  // required={product == null}
                  onChange={(event) => {
                    const files = event.currentTarget.files;
                    if (files && files[0]) {
                      FormikState.setFieldValue("thumbnail", files[0]);
                    }
                  }}
                  className={`opacity-0 h-full w-full bg-transparent border-0 ${
                    errors.thumbnail
                      ? "error-input border-b-2 border-red-500"
                      : ""
                  }`}
                />
                <ErrorMessage
                  name="thumbnail"
                  component="div"
                  className="text-[11px] text-red-500"
                />
                <div className="flex -mt-32 items-center justify-center flex-col gap-2">
                  <LucideUploadCloud size={35} className="text-rose-600" />
                  <p className="font-medium text-gray-400">
                    تصویر محصول را آپلود کنید
                  </p>
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
              <SubmitButton />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="my-5 w-full text-lg font-medium"
      disabled={pending}
    >
      <div className="flex items-center justify-center gap-2">
        <span>{pending ? "در حال افزودن..." : "افزودن محصول"}</span>
        {pending && (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-dotted border-gray-800"></div>
        )}
      </div>
    </Button>
  );
};
