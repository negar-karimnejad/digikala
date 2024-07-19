import { services } from "@/data/data";
import Image from "next/image";
import React from "react";
import Container from "../ui/container";

export default function Services() {
  return (
    <Container>
      <div className="flex justify-between items-start my-10">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col w-full gap-2 justify-center"
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
    </Container>
  );
}
