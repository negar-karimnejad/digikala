import { services } from "@/data/data";
import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <div className="flex gap-5 justify-between my-10">
      {services.map((service) => (
        <div
          key={service.title}
          className="flex flex-col w-full gap-2 items-center justify-center"
        >
          <Image
            alt={service.title}
            width={50}
            height={50}
            src={service.image}
          />
          <p className="text-center text-sm w-10">{service.title}</p>
        </div>
      ))}
    </div>
  );
}
