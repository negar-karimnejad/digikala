"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Modal from "../ui/Modal";
import { Story } from "@/utils/types";

interface StorySliderProps {
  stories: Story[];
}

export default function StorySlider({ stories }: StorySliderProps) {
  const [isShowStory, setIsShowStory] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | undefined>();

  const closeModalHandler = () => setIsShowStory(false);

  const nextStoryHandler = () => {
    if (selectedStory) {
      const currentIndex = stories.findIndex(
        (story) => story._id === selectedStory._id
      );
      const nextIndex = (currentIndex + 1) % stories.length;
      setSelectedStory(stories[nextIndex]);
    }
  };

  const prevStoryHandler = () => {
    if (selectedStory) {
      const currentIndex = stories.findIndex(
        (story) => story._id === selectedStory._id
      );
      const prevIndex = (currentIndex - 1 + stories.length) % stories.length;
      setSelectedStory(stories[prevIndex]);
    }
  };

  return (
    <>
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
                key={story._id}
                className="cursor-pointer basis-auto p-0 mx-2"
                onClick={() => {
                  setSelectedStory(story);
                  setIsShowStory(true);
                }}
              >
                <div className="p-2">
                  <div className="w-20 h-20 rounded-full ring-2 ring-fuchsia-700 ring-offset-4">
                    <Image
                      src={story.cover}
                      width={300}
                      height={300}
                      alt={story.title}
                      className="object-cover h-full w-full rounded-full"
                    />
                  </div>
                  <div className="text-xs w-20 pt-3 text-center">
                    {story.title}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-3 top-20 w-10 h-10" />
          <CarouselPrevious className="left-3 top-20 w-10 h-10" />
        </Carousel>
      </div>
      <div>
        <Modal
          isStory={true}
          isOpen={isShowStory}
          closeModalHandler={closeModalHandler}
        >
          {selectedStory != null && (
            <div className="relative">
              <div className="w-full h-[29rem] pt-5">
                <Image
                  src={selectedStory?.post}
                  width={700}
                  height={700}
                  alt={selectedStory.title}
                  className="h-full w-full object-cover"
                />
                <div className="text-lg text-white font-irsansb pt-5 text-center">
                  {selectedStory.title}
                </div>
              </div>
              <button
                onClick={nextStoryHandler}
                className="absolute w-10 h-10 sm:-right-32 max-sm:-right-3 top-64 bg-white p-2 rounded-full"
              >
                <ChevronRight />
              </button>
              <button
                onClick={prevStoryHandler}
                className="absolute w-10 h-10 sm:-left-32 max-sm:-left-3 top-64 bg-white p-2 rounded-full"
              >
                <ChevronLeft />
              </button>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}
