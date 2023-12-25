import { Cart } from "@/db/models/cart";
import { CartItem } from "@/db/models/cart-item";
import { create } from "zustand";

type State = {
  cart?: Cart;
  selectedCartItems?: CartItem[];
  loading: boolean;
  checkedIds: number[];
  checkBNPL: boolean;
  initialized: boolean;
};

type Action = {
  setCart: (cart?: Cart) => void;
  setSelectedCartItems: (cartItems?: CartItem[]) => void;
  setLoading: (loading: boolean) => void;
  setCheck: (id: number, checked: boolean) => void;
  setCheckAll: (checked: boolean) => void;
  setCheckBNPL: (checked: boolean) => void;
  setInitialized: () => void;
  clear: () => void;
};

const initialState: State = {
  cart: undefined,
  loading: false,
  checkedIds: [],
  checkBNPL: false,
  initialized: false,
};

const useCartViewStore = create<State & Action>((set) => ({
  ...initialState,
  setCart: (cart) => set(() => ({ cart: cart })),
  setLoading: (loading) => set(() => ({ loading: loading })),
  setCheck: (id, checked) =>
    set((state) => {
      const newIds = [...state.checkedIds];

      if (checked) {
        newIds.push(id);
      } else {
        const findIndex = newIds.findIndex((pId) => pId === id);
        newIds.splice(findIndex, 1);
      }

      return { checkedIds: newIds };
    }),
  setCheckAll: (checked) =>
    set((state) => {
      let ids: number[] | undefined;

      if (checked) {
        ids = state.cart?.cartItems?.map((ci) => ci.id!);
      }

      return { checkedIds: ids ?? [] };
    }),
  setCheckBNPL: (checked) => set({ checkBNPL: checked }),
  setSelectedCartItems: (cartItems) => set({ selectedCartItems: cartItems }),
  setInitialized: () => set({ initialized: true }),
  clear: () => set(initialState),
}));

export default useCartViewStore;
