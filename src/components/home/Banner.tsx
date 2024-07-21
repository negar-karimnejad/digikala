import Image from "next/image";

export function FirstBanner() {
  return (
    <div className="mx-3 mt-5 grid grid-cols-12 gap-4">
      <Image
        width={500}
        height={500}
        className="rounded-xl object-cover col-span-3 max-lg:col-span-6"
        src="/banner/motor.webp"
        alt="motor"
      />
      <Image
        width={500}
        height={500}
        className="rounded-xl object-cover col-span-3 max-lg:col-span-6"
        src="/banner/mobile.webp"
        alt="mobile"
      />
      <Image
        width={500}
        height={500}
        className="rounded-xl object-cover col-span-3 max-lg:col-span-6"
        src="/banner/softlan.webp"
        alt="softlan"
      />
      <Image
        width={500}
        height={500}
        className="rounded-xl object-cover col-span-3 max-lg:col-span-6"
        src="/banner/suncream.webp"
        alt="suncream"
      />
    </div>
  );
}

export function MiddleBanner() {
  return (
    <div className="mx-3 mt-5 flex max-lg:flex-col gap-4">
      <Image
        width={500}
        height={500}
        className="rounded-xl object-cover flex-1 max-lg:w-full"
        src="/banner/my-lady.webp"
        alt="my-lady"
      />
      <Image
        width={500}
        height={500}
        className="rounded-xl object-cover flex-1 max-lg:w-full"
        src="/banner/hadron.gif"
        alt="hadron"
      />
    </div>
  );
}
export function LastBanner() {
  return (
    <div className="mx-3 mt-5 flex max-lg:flex-col gap-4">
      <Image
        width={500}
        height={500}
        className="rounded-xl object-cover flex-1 max-lg:w-full"
        src="/banner/leather.webp"
        alt="leather"
      />
      <Image
        width={500}
        height={500}
        className="rounded-xl object-cover flex-1 max-lg:w-full"
        src="/banner/detergent.webp"
        alt="detergent"
      />
    </div>
  );
}
