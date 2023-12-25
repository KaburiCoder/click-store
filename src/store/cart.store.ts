import { create } from "zustand";

type State = {
  itemCountChanged: boolean;
};
type Actions = {
  toggleItemsCountChanged: () => void;
};

const initialState: State = {
  itemCountChanged: false,
};

const useCartStore = create<State & Actions>((set) => ({
  ...initialState,
  toggleItemsCountChanged: () =>
    set(({ itemCountChanged: prevChanged }) => ({
      itemCountChanged: !prevChanged,
    })),
}));

export default useCartStore;
