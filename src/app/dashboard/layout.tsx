import React from 'react';
import type { Metadata } from "next";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import SidebarProvider from '@/providers/SidebarProvider';

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
      <SidebarProvider>
        <main className='p-8 min-h-[calc(100vh-90px)] overflow-hidden overflow-y-auto bg-[#dde4ee]'>{children}</main>
      </SidebarProvider>
    </>
  );
}
