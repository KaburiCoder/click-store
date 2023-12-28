import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { paths } from "@/paths";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  error: string;
}

export default function PaymentError({ error }: Props) {
  const { push } = useRouter();
  function handleToMain(): void {
    push(paths.root());
  }

  return (
    <div className="  flex-center h-full px-4 hover:text-red-50">
      <Card className={"bg-fuchsia-50 p-4 shadow"}>
        <CardHeader>
          <CardTitle className="text-red-500">
            결제 중 오류가 발생했습니다...
          </CardTitle>
          <CardDescription>담당자에게 연락 바랍니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-lg font-bold text-red-500">오류 내용</div>
          <div className="text-red-500">{error}</div>
        </CardContent>
        <CardFooter>
          <Button
            variant="destructive"
            className="w-full"
            onClick={handleToMain}
          >
            메인으로
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
