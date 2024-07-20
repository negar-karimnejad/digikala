import React from "react";
import { Skeleton } from "../skeleton/skeleton";

export default function SearchSkeleton() {
  return (
    <div className="flex space-x-4 my-5">
      <Skeleton className="h-6 w-6 rounded-full ml-3" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-[200px]" />
        <Skeleton className="h-5 w-[250px]" />
      </div>
    </div>
  );
}
