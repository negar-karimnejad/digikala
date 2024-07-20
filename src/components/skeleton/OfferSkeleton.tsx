function OfferSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="skeleton h-52 w-full rounded-3xl dark:bg-gray-800"></div>
      <div className="skeleton h-4 w-5/6 dark:bg-gray-800"></div>
      <div className="skeleton h-4 w-5/6 dark:bg-gray-800"></div>
    </div>
  );
}

export default OfferSkeleton;
