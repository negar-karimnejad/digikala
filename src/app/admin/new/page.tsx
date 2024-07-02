"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@prisma/client";
import {
  ErrorMessage,
  Form,
  Formik,
  FormikErrors,
  FormikHelpers,
  FormikTouched,
} from "formik";
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
      <h1>افزودن محصول جدید</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={ProductSchema}
        onSubmit={submitHandler}
      >
        {({ errors, touched }) => (
          <Form>
            <FormInput
              errors={errors}
              touched={touched}
              value="title"
              label="نام محصول"
            />
            <FormInput
              errors={errors}
              touched={touched}
              value="price"
              label="قیمت محصول"
              type="number"
            />
            <FormInput
              errors={errors}
              touched={touched}
              value="discount"
              label="میزان تخفیف"
              type="number"
            />
            <FormInput
              errors={errors}
              touched={touched}
              value="description"
              label="معرفی محصول"
            />
            <div className="relative h-20 w-full">
              <Input
                type="file"
                id="thumbnail"
                name="thumbnail"
                // required={product == null}

                className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
                  touched.thumbnail && errors.thumbnail
                    ? "error-input border-b-2 border-red-500"
                    : ""
                }`}
              />
              <ErrorMessage
                name="thumbnail"
                component="div"
                className="text-[11px] text-error"
              />
              <Label
                htmlFor="thumbnail"
                className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                تصویر محصول
              </Label>
              {/* {product != null && (
             <Image
              src={product.imagePath}
              height="400"
              width="400"
              alt="Product Image"
            />
          )} */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const FormInput = <T extends keyof Product>({
  label,
  value,
  type = "text",
  placeholder,
  touched,
  errors,
}: {
  label: string;
  value: T;
  type?: string;
  placeholder?: string;
  touched: FormikTouched<Product>;
  errors: FormikErrors<Product>;
}) => {
  return (
    <div className="relative h-20 w-full">
      <Input
        type={type}
        id={value}
        name={value}
        placeholder={placeholder}
        className={`peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:focus:border-blue-500 ${
          touched[value] && errors[value]
            ? "error-input border-b-2 border-red-500"
            : ""
        }`}
      />
      <ErrorMessage
        name={value}
        component="div"
        className="text-[11px] text-error"
      />
      <Label
        htmlFor={value}
        className="absolute right-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      >
        {label}
      </Label>
    </div>
  );
};
