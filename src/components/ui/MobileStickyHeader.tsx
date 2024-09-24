"use client";

import { ArrowRight, Search, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function MobileStickyHeader() {
  const router = useRouter();

  // Function to handle link copy
  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("لینک صفحه با موفقیت کپی شد.");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex z-10 justify-between lg:hidden items-center bg-white dark:bg-neutral-900 p-5 sticky top-0">
      <button onClick={() => router.back()}>
        <ArrowRight
          size={22}
          className="text-neutral-700 dark:text-neutral-100"
        />
      </button>
      <div className="flex gap-8 items-center">
        <button>
          <Search
            size={22}
            className="text-neutral-700 dark:text-neutral-100"
          />
        </button>
        <button onClick={handleShareClick}>
          <Share2
            size={22}
            className="text-neutral-700 dark:text-neutral-100"
          />
        </button>
      </div>
    </div>
  );
}
