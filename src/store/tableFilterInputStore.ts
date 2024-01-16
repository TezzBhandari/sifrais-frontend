import { create } from "zustand";

export interface FilterInputState {
  filtering: string;
}

// action  related to the filter input
export interface FilterInputAction {
  setFiltering: (filteringText: FilterInputState["filtering"]) => void;
  resetFilter: () => void;
}

export const useTableFilterInputStore = create<
  FilterInputState & FilterInputAction
>()((set) => ({
  filtering: "",
  setFiltering: (filteringText) => set(() => ({ filtering: filteringText })),
  resetFilter: () => set(() => ({ filtering: "" })),
}));
