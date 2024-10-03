import MobileStickyHeader from "@/components/ui/MobileStickyHeader";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="max-lg:mb-20">
      <MobileStickyHeader />
      <div className="lg:px-20 py-5">
        <div className="lg:border rounded-lg p-5">
          <h4 className="w-fit font-irsansb border-b-2 border-b-red-500 pb-3">
            تماس با دیجی‌کالا
          </h4>
          <div className="text-xs flex justify-between items-center mt-5">
            <p>
              لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا{" "}
              <Link href="/faq" className="text-sky-500">
                پرسش‌‌های متداول
              </Link>{" "}
              را مشاهده کنید.
            </p>
            <button className="text-sky-500 border px-3 py-2 border-sky-500 rounded-md">
              <Link href="/faq">پرسش‌‌های متداول</Link>
            </button>
          </div>
        </div>

        <hr />
        <form >
          <label htmlFor="">
            موضوع
            <span className="text-red-500">*</span>
            <input type="text" />
          </label>
          <label htmlFor="">
            نام و نام خانوادگی
            <span className="text-red-500">*</span>
            <input type="text" />
          </label>
          <label htmlFor="">
            ایمیل
            <span className="text-red-500">*</span>
            <input type="text" />
          </label>
          <label htmlFor="">
            تلفن تماس
            <span className="text-red-500">*</span>
            <input type="text" />
          </label>
          <label htmlFor="">
            شماره سفارش
            <input type="text" />
          </label>
          <label htmlFor="">
            متن پیام
            <span className="text-red-500">*</span>
            <textarea name="" id=""></textarea>
          </label>
        </form>
      </div>
    </div>
  );
}
