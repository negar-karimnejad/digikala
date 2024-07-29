import { addProduct } from "@/app/admin/_actions/products";
import { ProductSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    await addProduct(formData);
  };

  const renderError = (error) => {
    if (error) {
      return <p className="text-red-500 text-sm">{error.message}</p>;
    }
    return null;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-8 max-w-lg mx-auto bg-white shadow-md rounded-lg"
    >
      <div>
        <label className="block text-gray-700">Title</label>
        <input
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("title")}
        />
        {renderError(errors.title)}
      </div>
      <div>
        <label className="block text-gray-700">English Title</label>
        <input
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("en_title")}
        />
        {renderError(errors.en_title)}
      </div>
      <div>
        <label className="block text-gray-700">Rating</label>
        <input
          type="number"
          step="0.1"
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("rating")}
        />
        {renderError(errors.rating)}
      </div>
      <div>
        <label className="block text-gray-700">Thumbnail</label>
        <input
          type="file"
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("thumbnail")}
        />
        {renderError(errors.thumbnail)}
      </div>
      <div>
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          step="0.01"
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("price")}
        />
        {renderError(errors.price)}
      </div>
      <div>
        <label className="block text-gray-700">Discount</label>
        <input
          type="number"
          step="0.01"
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("discount")}
        />
        {renderError(errors.discount)}
      </div>
      <div>
        <label className="block text-gray-700">Discount Price</label>
        <input
          type="number"
          step="0.01"
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("discount_price")}
        />
        {renderError(errors.discount_price)}
      </div>
      <div>
        <label className="block text-gray-700">Description</label>
        <textarea
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("description")}
        />
        {renderError(errors.description)}
      </div>
      <div>
        <label className="block text-gray-700">Recommended Percent</label>
        <input
          type="number"
          step="0.01"
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("recommended_percent")}
        />
        {renderError(errors.recommended_percent)}
      </div>
      <div>
        <label className="block text-gray-700">Guarantee</label>
        <input
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("guarantee")}
        />
        {renderError(errors.guarantee)}
      </div>
      <div>
        <label className="block text-gray-700">Likes</label>
        <input
          type="number"
          className="mt-1 p-2 block w-full border rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...register("likes")}
        />
        {renderError(errors.likes)}
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Add Product
      </button>
    </form>
  );
}
