import { paymentBNPLAction } from "@/db/client-actions/payment-bnpl.action";
import { paymentAction } from "@/db/client-actions/payment.action";
import { PaymentItem } from "@/db/models/payment-item";
import { deleteCartItems } from "@/db/services/cart-item.service";
import { paths } from "@/paths";
import useCartStore from "@/store/cart.store";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FetchPaymentArgs {
  amount: number;
  quantity: number;
  orderId: string;
  paymentKey: string;
  paymentItems: PaymentItem[];
  cartItemIds: number[];
}

interface FetchBNPLPaymentArgs extends FetchPaymentArgs {
  paymentType: string;
  orderName: string;
  method: string;
  sendType: string;
  requestedAt: Date | null;
  approvedAt: Date | null;
}

interface FetchingArgs {
  orderId: string;
  cartItemIds: number[];
}

export const useFetchPayment = () => {
  const { push } = useRouter();
  const [error, setError] = useState<string>();
  const { toggleItemsCountChanged } = useCartStore();

  let fetcher: Promise<{ errors: any[] } | undefined>;

  async function fetching({ orderId, cartItemIds }: FetchingArgs) {
    try {
      const result = await fetcher;
      if (result?.errors) {
        throw new Error(result.errors.join(", "));
      }

      await deleteCartItems(cartItemIds);
      toggleItemsCountChanged();
      push(paths.paymentSuccess(orderId));
    } catch (error: any) {
      setError(error.message);
    }
  }

  async function fetchPayment(args: FetchPaymentArgs) {
    fetcher = paymentAction({ ...args });
    await fetching({ orderId: args.orderId, cartItemIds: args.cartItemIds });
  }

  async function fetchBNPLPayment(args: FetchBNPLPaymentArgs) {
    fetcher = paymentBNPLAction({ ...args });
    await fetching({ orderId: args.orderId, cartItemIds: args.cartItemIds });
  }

  return {
    error,
    fetchPayment,
    fetchBNPLPayment,
  };
};
