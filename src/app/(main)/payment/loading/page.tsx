"use client";
import PaymentError from "@/components/(main-pages)/payment/payment-error";
import PaymentLoading from "@/components/(main-pages)/payment/payment-loading";
import { paymentAction } from "@/db/client-actions/payment.action";
import { useFetchPayment } from "@/lib/hooks/use-fetch-payment";
import usePaymentStore from "@/store/payment.store";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

let isActionCalled = false;

export default function PaymentLoadingPage() {
  const params = useSearchParams();
  const { quantity, paymentItems, cartItemIds, clear } = usePaymentStore();
  const { error, fetchPayment } = useFetchPayment();
  useEffect(() => {
    return clear;
  }, [clear]);

  useEffect(() => {
    const paymentType = params.get("paymentType");
    const orderId = params.get("orderId");
    const paymentKey = params.get("paymentKey");
    const amount = params.get("amount");

    if (
      !paymentType ||
      !orderId ||
      !paymentKey ||
      !amount ||
      !paymentItems ||
      paymentItems.length === 0 ||
      isActionCalled
    )
      return;

    isActionCalled = true;

    fetchPayment({
      amount: parseInt(amount),
      quantity,
      orderId: orderId!,
      paymentKey: paymentKey!,
      paymentItems,
      cartItemIds,
    });
  }, [params, paymentItems, quantity, cartItemIds]);

  return <>{error ? <PaymentError error={error} /> : <PaymentLoading />}</>;
}
