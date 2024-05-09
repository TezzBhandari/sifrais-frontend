'use client';
import useSidebarToggle from "@/app/dashboard/store/store";

function SidebarProvider({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen } = useSidebarToggle();


  //BACKGROUND COLOR TO BE bg-[#DDE4EE]

  return (
    <div
      style={{ width: `${isSidebarOpen ? "94%" : "82%"}`, position: "absolute", top: 90, left: `${isSidebarOpen ? "6%" : "18%"}`, zIndex: "-1", transition: "left 0.3s ease-in-out, width 0.3s ease-in-out" }}
    >
      {children}
    </div>
  );
}

export default SidebarProvider;