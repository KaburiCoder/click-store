import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils/shadcn.util";
import React from "react";

export default function PaymentLoading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-x-4">
      <Card className={"p-4 shadow"}>
        <CardHeader>
          <CardTitle>결제 진행 중 입니다...</CardTitle>
          <CardDescription>잠시만 기다려주세요!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="w-30 h-4" />
            <Skeleton className="w-30 h-4" />
            <Skeleton className="w-30 h-4" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
