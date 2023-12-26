import { create } from "zustand";

export interface AdminSearchBarData {
  dateFrom: Date;
  dateTo: Date;
  manager?: string;
  searchString?: string;
}

interface SearchBarState {
  searchData?: AdminSearchBarData;
  searchToggle?: boolean;
}

interface SearchBarAction {
  setSearchData: (searchData: AdminSearchBarData) => void;
  clear: () => void;
}

const initialState: SearchBarState = {
  searchData: undefined,
};

export const useAdminSearchBarStore = create<SearchBarState & SearchBarAction>(
  (set) => ({
    ...initialState,
    setSearchData: (searchData) =>
      set(({ searchToggle }) => ({ searchData, searchToggle: !searchToggle })),
    clear: () => set(initialState),
  }),
);
