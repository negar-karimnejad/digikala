import MarketOffers from "@/components/home/MarketOffers";
import Offers from "@/components/home/Offers";
import SelectedProducts from "@/components/home/SelectedProducts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { serializeDoc } from "@/utils/serializeDoc";
import { Category, Product } from "@/utils/types";
import { Sparkles } from "lucide-react";
import CategoryModel from "models/Category";
import ProductModel from "models/Product";
import Image from "next/image";
import Link from "next/link";

export default async function IncredibleOffers() {
  const products = await ProductModel.find({})
    .populate("images")
    .populate("colors")
    .populate("features")
    .populate({
      path: "category",
      populate: {
        path: "submenus",
        populate: {
          path: "items",
        },
      },
    })
    .lean();

  // Discount Products
  const categories = await CategoryModel.find({}).lean();
  const discountProducts = products.filter(
    (product: Product) => product.discount > 0
  );

  const SortedOfferProductsByRating = discountProducts
    ?.slice()
    .sort((a, b) => b.rating - a.rating);

  const SortedOfferProductsByLowerDiscount = discountProducts
    ?.slice()
    .sort((a, b) => a.discount - b.discount);

  const serializedAllProducts = serializeDoc(products);
  const serializedOfferProducts = serializeDoc(SortedOfferProductsByRating);

  return (
    <div className="flex flex-col gap-10">
      {/* hero */}
      <div className="w-full">
        <div className="w-full h-16 bg-rose-500 flex items-center justify-center">
          <Image
            alt="incredible-offers"
            src="/incredible-offers/incredible-offers.svg"
            width={600}
            height={600}
          />
        </div>
        <Link href="/products/66f16cdef1ce8839b36b8553">
          <Image
            alt="incredible-offers-banner"
            src="/incredible-offers/incredible-offers-banner.webp"
            width={1500}
            height={1500}
            className="w-full lg:h-80 h-64 object-cover"
            title="مبدل"
          />
        </Link>
      </div>
      {/* products slider */}
      <div className="relative lg:px-5 overflow-hidden bg-rose-600 lg:rounded-2xl py-4 lg:mx-3">
        <div className="absolute brightness-200 right-0 top-0 w-full bg-[url('/nav-links-svg.svg')] h-36 opacity-80"></div>
        <div className="flex items-center gap-2 mb-5 max-lg:mx-5">
          <Sparkles size={20} className="text-white" />
          <p className="font-irsansb text-white">
            <span className="relative">شگفت‌انگیز روز</span>
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            direction: "rtl",
          }}
          className="min-w-screen "
        >
          <CarouselContent>
            {SortedOfferProductsByLowerDiscount?.map((product: Product) => (
              <CarouselItem
                key={product._id.toString()}
                className="lg:pl-5 px-1 basis-[35rem] max-lg:basis-52"
              >
                <div>
                  <Card className="border-0 rounded-lg">
                    <CardContent className="px-5 py-5">
                      <Image
                        alt={product.title}
                        width={120}
                        height={120}
                        src="/incredible-offers/text.svg"
                      />
                      <div className="flex max-lg:flex-col gap-5 items-center mt-5 justify-between">
                        <Link
                          href={`/products/${product._id}`}
                          className="shrink-0"
                        >
                          <Image
                            alt={product.title}
                            width={150}
                            height={150}
                            src={product.thumbnail}
                          />
                        </Link>
                        <div className="flex flex-col items-center justify-center p-2">
                          <Link
                            href={`/products/${product._id}`}
                            className="max-lg:hidden h-16 text-[13px] text-neutral-800 dark:text-neutral-100 mb-5"
                          >
                            {product.title}
                          </Link>
                          <Link
                            href={`/products/${product._id}`}
                            className="lg:hidden h-10 text-[13px] text-neutral-800 dark:text-neutral-100 mb-5"
                          >
                            {product.title.slice(0, 30)}
                            {product.title.length > 30 ? "..." : ""}
                          </Link>

                          <span className="mb-5 justify-end w-full flex items-center text-sm gap-1">
                            {product.rating}
                            <svg
                              height="13px"
                              width="13px"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 47.94 47.94"
                              xmlSpace="preserve"
                              fill="#000000"
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  style={{ fill: "#ffbb00" }}
                                  d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
                                />
                              </g>
                            </svg>
                          </span>

                          <div className="flex justify-between items-start w-full text-left">
                            <span
                              className={`px-2 py-0.5 rounded-full text-white text-xs bg-red-600 ${
                                product.discount > 0 ? "visible" : "invisible"
                              }`}
                            >
                              %{product.discount}
                            </span>

                            <div className="text-right">
                              <div className="text-sm font-bold dark:font-normal text-neutral-800 dark:text-white flex gap-1 items-center">
                                {product.discount_price.toLocaleString()}
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="fill-neutral-600 dark:fill-neutral-300"
                                >
                                  <path d="M9.696 17.76L9.48 16.776C9.96 16.712 10.4 16.62 10.8 16.5C11.208 16.388 11.556 16.224 11.844 16.008C12.14 15.792 12.368 15.508 12.528 15.156C12.688 14.804 12.768 14.364 12.768 13.836C12.768 13.292 12.668 12.84 12.468 12.48C12.268 12.12 12.008 11.94 11.688 11.94C11.52 11.94 11.364 12.004 11.22 12.132C11.076 12.26 10.956 12.432 10.86 12.648C10.772 12.864 10.728 13.1 10.728 13.356C10.728 13.5 10.76 13.62 10.824 13.716C10.888 13.804 10.98 13.876 11.1 13.932C11.228 13.98 11.388 14.016 11.58 14.04C11.772 14.064 11.996 14.076 12.252 14.076H14.784C14.952 14.076 15.072 14.124 15.144 14.22C15.224 14.308 15.264 14.416 15.264 14.544C15.264 14.672 15.208 14.792 15.096 14.904C14.984 15.008 14.84 15.06 14.664 15.06H11.796C11.436 15.06 11.1 15.008 10.788 14.904C10.484 14.8 10.236 14.64 10.044 14.424C9.86 14.2 9.768 13.908 9.768 13.548C9.768 13.212 9.82 12.892 9.924 12.588C10.028 12.276 10.168 12 10.344 11.76C10.528 11.512 10.74 11.316 10.98 11.172C11.228 11.028 11.496 10.956 11.784 10.956C12.152 10.956 12.48 11.064 12.768 11.28C13.056 11.496 13.284 11.824 13.452 12.264C13.62 12.696 13.704 13.244 13.704 13.908C13.704 14.652 13.552 15.292 13.248 15.828C12.952 16.372 12.504 16.804 11.904 17.124C11.312 17.444 10.576 17.656 9.696 17.76ZM14.6602 15.06L14.7802 14.076C15.2522 14.076 15.6202 14.06 15.8842 14.028C16.1482 13.988 16.3362 13.896 16.4482 13.752C16.5602 13.6 16.6162 13.364 16.6162 13.044C16.6162 12.844 16.5842 12.608 16.5202 12.336C16.4562 12.056 16.3722 11.76 16.2682 11.448C16.1642 11.136 16.0522 10.828 15.9322 10.524L16.9042 10.164C17.0082 10.42 17.1042 10.712 17.1922 11.04C17.2882 11.368 17.3682 11.692 17.4322 12.012C17.4962 12.332 17.5282 12.612 17.5282 12.852C17.5282 13.252 17.4722 13.592 17.3602 13.872C17.2562 14.152 17.0882 14.38 16.8562 14.556C16.6242 14.732 16.3242 14.86 15.9562 14.94C15.5962 15.02 15.1642 15.06 14.6602 15.06ZM17.2762 8.916C17.1082 8.916 16.9642 8.86 16.8442 8.748C16.7322 8.628 16.6762 8.488 16.6762 8.328C16.6762 8.168 16.7322 8.028 16.8442 7.908C16.9642 7.788 17.1082 7.728 17.2762 7.728C17.4362 7.728 17.5722 7.788 17.6842 7.908C17.8042 8.028 17.8642 8.168 17.8642 8.328C17.8642 8.488 17.8042 8.628 17.6842 8.748C17.5722 8.86 17.4362 8.916 17.2762 8.916ZM15.6322 8.916C15.4642 8.916 15.3202 8.86 15.2002 8.748C15.0882 8.628 15.0322 8.488 15.0322 8.328C15.0322 8.168 15.0882 8.028 15.2002 7.908C15.3202 7.788 15.4642 7.728 15.6322 7.728C15.7922 7.728 15.9282 7.788 16.0402 7.908C16.1602 8.028 16.2202 8.168 16.2202 8.328C16.2202 8.488 16.1602 8.628 16.0402 8.748C15.9282 8.86 15.7922 8.916 15.6322 8.916Z" />
                                  <path d="M3.492 17.06C2.852 17.06 2.36 16.988 2.016 16.844C1.68 16.7 1.448 16.476 1.32 16.172C1.192 15.868 1.12 15.476 1.104 14.996L0.864 8.432H1.848L2.088 14.612C2.104 15.004 2.14 15.308 2.196 15.524C2.26 15.732 2.396 15.876 2.604 15.956C2.82 16.036 3.156 16.076 3.612 16.076C3.78 16.076 3.9 16.124 3.972 16.22C4.052 16.308 4.092 16.416 4.092 16.544C4.092 16.672 4.036 16.792 3.924 16.904C3.812 17.008 3.668 17.06 3.492 17.06ZM3.49219 17.06L3.61219 16.076C3.83619 16.076 4.02419 16.028 4.17619 15.932C4.32819 15.836 4.47619 15.676 4.62019 15.452C4.76419 15.228 4.92019 14.928 5.08819 14.552C5.32019 14.04 5.54819 13.652 5.77219 13.388C6.00419 13.124 6.23219 12.944 6.45619 12.848C6.68819 12.752 6.91619 12.704 7.14019 12.704C7.41219 12.704 7.66419 12.776 7.89619 12.92C8.12819 13.056 8.33219 13.24 8.50819 13.472C8.68419 13.704 8.82019 13.96 8.91619 14.24C9.02019 14.512 9.07219 14.784 9.07219 15.056C9.07219 15.536 8.98819 15.92 8.82019 16.208C8.65219 16.488 8.43619 16.692 8.17219 16.82C7.91619 16.94 7.64819 17 7.36819 17C7.12019 17 6.80019 16.952 6.40819 16.856C6.02419 16.76 5.53619 16.516 4.94419 16.124L5.41219 15.368C5.80419 15.616 6.15619 15.788 6.46819 15.884C6.78819 15.972 7.05219 16.016 7.26019 16.016C7.49219 16.016 7.67619 15.984 7.81219 15.92C7.94819 15.848 8.04819 15.748 8.11219 15.62C8.17619 15.492 8.20819 15.348 8.20819 15.188C8.20819 14.956 8.15219 14.724 8.04019 14.492C7.92819 14.26 7.78419 14.068 7.60819 13.916C7.44019 13.764 7.26019 13.688 7.06819 13.688C6.92419 13.688 6.78419 13.728 6.64819 13.808C6.51219 13.888 6.37219 14.036 6.22819 14.252C6.08419 14.468 5.92019 14.78 5.73619 15.188C5.54419 15.62 5.36019 15.964 5.18419 16.22C5.01619 16.468 4.84419 16.652 4.66819 16.772C4.49219 16.892 4.30819 16.968 4.11619 17C3.93219 17.04 3.72419 17.06 3.49219 17.06Z" />
                                  <path d="M0.36 6.012C0.36 5.82 0.376 5.616 0.408 5.4C0.448 5.176 0.504 4.94 0.576 4.692C0.656 4.436 0.752 4.168 0.864 3.888L1.728 4.224C1.648 4.448 1.576 4.66 1.512 4.86C1.456 5.06 1.412 5.248 1.38 5.424C1.356 5.6 1.344 5.768 1.344 5.928C1.344 6.344 1.452 6.688 1.668 6.96C1.884 7.232 2.18 7.436 2.556 7.572C2.932 7.708 3.356 7.776 3.828 7.776C4.364 7.776 4.812 7.704 5.172 7.56C5.54 7.416 5.832 7.224 6.048 6.984C6.264 6.752 6.416 6.492 6.504 6.204C6.6 5.916 6.648 5.632 6.648 5.352C6.648 5.048 6.588 4.68 6.468 4.248C6.356 3.816 6.144 3.28 5.832 2.64L6.732 2.184C6.892 2.488 7.036 2.808 7.164 3.144C7.3 3.472 7.408 3.812 7.488 4.164C7.576 4.508 7.62 4.86 7.62 5.22C7.62 5.532 7.58 5.852 7.5 6.18C7.428 6.508 7.304 6.824 7.128 7.128C6.952 7.44 6.716 7.716 6.42 7.956C6.132 8.204 5.772 8.4 5.34 8.544C4.916 8.688 4.408 8.76 3.816 8.76C3.352 8.76 2.908 8.704 2.484 8.592C2.068 8.488 1.7 8.324 1.38 8.1C1.068 7.876 0.82 7.592 0.636 7.248C0.452 6.904 0.36 6.492 0.36 6.012ZM3.984 1.224C3.816 1.224 3.672 1.168 3.552 1.056C3.44 0.936 3.384 0.796 3.384 0.636C3.384 0.476 3.44 0.336 3.552 0.216C3.672 0.0959998 3.816 0.0359999 3.984 0.0359999C4.144 0.0359999 4.28 0.0959998 4.392 0.216C4.512 0.336 4.572 0.476 4.572 0.636C4.572 0.796 4.512 0.936 4.392 1.056C4.28 1.168 4.144 1.224 3.984 1.224Z" />
                                </svg>
                              </div>
                              {product.discount != 0 && (
                                <span className="text-neutral-400 dark:text-neutral-300 line-through text-sm text-right">
                                  {product.price.toLocaleString()}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="dark:!bg-neutral-900 transition-all !z-20 w-10 h-10 !hover:bg-rose-500 left-3 top-32 !opacity-100 !bg-white" />
          <CarouselNext className="dark:!bg-neutral-900 transition-all !z-20 w-10 h-10 !hover:bg-rose-500 right-3 top-32 !opacity-100 !bg-white" />
        </Carousel>
      </div>
      {/* categories slider */}
      <Carousel
        opts={{
          align: "start",
          direction: "rtl",
        }}
        className="min-w-screen mr-4"
      >
        <CarouselContent>
          <CarouselItem className="text-center basis-28 rounded-sm bg-neutral-100 dark:!bg-transparent">
            <Image
              alt="incridble-offers-bag"
              width={90}
              height={90}
              src="/incredible-offers/bag.png"
            />
            <p className="text-xs my-3">همه دسته‌بندی‌ها</p>
          </CarouselItem>
          {categories?.map((category: Category) => (
            <CarouselItem key={category._id.toString()} className="basis-36">
              <Link
                href={category.href}
                className="flex items-center text-center justify-center flex-col"
              >
                <Image
                  alt={category.title}
                  width={90}
                  height={90}
                  src={category.cover[0]}
                />
                <p className="text-xs mt-3">{category.title}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="transition-all !z-20 w-8 h-8 !hover:bg-rose-500 left-0 top-16 !opacity-100 !bg-white dark:!bg-neutral-900" />
        <CarouselNext className="transition-all !z-20 w-8 h-8 !hover:bg-rose-500 right-0 top-16 !opacity-100 !bg-white dark:!bg-neutral-900" />
      </Carousel>
      {/* offers */}
      <Offers products={serializedOfferProducts} />
      <div className="-mt-5">
        <MarketOffers />
      </div>
      <div className="-mt-10">
        <SelectedProducts products={serializedAllProducts} />
      </div>
    </div>
  );
}
