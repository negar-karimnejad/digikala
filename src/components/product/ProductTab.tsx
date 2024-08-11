"use client";

import useProduct from "@/hooks/useProduct";
import useScroll from "@/hooks/useScroll";
import { ChevronLeft, Info, Star } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Button } from "../ui/button";

export default function ProductTab({ productId }: { productId: number }) {
  const featureRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const productTabs = [
    { title: "مشخصات", ref: featureRef },
    { title: "دیدگاه‌ها", ref: reviewsRef },
    { title: "پرسش‌ها", ref: questionRef },
  ];

  const { product } = useProduct(productId);
  const { isVisible } = useScroll();

  const [activeTab, setActiveTab] = useState(productTabs[0].title);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [questionValue, setQuestionValue] = useState("");

  if (!product) return null;
  return (
    <div className="relative">
      <ul
        className={`sticky pr-2 bg-white z-10 text-sm text-neutral-600 h-10 pt-2 cursor-pointer flex items-center gap-8 border-b ${
          isVisible ? "top-[7.5rem]" : "top-20"
        }`}
      >
        {productTabs.map((tab, index) => (
          <li
            onClick={() => {
              setActiveTab(tab.title);
              tab.ref.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className={`h-full ${
              activeTab === tab.title ? "border-b-2 border-red-500" : ""
            }`}
            key={index}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      {/* features */}
      <div
        ref={featureRef}
        className="py-8 grid grid-cols-12 border-b-4 gap-14"
      >
        <div className="col-span-3 flex flex-col justify-between h-full items-start">
          <h3 className="border-b-2 pb-3 w-fit border-red-500 text-black font-irsansb">
            مشخصات
          </h3>
          <button
            onClick={() => setShowAllFeatures((prev) => !prev)}
            className={`text-xs text-blue-400 flex items-center ${
              product.feature.length <= 5 && "hidden"
            }`}
          >
            {showAllFeatures ? "بستن" : "مشاهده بیشتر"}
            <ChevronLeft size={17} className="text-blue-400" />
          </button>
        </div>
        <div className="col-span-9">
          {product.feature
            .slice(0, showAllFeatures ? undefined : 5)
            .map((item) => (
              <div key={item.id} className="flex py-4">
                <p className="text-sm w-44 text-neutral-400">{item.key}</p>
                <p className="text-sm border-b pb-5 w-full">{item.value}</p>
              </div>
            ))}
        </div>
      </div>

      {/* reviews */}
      <div
        ref={reviewsRef}
        className="py-8 grid grid-cols-12 border-b-4 gap-14"
      >
        <div className="col-span-3 pl-5 flex flex-col gap-4">
          <h3 className="border-b-2 pb-3 w-fit border-red-500 text-black font-irsansb">
            دیدگاه‌ها
          </h3>
          <div>
            <p className="text-xs text-neutral-600 mb-2">
              هنوز امتیازی ثبت نشده است
            </p>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={19} fill="#afafaf" stroke="none" />
              ))}
            </div>
          </div>
          <p className="text-xs text-neutral-600">
            شما هم درباره این کالا دیدگاه ثبت کنید
          </p>
          <Button variant="destructiveOutline">ثبت دیدگاه</Button>
          <p className="text-xs text-neutral-500 flex leading-7 gap-2 items-start">
            <Info size={25} className="text-neutral-500 mt-0.5" />
            با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در دیجی‌کلاب
            دریافت کنید
          </p>
        </div>
        <div className="col-span-9 flex flex-col justify-between h-full items-start">
          {product.comment?.length ? (
            <>
              {product.comment
                .slice(0, showAllFeatures ? undefined : 4)
                .map((item) => (
                  <div key={item.id} className="flex py-4">
                    <p className="text-sm w-44 text-neutral-400">
                      {item.authorId}
                    </p>
                    <p className="text-sm border-b pb-5 w-full">
                      {item.content}
                    </p>
                  </div>
                ))}
              <button
                onClick={() => setShowAllFeatures((prev) => !prev)}
                className={`text-xs text-blue-400 flex items-center ${
                  product.feature.length <= 3 && "hidden"
                }`}
              >
                {showAllFeatures ? "بستن" : "مشاهده بیشتر"}
                <ChevronLeft size={17} className="text-blue-400" />
              </button>
            </>
          ) : (
            <div>
              <h4 className="text-black mb-2">
                شما هم می‌توانید در مورد این کالا نظر دهید.
              </h4>
              <p className="text-neutral-600 text-xs">
                اگر این محصول را قبلا از دیجیکالا خریده باشید، دیدگاه شما به
                عنوان خریدار ثبت خواهد شد. همچنین در صورت تمایل می‌توانید به
                صورت ناشناس نیز دیدگاه خود را ثبت کنید
              </p>
            </div>
          )}
        </div>
      </div>
      {/* questions */}
      <div ref={questionRef} className="py-8 grid grid-cols-12 border-b-4">
        <div className="col-span-3 flex flex-col justify-between h-full items-start">
          <h3 className="border-b-2 pb-3 w-fit border-red-500 text-black font-irsansb">
            پرسش‌ها
          </h3>
        </div>
        <div className="col-span-9 flex flex-col justify-between h-full items-start">
          {product.question?.length ? (
            <>
              {product.question
                .slice(0, showAllFeatures ? undefined : 4)
                .map((item) => (
                  <div key={item.id} className="flex py-4">
                    <p className="text-sm w-44 text-neutral-400">
                      {item.authorId}
                    </p>
                    <p className="text-sm border-b pb-5 w-full">
                      {item.content}
                    </p>
                  </div>
                ))}
              <button
                onClick={() => setShowAllFeatures((prev) => !prev)}
                className={`text-xs text-blue-400 flex items-center ${
                  product.feature.length <= 3 && "hidden"
                }`}
              >
                {showAllFeatures ? "بستن" : "مشاهده بیشتر"}
                <ChevronLeft size={17} className="text-blue-400" />
              </button>
            </>
          ) : (
            <div className="w-full">
              <h4 className="text-black mb-2">
                درباره این کالا چه پرسشی دارید؟
              </h4>
              <textarea
                rows={4}
                maxLength={100}
                name=""
                id=""
                value={questionValue}
                onChange={(e) => setQuestionValue(e.target.value)}
                className="p-4 outline-none w-full appearance-none border rounded-lg "
              ></textarea>
              <div className="flex justify-between">
                <Link href="/comments-rules" className="text-xs">
                  ثبت پاسخ به معنی موافقت با{" "}
                  <span className="text-blue-400">قوانین انتشار دیجی‌کالا</span>{" "}
                  است.
                </Link>
                <div className="flex flex-col gap-4 items-end">
                  <p className="text-sm text-neutral-500">
                    100/{questionValue.length}
                  </p>
                  <Button
                    disabled={questionValue.length <= 6}
                    variant={questionValue.length > 6 ? "default" : "disabled"}
                  >
                    ثبت پرسش
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
