import Image from "next/image";
import Link from "next/link";
import React from "react";
export const photos = [
  {
    id: 1,
    src: "/post (1).jpeg",
    href: "/photo-feed/1",
    city: "Jordan",
    photographer: "negar karimnejad",
  },
  {
    id: 2,
    src: "/post (2).jpeg",
    href: "/photo-feed/2",
    city: "Newyork",
    photographer: "piter golden",
  },
  {
    id: 3,
    src: "/post (3).jpeg",
    href: "/photo-feed/3",
    city: "London",
    photographer: "jaun foo",
  },
  {
    id: 4,
    src: "/post (4).jpeg",
    href: "/photo-feed/4",
    city: "Turkey",
    photographer: "aj huge",
  },
  {
    id: 5,
    src: "/post (5).jpeg",
    href: "/photo-feed/5",
    city: "Yemen",
    photographer: "koosha patar",
  },
  {
    id: 6,
    src: "/post (6).jpeg",
    href: "/photo-feed/6",
    city: "India",
    photographer: "ferra harry",
  },
  {
    id: 7,
    src: "/post (7).jpeg",
    href: "/photo-feed/7",
    city: "Masachuset",
    photographer: "sery key",
  },
];
function Photos() {
  return (
    <div className="flex gap-2 flex-wrap h-96 overflow-y-auto">
      {photos.map((photo) => (
        <Link key={photo.src} href={photo.href}>
          <Image src={photo.src} alt="image" width={250} height={200} />
        </Link>
      ))}
    </div>
  );
}

export default Photos;
