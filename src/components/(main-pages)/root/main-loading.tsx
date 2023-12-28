import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function MainLoading() {
  const boxes = [1, 2, 3, 4, 5];
  const skeletons = Array.from({ length: 4 }, (_, i) => i);

  return (
    <div className="m-2 flex flex-col gap-4 mt-10">
      {boxes.map((box) => (
        <div key={box} className="flex flex-wrap gap-6 rounded p-6 shadow-lg">
          {skeletons.map((skel) => (
            <div key={skel} className="flex h-72 w-56 flex-col p-4 shadow-lg">
              <Skeleton className="h-full w-full" />
              <div className="mt-2 flex flex-col gap-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
