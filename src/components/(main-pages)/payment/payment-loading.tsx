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
    <div className="flex flex-col justify-center items-center space-x-4 w-full h-full">
      <Card className={'p-4 shadow'}>
        <CardHeader>
          <CardTitle>결제 진행 중 입니다...</CardTitle>
          <CardDescription>잠시만 기다려주세요!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-4 w-30" />
            <Skeleton className="h-4 w-30" />
            <Skeleton className="h-4 w-30" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
