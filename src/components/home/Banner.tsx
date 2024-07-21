import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div>
      <Image
        width={200}
        height={200}
        src={"/../../../../softlan.webp"}
        alt=""
      />
    </div>
  );
}
