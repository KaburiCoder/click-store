"use client";
import React, { useEffect, useRef, useState } from "react";
import { bankData } from "@/lib/datas/bank-data";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
  dialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Payment } from "@/db/models/payment";
import { QKey } from "@/db/keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { refundPaymentAction } from "@/db/client-actions/refund-order.action";
import { toast } from "react-toastify";
import { InputL } from "@/components/ui/custom/input-l";
import { stringsToText } from "@/lib/utils/strings.util";
import LabelWrapper from "@/components/ui/custom/label-wrapper";
import ErrorText from "@/components/(shared)/error-text";

interface Props {
  triggerComponent: React.ReactNode;
  title: string;
  payment: Payment;
}
export default function RefundDialog({
  payment,
  triggerComponent,
  title,
}: Props) {
  const { data, isPending, refundOrder } = useRefund(payment);
  const [bank, setBank] = useState("");
  const accNumRef = useRef<HTMLInputElement>(null);
  const holderRef = useRef<HTMLInputElement>(null);

  const { errors } = data || {};

  function handleRefund(): void {
    const accountNumber = accNumRef?.current?.value ?? "";
    const holderName = holderRef?.current?.value ?? "";
    refundOrder({
      cancelAmount: payment.amount,
      accountNumber,
      bank,
      holderName,
    });
  }

  useEffect(() => {
    if (!isPending && !data?.errors) {
      dialogClose();
    }
  }, [data?.errors, isPending]);

  return (
    <Dialog>
      <DialogTrigger asChild>{triggerComponent}</DialogTrigger>
      <DialogContent className="max-w-[20rem]">
        <DialogHeader>
          <DialogTitle className="mb-4">{title}</DialogTitle>
          <DialogDescription>
            <div className="space-y-1">
              <LabelWrapper
                label="은행"
                htmlFor="bank"
                errorMessage={stringsToText(errors?.bank)}
              >
                <Select onValueChange={setBank}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="은행" id="bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>-- 은행 선택 --</SelectLabel>
                      {[...Object.keys(bankData)].map((bankCode, i) => (
                        <SelectItem key={i} value={bankCode}>
                          {bankData[bankCode]}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </LabelWrapper>

              <InputL
                ref={accNumRef}
                id="accountNumber"
                label="계좌번호"
                placeholder="계좌번호"
                className="w-full"
                errorMessage={stringsToText(errors?.accountNumber)}
              />
              <InputL
                ref={holderRef}
                id="holderName"
                label="예금주"
                placeholder="예금주"
                className="w-full"
                errorMessage={stringsToText(errors?.holderName)}
              />
              <div className="rounded bg-blue-200 p-2">
                영업일 기준 약 2~7일 소요됩니다.
              </div>
              <ErrorText errorMessage={data?.errors?._errorMessage} />
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"destructive"} className="mt-1">
              닫기
            </Button>
          </DialogClose>
          <Button className="mt-1" onClick={handleRefund} disabled={isPending}>
            취소(환불요청)
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const useRefund = (payment: Payment) => {
  const { error, isPending, isSuccess, data, mutate } = useMutation({
    mutationFn: refundPaymentAction,
    gcTime: 0,
  });
  const queryClient = useQueryClient();

  interface RefundOrderArgs {
    accountNumber: string;
    bank: string;
    holderName: string;
    cancelAmount: number;
  }

  function refundOrder({
    accountNumber,
    bank,
    holderName,
    cancelAmount,
  }: RefundOrderArgs) {
    mutate({
      accountNumber,
      bank,
      holderName,
      cancelAmount,
      cancelReason: ".",
      paymentId: payment.id!,
      paymentKey: payment.paymentKey,
    });
  }

  useEffect(() => {
    if (isSuccess)
      queryClient.refetchQueries({ queryKey: [QKey.ordersInfiniteQuery] });
  }, [isSuccess, queryClient]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return { data, isPending, refundOrder };
};
