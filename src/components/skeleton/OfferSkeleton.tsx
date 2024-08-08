import { Skeleton } from "./skeleton";

function OfferSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Skeleton className="rounded-none h-72 w-full" />
      {/* <Skeleton className="h-4 w-5/6 rounded-lg" />
      <Skeleton className="h-4 w-5/6 rounded-lg" /> */}
    </div>
  );
}

export default OfferSkeleton;
