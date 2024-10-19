import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="dark:bg-white w-full h-screen">
      <div className="py-10 flex items-center justify-center flex-col">
        <h2 className="lg:text-lg font-bold tracking-wider text-gray-800">
          صفحه‌ای که دنبال آن بودید پیدا نشد!
        </h2>
        <Link
          className="gap-1 mt-5 text-sky-500 text-sm flex items-center"
          href="/"
        >
          صفحه اصلی
          <ChevronLeft size={16} />
        </Link>
        <div className="lg:w-[550px] w-[300px] mt-10">
          <Image
            src="/page-not-found.webp"
            width={400}
            height={400}
            alt="not-found-page"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
