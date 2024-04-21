import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetME",
  description: "An online live chating application | MetME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OpenSans.className} bg-dark-1 text-white` }>{children}</body>
    </html>
  );
}
