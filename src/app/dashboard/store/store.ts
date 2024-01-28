import { create } from 'zustand';

//Create interface for Sidebar state.
interface Store {
  isSidebarOpen: boolean;
  setSidebarOpen: (newState: boolean) => void;
}

//Implemented using create.
const useSidebarToggle = create<Store>((set) => ({
  isSidebarOpen: false,
  setSidebarOpen: (newState) => set({ isSidebarOpen: newState }),
}));

export default useSidebarToggle;