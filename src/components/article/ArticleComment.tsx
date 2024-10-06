"use client";

import { CircleUserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function ArticleComment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [extendCommentBox, setExtendCommentBox] = useState(false);

  const commentBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        commentBoxRef.current &&
        !commentBoxRef.current.contains(event.target as Node)
      ) {
        setExtendCommentBox(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={commentBoxRef}>
      <h5 className="font-irsansb">دیدگاه شما</h5>
      <div
        onClick={() => setExtendCommentBox(true)}
        className={`border border-neutral-300 rounded-sm mt-5 px-8 py-5 ${
          extendCommentBox
            ? "bg-white dark:bg-neutral-800"
            : "bg-neutral-100 dark:bg-neutral-800"
        }`}
      >
        <div>
          <div className="relative flex gap-3 items-center">
            <CircleUserRound
              className="text-neutral-600 absolute -top-1 right-0"
              size={45}
              strokeWidth={0.85}
            />
            <span
              className={`text-neutral-400 mr-14 mt-2 ${
                extendCommentBox ? "hidden" : "block"
              }`}
            >
              دیدگاه
            </span>
          </div>
          {extendCommentBox && (
            <>
              <div className="flex max-lg:flex-col gap-3 w-full lg:pr-14 max-lg:pt-14">
                <input
                  type="text"
                  className="p-2 border flex-1 outline-none"
                  placeholder="نام *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="p-2 border flex-1 outline-none"
                  placeholder="ایمیل *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  placeholder="دیدگاه"
                  className="mt-8 w-full overflow-visible outline-none bg-transparent flex items-center justify-center resize-none"
                  name=""
                  id=""
                  rows={5}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <Separator className="my-2" />
                <div className="flex justify-end">
                  <Button variant="outline">ارسال دیدگاه</Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
