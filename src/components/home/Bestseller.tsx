import useProducts from "@/hooks/useProducts";
import { Product } from "@prisma/client";
import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import OfferSkeleton from "../skeleton/OfferSkeleton";

export default function Bestseller({ title }: { title: string }) {
  const { products, loading } = useProducts();

  return (
    <div className="border rounded-xl my-5 p-5 mx-3">
      {title.includes("پرفروش") ? (
        <div className="flex justify-between items-center">
          <div></div>
          <h2 className="text-center flex items-center justify-center gap-2 text-xl font-irsansb my-2">
            <Flame className="text-orange-400" />
            <span>{title}</span>
          </h2>
          <button className="text-sm text-sky-500">
            <Link href="/best-selling">مشاهده همه</Link>
          </button>
        </div>
      ) : (
        <h2 className="text-center flex items-center justify-center gap-2 text-xl font-irsansb my-2">
          <Flame className="text-orange-400" />
          <span>{title}</span>
        </h2>
      )}
      <Swiper
        className="mt-10"
        spaceBetween={250}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {loading && (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={index}>
                <OfferSkeleton />
              </SwiperSlide>
            ))}
          </>
        )}
        {products?.slice(0, 6).map((product: Product, index: number) => (
          <SwiperSlide key={product.id} className="flex flex-col gap-5">
            <Link
              href={`/products/${product.id}-${product.title.replaceAll(
                " ",
                "-"
              )}`}
              className="flex items-center gap-4"
            >
              <Image alt="" width={100} height={100} src={product.thumbnail} />
              <div className="flex items-center gap-4">
                <p className="text-sky-500 text-2xl font-bold">{index + 1}</p>
                <p className="text-xs leading-6 h-20 border-b pb-7 text-gray-500 dark:text-gray-200">
                  {product.title.slice(0, 50)}
                  {product.title.length > 50 ? "..." : ""}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="mt-10"
        spaceBetween={250}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {products?.slice(6, 12).map((product: Product, index: number) => (
          <SwiperSlide key={product.id} className="flex flex-col gap-5">
            <Link
              href={`/products/${product.title.replaceAll(" ", "-")}`}
              className="flex items-center gap-4"
            >
              <Image alt="" width={100} height={100} src={product.thumbnail} />
              <div className="flex items-center gap-4">
                <p className="text-sky-500 text-2xl font-bold">{index + 7}</p>
                <p className="text-xs leading-6 border-b pb-7 text-gray-500 dark:text-gray-200">
                  {product.title.slice(0, 50)}
                  {product.title.length > 50 ? "..." : ""}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="mt-10"
        spaceBetween={250}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {products?.slice(12, 18).map((product: Product, index: number) => (
          <SwiperSlide key={product.id} className="flex flex-col gap-5">
            <Link
              href={`/products/${product.title.replaceAll(" ", "-")}`}
              className="flex items-center gap-4"
            >
              <Image alt="" width={100} height={100} src={product.thumbnail} />
              <div className="flex items-center gap-4">
                <p className="text-sky-500 text-2xl font-bold">{index + 13}</p>
                <p className="text-xs leading-6 border-b pb-7 text-gray-500 dark:text-gray-200">
                  {product.title.slice(0, 50)}
                  {product.title.length > 50 ? "..." : ""}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
