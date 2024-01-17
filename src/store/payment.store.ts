import { PaymentItem } from "@/db/models/payment-item";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Actions = {
  setPaymentState: (data: PaymentState) => void;
  setCartItemIds: (ids: number[]) => void;
  clear: () => void;
};

const initialState: PaymentState = {
  quantity: 0,
  orderName: "",
  paymentItems: [],
  cartItemIds: [],
  orderRequestMessage: undefined,
};

const usePaymentStore = create(
  persist<PaymentState & Actions>(
    (set) => ({
      ...initialState,
      setPaymentState: (data) => set(() => ({ ...data })),
      setCartItemIds: (ids) => set(() => ({ cartItemIds: ids })),
      clear: () => set(initialState),
    }),
    {
      name: "paymentStoreData",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export type PaymentState = {
  quantity: number;
  orderName: string;
  paymentItems: PaymentItem[];
  cartItemIds: number[];
  orderRequestMessage?: string;
};
export default usePaymentStore;
