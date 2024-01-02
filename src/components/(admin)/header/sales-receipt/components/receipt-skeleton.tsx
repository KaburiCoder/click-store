import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

export default function ReceiptSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between pb-8 pt-2">
        <Skeleton className="h-8 w-52" />

        <div className="flex gap-2">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>

      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />
      <Separator className="my-2" />
      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />
      <TextSkeleton />

      <Skeleton className="my-2 h-10 w-full" />
    </div>
  );
}

function TextSkeleton() {
  return (
    <div className="flex items-start justify-between py-1 text-sm">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-6 w-32" />
    </div>
  );
}
