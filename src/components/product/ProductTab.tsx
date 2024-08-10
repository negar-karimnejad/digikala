"use client";

import { useRef } from "react";

export default function ProductTab() {

  return (
    <div className="" ref={featureRef}>
      <ul className="text-sm text-neutral-600 cursor-pointer flex items-center gap-8 border-b pb-3">
        <li>مشخصات</li>
        <li>دیدگاه‌ها</li>
        <li>پرسش‌ها</li>
      </ul>
    </div>
  );
}
