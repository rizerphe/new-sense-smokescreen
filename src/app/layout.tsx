import "../app/globals.css";
import Navbar from "../components/navbar";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata = {
  title: "NewSense",
  description: "A news aggregator for the modern web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
