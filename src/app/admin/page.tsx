import Image from "next/image";
import React from "react";
import chart from "../../../public/chart.webp";

export default function AdminPage() {
  return (
    <div className="border w-full h-full rounded-md flex flex-col items-center justify-center">
      <Image alt="chart" src={chart} width={"200"} height={"200"} />
      <p>آنالیز وضعیت</p>
      <p className="text-orange-600">(به زودی)</p>
    </div>
  );
}
