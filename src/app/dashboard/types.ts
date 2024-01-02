
export type TSidebar = {
    isSidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type TContainer = {
    isSidebarOpen: boolean;
  }

export type TArrow = {
    setArrowDown: React.Dispatch<React.SetStateAction<boolean>>;
    setClickedArrow: React.Dispatch<React.SetStateAction<number>>
    sideElementId: number;
    sideElementName: string;
}