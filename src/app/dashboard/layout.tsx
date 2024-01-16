
import type { Metadata } from "next";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Sifaris Admin Dashboard",
  description: "Sifaris System: Add more details later.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
    <Sidebar />
    <div style={{width: "1100px" ,position: "absolute", top: 90, left: 300, zIndex: "-1"}}
         className="p-2 bg-[#DDE4EE]">
    {children}
    </div>
 

    </>
  );
}
