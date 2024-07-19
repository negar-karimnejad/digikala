import { services } from "@/data/data";
import Image from "next/image";

export default function Services() {
  return (
    <div className="flex justify-between items-start my-8 px-4 !mx-auto w-full">
      {services.map((service) => (
        <div
          key={service.title}
          className="flex flex-col w-full gap-2 justify-center items-center"
        >
          <Image
            alt={service.title}
            width={55}
            height={55}
            src={service.image}
          />
          <p className="text-center text-xs w-14 leading-6">{service.title}</p>
        </div>
      ))}
    </div>
  );
}
