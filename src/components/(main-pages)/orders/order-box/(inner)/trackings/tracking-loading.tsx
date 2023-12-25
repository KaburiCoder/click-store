"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function TrackingLoading() {
  return (
    <div>
      <Skeleton className="mb-2 h-10 w-full" />
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex">
          <Skeleton className="mb-2 mr-2 h-4 w-20" />
          <Skeleton className="mb-2 h-4 w-40" />
        </div>
      ))}
      {[...Array(3)].map((_, i) => (
        <Skeleton key={i} className="mb-2 h-6 w-full" />
      ))}
    </div>
  );
}
