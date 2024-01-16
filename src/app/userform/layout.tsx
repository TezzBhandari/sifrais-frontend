import type { Metadata } from "next";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";


export const metadata: Metadata = {
  title: "User Form",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-10 bg-slate-200">
      <div className="p-5 bg-white" style={{ borderRadius: "15px" }}>
        {children}
      </div>
    </div>
  );
}
