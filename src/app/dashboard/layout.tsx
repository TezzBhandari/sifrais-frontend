import type { Metadata } from "next";
import Dashboard from "./Dashboard/Dashboard";
import Container from "./Container/Container";

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
      <Dashboard />
    </>
  );
}
