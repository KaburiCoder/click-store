import { useCallback, useEffect, useRef } from "react";
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
} from "@tosspayments/payment-widget-sdk";

import { getUser } from "../utils/user.util";
import { getOrderId } from "../utils/toss-pg.util";
import { useEnv } from "./use-env";

interface Props {
  orderName: string;
  totalPrice: number;
}

interface Callback {
  onPreCall: () => void;
  onFail: (error: unknown) => void;
}

const selector = "#payment-widget";

const useTossWidget = ({ totalPrice, orderName }: Props) => {
  const env = useEnv();
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);

  const fetchCheckout = useCallback(
    async (callback: Callback) => {
      const paymentWidget = paymentWidgetRef.current;
      const user = await getUser();
      const orderId = getOrderId();

      try {
        callback.onPreCall();
        // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
        await paymentWidget?.requestPayment({
          orderId,
          orderName,
          customerName: user?.name,
          customerEmail: user?.email,
          successUrl: `${window.location.href}/loading`,
          failUrl: `${window.location.href}/fail`,
        });
      } catch (error) {
        callback.onFail(error);
      }
    },
    [orderName],
  );

  useEffect(() => {
    async function setPaymentWidgets() {
      const user = await getUser();
      if (!env) return;
      if (!user) {
        throw new Error("권한 없음");
      }

      // ------  결제위젯 초기화 ------
      // 비회원 결제에는 customerKey 대신 ANONYMOUS를 사용하세요.
      const customerKey = user.userId;
      const paymentWidget = await loadPaymentWidget(
        env.TOSS_CLIENT_KEY,
        customerKey,
      ); // 회원 결제
      // const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS); // 비회원 결제

      // ------  결제위젯 렌더링 ------
      // https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        selector,
        {
          value: totalPrice,
        },
      );

      // ------  이용약관 렌더링 ------
      // https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자BOX
      paymentWidget.renderAgreement("#agreement");

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    }

    if (totalPrice > 0) setPaymentWidgets();
  }, [env, totalPrice, fetchCheckout]);

  return {
    fetchCheckout,
  };
};

export default useTossWidget;
