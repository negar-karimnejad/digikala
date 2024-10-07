"use client";
import useScroll from "@/utils/useScroll";
import {
  ChevronLeft,
  CircleHelp,
  Info,
  MessageCircle,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Feature, Product, Question } from "@/utils/types";
import { Button } from "../ui/button";

export default function ProductTab({ product }: { product: Product }) {
  const introductionRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const productTabs = [
    { title: "معرفی", ref: introductionRef },
    { title: "مشخصات", ref: featureRef },
    { title: "دیدگاه‌ها", ref: reviewsRef },
    { title: "پرسش‌ها", ref: questionRef },
  ];

  const { isVisible } = useScroll();

  const [activeTab, setActiveTab] = useState(productTabs[0].title);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [questionValue, setQuestionValue] = useState("");
  const [showFullIntroduction, setShowFullIntroduction] = useState(false);

  if (!product) return null;
  return (
    <div className="relative mb-10">
      <ul
        className={`sticky pr-2 dark:bg-neutral-950 bg-white z-10 text-sm text-neutral-600 dark:text-neutral-400 h-10 pt-2 cursor-pointer flex items-center gap-8 border-b ${
          isVisible
            ? "lg:top-[7.5rem] top-20 max-sm:top-[56px]"
            : "top-20 max-sm:top-[56px]"
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
            className={`h-full dark:text-neutral-200 ${
              activeTab === tab.title ? "border-b-2 border-red-500" : ""
            }`}
            key={index}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      {/* introduction */}
      <div
        ref={introductionRef}
        className="py-8 lg:grid grid-cols-12 border-b-4 gap-14"
      >
        <div className="col-span-3 max-lg:mb-5 flex flex-col justify-between h-full items-start">
          <h3 className="border-b-2 pb-3 w-fit border-red-500 text-black dark:text-white font-irsansb">
            معرفی
          </h3>
        </div>
        <div className="col-span-9">
          <p
            className={`text-neutral-700 text-sm leading-7  ${
              showFullIntroduction ? "line-clamp-none" : "line-clamp-3"
            }`}
          >
            {product.description}
          </p>
          {product.description.length > 600 && (
            <button
              className="flex items-center text-blue-400 text-xs mt-2"
              onClick={() => setShowFullIntroduction((prev) => !prev)}
            >
              {showFullIntroduction ? "بستن" : "بیشتر"}{" "}
              <ChevronLeft size={16} />
            </button>
          )}
        </div>
      </div>
      {/* features */}
      <div
        ref={featureRef}
        className="py-8 lg:grid grid-cols-12 border-b-4 gap-14"
      >
        <div className="col-span-3 max-lg:mb-5 flex flex-col justify-between h-full items-start">
          <h3 className="border-b-2 pb-3 w-fit border-red-500 text-black dark:text-white font-irsansb">
            مشخصات
          </h3>
          <button
            onClick={() => setShowAllFeatures((prev) => !prev)}
            className={`text-xs text-blue-400 flex items-center ${
              product.features?.length <= 5 && "hidden"
            }`}
          >
            {showAllFeatures ? "بستن" : "مشاهده بیشتر"}
            <ChevronLeft size={17} className="text-blue-400" />
          </button>
        </div>
        <div className="col-span-9">
          {product.features
            ?.slice(0, showAllFeatures ? undefined : 5)
            .map((item: Feature) => (
              <div key={item.value} className="flex py-4">
                <p className="text-sm w-52 text-neutral-400">{item.key}</p>
                <p className="text-sm border-b pb-5 w-full">{item.value}</p>
              </div>
            ))}
        </div>
      </div>

      {/* reviews */}
      <div
        ref={reviewsRef}
        className="py-8 lg:grid grid-cols-12 border-b-4 gap-14"
      >
        <div className="col-span-3 max-lg:mb-5 lg:pl-5 flex flex-col gap-4">
          <div className="flex mb-5 justify-between items-center">
            <h3 className="border-b-2 pb-3 w-fit border-red-500 text-black dark:text-white font-irsansb">
              دیدگاه‌ها
            </h3>
            <button className="text-blue-400 text-xs flex items-center">
              دیدن همه <ChevronLeft size={15} />
            </button>
          </div>
          <div className="flex flex-col gap-4 max-lg:hidden">
            <div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                هنوز امتیازی ثبت نشده است
              </p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={19} fill="#afafaf" stroke="none" />
                ))}
              </div>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              شما هم درباره این کالا دیدگاه ثبت کنید
            </p>
            <Button variant="destructive">ثبت دیدگاه</Button>
            <p className="text-xs text-neutral-500 flex leading-7 gap-2 items-start">
              <Info size={25} className="text-neutral-500 mt-0.5" />
              با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در دیجی‌کلاب
              دریافت کنید
            </p>
          </div>
        </div>
        <div className="col-span-9 flex flex-col justify-between h-full items-start">
          {product.comments?.length ? (
            <div className="max-lg:hidden">
              {/* {product.comments
                ?.slice(0, showAllFeatures ? undefined : 4)
                .map((item) => (
                  <div key={item.id} className="flex py-4">
                    <p className="text-sm w-44 text-neutral-400">
                      {item.authorId}
                    </p>
                    <p className="text-sm border-b pb-5 w-full">
                      {item.content}
                    </p>
                  </div>
                ))} */}
              <button
                onClick={() => setShowAllFeatures((prev) => !prev)}
                className={`text-xs text-blue-400 flex items-center ${
                  product.features?.length <= 3 && "hidden"
                }`}
              >
                {showAllFeatures ? "بستن" : "مشاهده بیشتر"}
                <ChevronLeft size={17} className="text-blue-400" />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <MessageCircle />
              <div>
                <h4 className="max-lg:hidden text-black dark:text-white mb-2">
                  شما هم می‌توانید در مورد این کالا نظر دهید.
                </h4>
                <h4 className="lg:hidden text-black dark:text-white mb-2">
                  دیدگاه خود را درباره این کالا بنویسید{" "}
                </h4>
                <p className="max-lg:hidden text-neutral-600 dark:text-neutral-400 text-xs">
                  اگر این محصول را قبلا از دیجیکالا خریده باشید، دیدگاه شما به
                  عنوان خریدار ثبت خواهد شد. همچنین در صورت تمایل می‌توانید به
                  صورت ناشناس نیز دیدگاه خود را ثبت کنید
                </p>
                <p className="lg:hidden text-neutral-600 dark:text-neutral-400 text-xs">
                  با ثبت دیدگاه بر روی کالاهای خریداری شده ۵ امتیاز در دیجی‌کلاب
                  دریافت کنید
                </p>
              </div>
              <ChevronLeft size={18} className="text-neutral-500" />
            </div>
          )}
        </div>
      </div>
      {/* questions */}
      <div ref={questionRef} className="py-8 grid grid-cols-12 border-b-4">
        <div className="max-lg:hidden col-span-3 flex flex-col justify-between h-full items-start">
          <h3 className="border-b-2 pb-3 w-fit border-red-500 text-black dark:text-white font-irsansb">
            پرسش‌ها
          </h3>
        </div>
        <div className="col-span-9 max-lg:col-span-12 flex flex-col justify-between h-full items-start">
          {product.questions?.length ? (
            <>
              {product.questions
                ?.slice(0, showAllFeatures ? undefined : 4)
                .map((item: Question) => (
                  <div key={item._id.toString()} className="flex py-4">
                    <p className="text-sm w-44 text-neutral-400">
                      {item.username}
                    </p>
                    <p className="text-sm border-b pb-5 w-full">{item.body}</p>
                  </div>
                ))}
              <button
                onClick={() => setShowAllFeatures((prev) => !prev)}
                className={`text-xs text-blue-400 flex items-center ${
                  product.features?.length <= 3 && "hidden"
                }`}
              >
                {showAllFeatures ? "بستن" : "مشاهده بیشتر"}
                <ChevronLeft size={17} className="text-blue-400" />
              </button>
            </>
          ) : (
            <div className="w-full">
              <div className="max-lg:hidden">
                <h4 className="text-black dark:text-white mb-2">
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
                  <Link
                    href="/comments-rules"
                    className="text-xs text-neutral-500"
                  >
                    ثبت پاسخ به معنی موافقت با{" "}
                    <span className="text-blue-400">
                      قوانین انتشار دیجی‌کالا
                    </span>{" "}
                    است.
                  </Link>
                  <div className="flex flex-col gap-4 items-end">
                    <p className="text-sm text-neutral-500">
                      100/{questionValue.length}
                    </p>
                    <Button
                      disabled={questionValue.length <= 6}
                      variant={
                        questionValue.length > 6 ? "default" : "disabled"
                      }
                    >
                      ثبت پرسش
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <CircleHelp />
                  <h4 className="text-black text-sm dark:text-white mb-2">
                    پرسش و پاسخ
                  </h4>
                </div>
                <ChevronLeft size={18} className="text-neutral-500" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
