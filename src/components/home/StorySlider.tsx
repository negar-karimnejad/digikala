import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import cover from "../../../public/chart.webp";
const stories = [
  { id: 1, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 2, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 3, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 4, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 5, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 6, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 7, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 8, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 9, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 10, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 11, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 12, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 13, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 14, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
  { id: 15, title: "تجهیزات یوگا", cover: cover, posts: [cover] },
];

export default function StorySlider() {
  return (
    <div className="mt-5">
      <Carousel
        opts={{
          align: "start",
          direction: "rtl",
        }}
        className="w-full"
      >
        <CarouselContent>
          {stories.map((story) => (
            <CarouselItem
              key={story.id}
              className="cursor-pointer basis-1/12 p-0"
            >
              <div className="p-1">
                <div className="relative border w-20 h-20 border-rose-800 rounded-full">
                  <Image
                    src={story.cover}
                    width={300}
                    height={300}
                    alt={story.title}
                    className="absolute top-2 left-2 right-2 bottom-2 object-cover rounded-full"
                  />
                </div>

                <span className="text-sm">{story.title}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="right-3 bottom-0 !opacity-100 !bg-white w-10 h-10" />
        <CarouselPrevious className="left-3 bottom-0 !opacity-100 !bg-white w-10 h-10" />
      </Carousel>
    </div>
  );
}
