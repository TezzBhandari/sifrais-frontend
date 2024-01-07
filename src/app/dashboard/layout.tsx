import type { Metadata } from "next";
import Dashboard from "./Dashboard/Dashboard";

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
      <Dashboard />
    </>
  );
}
