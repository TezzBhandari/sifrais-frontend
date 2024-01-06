import type { Metadata } from "next";
import { Inter, Mukta } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });
const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sifaris",
  description: "Sifaris System: Add more details later.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mukta.className}>
        {children}
        {/* container for showing toast  */}
        <ToastContainer />
        {/* it is used for modal, dialog, popup, etc  */}
        <div id="portal"></div>
      </body>
    </html>
  );
}
