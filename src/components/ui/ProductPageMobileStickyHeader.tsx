"use client";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import persianLogo from "../../../public/logo/digi.svg";

export default function ProductPageMobileStickyHeader({
  productId,
}: {
  productId: string;
}) {
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState(() => {
    const allFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return allFavorites.includes(productId);
  });

  const toggleFavorite = () => {
    const allFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isCurrentlyFavorite = allFavorites.includes(productId);

    const updatedFavorites = isCurrentlyFavorite
      ? allFavorites.filter((id) => id !== productId)
      : [productId, ...allFavorites];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isCurrentlyFavorite);
  };

  return (
    <div className="flex z-10 justify-between lg:hidden items-center bg-white dark:bg-neutral-900 sticky top-0">
      <div className="flex items-center gap-2">
        <button onClick={() => router.back()}>
          <ArrowRight
            size={22}
            className="text-neutral-700 dark:text-neutral-100"
          />
        </button>
        <Link href="/">
          <Image alt="Logo" width={70} height={70} src={persianLogo} />
        </Link>
      </div>

      <div className="flex gap-5 items-center">
        <button>
          <ShoppingCart
            size={22}
            className="text-neutral-700 dark:text-neutral-100"
          />
        </button>
        <button
          onClick={(prev) => {
            setIsFavorite(!prev);
            toggleFavorite();
          }}
        >
          <Heart
            size={22}
            className={` ${
              isFavorite
                ? "text-red-500 fill-red-500"
                : "text-neutral-700 dark:text-neutral-100"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
