import { Loader2 } from "lucide-react";
import React from "react";

export default function CenterLoader2() {
  return (
    <div className="flex-center p-2">
      <Loader2 className="h-6 w-6 animate-spin" />
    </div>
  );
}
