import Image from "next/image";
import Link from "next/link";

export function FirstBanner() {
  return (
    <div className="mx-3 mt-5 grid grid-cols-12 gap-4">
      <div className="col-span-3 max-lg:col-span-6">
        <Link href="/category/motorbike">
          <Image
            width={500}
            height={500}
            className="rounded-xl object-cover"
            src="/banner/motor.webp"
            alt="motor"
          />
        </Link>
      </div>
      <div className="col-span-3 max-lg:col-span-6">
        <Link href="/category/mobile">
          <Image
            width={500}
            height={500}
            className="rounded-xl object-cover"
            src="/banner/mobile.webp"
            alt="mobile"
          />
        </Link>
      </div>
      <div className="col-span-3 max-lg:col-span-6">
        <Link href="/search/detergent/softlan">
          <Image
            width={500}
            height={500}
            className="rounded-xl object-cover"
            src="/banner/softlan.webp"
            alt="softlan"
          />
        </Link>
      </div>
      <div className="col-span-3 max-lg:col-span-6">
        <Link href="/search/skin-care/sunscreen-cream">
          <Image
            width={500}
            height={500}
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
        <Link href="/search/personal-appliance/sanitary-pad">
          <Image
            width={500}
            height={500}
            className="rounded-xl object-cover w-full"
            src="/banner/my-lady.webp"
            alt="my-lady"
          />
        </Link>
      </div>
      <div className="w-full">
        <Link href="/search/home-appliance/hadron">
          <Image
            width={500}
            height={500}
            className="rounded-xl object-cover w-full"
            src="/banner/hadron.gif"
            alt="hadron"
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
            width={500}
            height={500}
            className="rounded-xl object-cover w-full"
            src="/banner/leather.webp"
            alt="leather"
          />
        </Link>
      </div>
      <div className="w-full">
        <Link href="/category/detergent">
          <Image
            width={500}
            height={500}
            className="rounded-xl object-cover w-full"
            src="/banner/detergent.webp"
            alt="detergent"
          />
        </Link>
      </div>
    </div>
  );
}
