import { create } from "zustand";

type State = {
  cookieChanged: boolean;
};
type Actions = {
  toggleCookie: () => void;
};

const initialState: State = {
  cookieChanged: false,
};

const useSvrCookieStore = create<State & Actions>((set) => ({
  ...initialState,
  toggleCookie: () =>
    set(({ cookieChanged }) => ({
      cookieChanged: !cookieChanged,
    })),
}));

export default useSvrCookieStore;
