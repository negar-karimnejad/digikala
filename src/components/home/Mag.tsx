import Image from "next/image";
import Link from "next/link";

export default function Mag() {
  return (
    <div className="mx-3 mt-5">
      <h3 className="mb-5 font-irsansb">خواندنی‌ها</h3>
      <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-3">
        <Link href="mag/wrestling-in-olympic-iran-2024">
          <div className="rounded-xl border overflow-hidden">
            <Image
              alt=""
              width={1000}
              height={1000}
              src="/mag/wrestling-in-olympic-iran-2.jpeg"
              className="object-cover"
            />
            <p className="text-[12.5px] mt-4 px-3 h-14 leading-6">
              تاریخ المپیک کشتی ۲۰۲۴ به‌ همراه جدول برگزاری مسابقات کشتی‌گیران
              ایرانی
            </p>
          </div>
        </Link>
        <Link href="/mag/how-to-optimize-windows-11-for-gaming">
          <div className="rounded-xl border overflow-hidden">
            <Image
              alt=""
              width={1000}
              height={1000}
              src="/mag/Windows-11-1.jpg"
              className="object-cover"
            />
            <p className="text-[12.5px] mt-4 px-3 h-14 leading-6">
              چگونه ویندوز ۱۱ را برای گیمینگ بهینه‌سازی کنیم؟
            </p>
          </div>
        </Link>
        <Link href="/mag/free-30-day-weight-loss-diet">
          <div className="rounded-xl border overflow-hidden">
            <Image
              alt=""
              width={1000}
              height={1000}
              src="/mag/free-diet.jpg"
              className="object-cover"
            />
            <p className="text-[12.5px] mt-4 px-3 h-14 leading-6">
              رژیم لاغری ۳۰روزه (رایگان) + طرز پخت صبحانه، نهار، شام
            </p>
          </div>
        </Link>
        <Link href="/mag/10-great-tv-shows-with-one-major-flaw">
          <div className="rounded-xl border overflow-hidden">
            <Image
              alt=""
              width={1000}
              height={1000}
              src="/mag/21xp-friends-mediumSquareAt3X.jpg"
              className="object-cover"
            />
            <p className="text-[12.5px] mt-4 px-3 h-14 leading-6">
              ۱۰ سریال مشهور که یک نقطه ضعف بزرگ دارند
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
