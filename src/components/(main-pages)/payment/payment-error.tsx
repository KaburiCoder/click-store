import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

interface Props {
  error: string;
}

export default function PaymentError({ error }: Props) {
  return (
    <div className="  flex-center h-full hover:text-red-50 px-4">
      <Card className={"p-4 shadow bg-fuchsia-50"}>
        <CardHeader>
          <CardTitle className="text-red-500">결제 중 오류가 발생했습니다...</CardTitle>
          <CardDescription>담당자에게 연락 바랍니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold text-red-500">오류 내용</div>
          <div className="text-red-500">{error}</div>
        </CardContent>
        <CardFooter>
          <Button variant="destructive" className="w-full">메인으로</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
