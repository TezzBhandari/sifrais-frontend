import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Sifaris Dashboard",
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
      <main className="md:ml-52 mt-24">
        <div className="bg-[#dde4ee] min-h-[calc(100vh-6rem)] border border-red-400 overflow-hidden px-4 py-6">
          {children}
        </div>
      </main>
    </>
  );
}
