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
      <main className="md:ml-52 border border-r-emerald-500 mt-24">
        {children}
      </main>
    </>
  );
}
