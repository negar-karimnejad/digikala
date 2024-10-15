import Image from "next/image";
import Link from "next/link";

export function FirstBanner() {
  return (
    <div className="mx-3 mt-5 grid grid-cols-12 gap-4">
      <div className="col-span-3 max-lg:col-span-6">
        <Link href="/products/66d6eb617bbd835044fd769c">
          <Image
            width={800}
            height={800}
            className="rounded-xl object-cover"
            src="/banner/motor.webp"
            alt="motor"
          />
        </Link>
      </div>
      <div className="col-span-3 max-lg:col-span-6">
        <Link href="/category/mobile">
          <Image
            width={800}
            height={800}
            className="rounded-xl object-cover"
            src="/banner/mobile.webp"
            alt="mobile"
          />
        </Link>
      </div>
      <div className="col-span-3 max-lg:col-span-6">
        <Link href="/products/66e59b177d54b0fb3e3181ab">
          <Image
            width={800}
            height={800}
            className="rounded-xl object-cover"
            src="/banner/softlan.webp"
            alt="softlan"
          />
        </Link>
      </div>
      <div className="col-span-3 max-lg:col-span-6">
        <Link href="/products/66e5994c7d54b0fb3e318120">
          <Image
            width={800}
            height={800}
            className="rounded-xl object-cover"
            src="/banner/suncream.webp"
            alt="suncream"
          />
        </Link>
      </div>
    </div>
  );
}

export function MiddleBanner() {
  return (
    <div className="mx-3 mt-5 flex max-lg:flex-col gap-4">
      <div className="w-full">
        <Link href="/category/personal-appliance/sanitary-pad">
          <Image
            width={800}
            height={800}
            className="rounded-xl object-cover w-full"
            src="/banner/my-lady.webp"
            alt="my-lady"
          />
        </Link>
      </div>
      <div className="w-full">
        <Link href="/category/home-appliance/hadron">
          <Image
            width={800}
            height={800}
            className="rounded-xl object-cover w-full"
            src="/banner/hadron.gif"
            alt="hadron"
            unoptimized
          />
        </Link>
      </div>
    </div>
  );
}
export function LastBanner() {
  return (
    <div className="mx-3 mt-5 flex max-lg:flex-col gap-4">
      <div className="w-full">
        <Link href="/category/leather">
          <Image
            width={800}
            height={800}
            className="rounded-xl object-cover w-full"
            src="/banner/leather.webp"
            alt="leather"
          />
        </Link>
      </div>
      <div className="w-full">
        <Link href="/category/food-beverage/home-hygiene">
          <Image
            width={800}
            height={800}
            className="rounded-xl object-cover w-full"
            src="/banner/detergent.webp"
            alt="detergent"
          />
        </Link>
      </div>
    </div>
  );
}
