import { create } from "zustand";

export interface FilterInputState {
  filtering: string;
}

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
