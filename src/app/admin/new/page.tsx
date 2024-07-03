"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@prisma/client";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { LucideUploadCloud } from "lucide-react";
import { useFormStatus } from "react-dom";
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
const imageSchema = Yup.mixed()
  .test(
    "is-valid-image",
    "File must be an image or have zero size",
    (file: any) => file.size === 0 || file.type?.startsWith("image/")
  )
  .test("is-file", "Required", (value: any) => value instanceof File);

const ProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "عنوان محصول باید حداقل 5 کاراکتر باشد")
    .required("لطفا عنوان محصول را وارد کنید"),
  description: Yup.string()
    .min(10, "توضیحات محصول باید حداقل 10 کاراکتر باشد")
    .required("توضیحات محصول را وارد کنید"),
  price: Yup.number().required("قیمت محصول را وارد کنید"),
  discount: Yup.number().required("میزان تخفیف محصول را وارد کنید"),
  thumbnail: imageSchema
    .test((file: any) => file.size > 0)
    .required("لطفا تصویر را وارد کنید"),
});



type ContactFormInputs = TypeOf<typeof contactFormSchema>

const contactFormSchema = object({
  name: string({
    required_error: "Please enter your name",
  }),
  email: string().email("Please enter a valid email"),
  message: string().min(50).max(1000),
});
export default function ProductForm() {
  const submitHandler = async (
    values: Product,
    { resetForm }: FormikHelpers<Product>
  ) => {
    console.log(values);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-5">افزودن محصول جدید</h1>

      <Formik<ContactFormInputs>
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values) => {
          alert("Form is submitted");
          console.log("Form is submitted", values);
        }}
        validationSchema={toFormikValidationSchema(contactFormSchema)}
      >
        {(FormikState) => {
          const errors = FormikState.errors;
          return (
            <div className="card shadow">
              <Form className="card-body">
                <div className="card-title">Contact Us</div>
                <div className="d-flex justify-content-between gap-2">
                  <div className="form-group w-100">
                    <label className="form-label">
                      <span className="label-text">Your name</span>
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      className="form-control"
                    />
                    {!!errors.name && (
                      <div className="form-text text-danger">{errors.name}</div>
                    )}
                  </div>
                  <div className="form-group w-100">
                    <label className="form-label">
                      <span className="label-text">Your email</span>
                    </label>
                    <Field
                      type="text"
                      name="email"
                      placeholder="e.g johndoe@gmail.com"
                      className="form-control"
                    />
                    {!!errors.email && (
                      <div className="form-text text-danger">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-text">Your message</span>
                  </label>
                  <Field
                    as="textarea"
                    type="text"
                    name="message"
                    className="form-control h-24"
                    placeholder="Message"
                  />
                  {!!errors.message && (
                    <div className="form-text text-danger">
                      {errors.message}
                    </div>
                  )}
                </div>
                <div className="card-actions justify-content-end">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
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

{
  /* <Formik
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
                className={`peer max-h-20 block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
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
            <div className="flex gap-5 w-full h-24">
              <div className="relative w-full">
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
              <div className="relative w-full">
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
            <div className="relative h-40 bg-rose-50 dark:border-gray-700 dark:bg-gray-900 rounded-lg border-dashed border-2 border-gray-300">
              <Field
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
          )} 
           </div>
           <SubmitButton />
         </Form>
       )}
     </Formik> */
}
