import Image from "next/image";
import React from "react";
import { photos } from "../page";

function SingleImaage({ params }: { params: { id: number } }) {
  const photo = photos.find((photo) => photo.id === params.id);
  if (!photo) return null;
  return (
    <div className="bg-black/50 fixed top-0 right-0 w-full h-screen flex items-center justify-center flex-col">
      <Image src={photo.src} alt="image" width={250} height={250} />
      <div className="bg-white p-2 my-2 text-black">
        <p>photo by: {photo.photographer}</p>
        <p>{photo.city}</p>
      </div>
    </div>
  );
}

export default SingleImaage;
