import BreadcrumbContainer from "@/components/product/BreadcrumbContainer";
import ProductImage from "@/components/product/ProductImage";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import db from "@/db/db";
import { Info, Megaphone, Store, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const productId = parseInt(id, 10);

  const product = await db.product.findUnique({
    where: { id: productId },
    include: {
      image: true,
      color: true,
      feature: true,
      category: { include: { submenus: { include: { items: true } } } },
    },
  });

  const productImages = product.image;
  const category = product.category;
  const submenu = product.category.submenus.find(
    (submenu) => submenu.categoryId === product.category.id
  );

  const item = submenu.items.find((item) => item.submenuId === submenu.id);

  if (!product) return null;

  return (
    <div>
      <div className="flex justify-between items-center p-4 mb-10">
        <nav className="grow min-w-0">
          <div className="breadcrumb-container flex overflow-x-auto overflow-y-hidden hide-scrollbar">
            <BreadcrumbContainer
              category={category}
              submenu={submenu}
              item={item}
              product={product}
            />
          </div>
        </nav>
        <div className="flex gap-5 items-center max-lg:hidden">
          <Link
            href="https://pindo.ir"
            target="_blank"
            className="gap-2 items-center flex text-xs text-neutral-400"
          >
            <span>ثبت آگهی در پیندو</span>
            <Megaphone size={17} />
          </Link>
          <Link
            href="/landings/seller-introduction"
            target="_blank"
            className="gap-2 items-center flex text-xs text-neutral-400"
          >
            <span>فروش در دیجی‌کالا</span>
            <Store size={17} />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 p-4">
        <div className="w-full col-span-4 max-lg:col-span-12 justify-center items-center">
          <ProductImage product={product} />
        </div>

        <div className="col-span-5 max-lg:col-span-12">
          <h1 className="text-xl font-irsansb text-neutral-700">
            {product.title}
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-neutral-400 text-xs my-4 whitespace-nowrap shrink-0">
              {product.en_title}
            </p>
            <span className="w-full bg-neutral-200 h-[1px]"></span>
          </div>
          <div className="mb-5 flex text-xs items-center gap-4">
            <span className="flex items-center gap-1">
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
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    style={{ fill: "#ffbb00" }}
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </g>
              </svg>
              {product.rating}
            </span>
            <span className="text-neutral-300">{`(امتیاز ${product.voter} خریدار)`}</span>
            <span className="w-1 h-1 bg-neutral-200 rounded-full"></span>
            {/* Task: دیدگاه و پرسش سرور را قرار بده*/}
            <span className="text-sky-400">{`${product.voter} دیدگاه`}</span>
            <span className="w-1 h-1 bg-neutral-200 rounded-full"></span>
            <span className="text-sky-400">{`${product.voter} پرسش`}</span>
          </div>
          <div className="mb-5 flex text-[13px] items-center gap-1 text-neutral-600">
            <span className="flex gap-1">
              <ThumbsUp size={15} className="text-green-600" />
              {`${product.recommended_percent}% (${product.likes} نفر) از خریداران، این کالا را پیشنهاد کرده‌اند`}
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Info
                      size={14}
                      className="cursor-pointer text-neutral-500"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="px-0 py-0">
                  <p className="w-80 text-xs leading-7 p-2 bg-slate-700 text-white">
                    خریداران کالا با انتخاب یکی از گزینه‌های پیشنهاد یا عدم
                    پیشنهاد، تجربه خرید خود را با کاربران به اشتراک می‌گذارند.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="mb-4">
            {product.color.length > 0 && (
              <h4 className="text-lg font-irsansb">
                رنگ:{" "}
                {product.color.map((item) => (
                  <span key={item.id}>{item.name}</span>
                ))}
              </h4>
            )}
          </div>
          <div className="mb-4">
            {product.sizes && (
              <p className="text-lg font-irsansb">سایز: {product.sizes}</p>
            )}
            <select
              name=""
              id=""
              className="mt-4 border p-2 rounded-lg outline-none w-32"
            >
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
            </select>
          </div>
          <div>
            <h4 className="text-lg font-irsansb mb-4">ویژگی‌ها</h4>
            <div className="flex gap-3 flex-wrap">
              {product.feature.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="w-32 bg-neutral-100 flex flex-col gap-2 p-3 rounded-lg"
                >
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-neutral-500">
                    {item.key}
                  </span>
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                    {item.value}...
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-blue-500 col-span-3 max-lg:col-span-12">1</div>
      </div>
    </div>
  );
}
