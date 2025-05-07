import type { Metadata } from "next";
import { Old_Standard_TT } from "next/font/google";
import "../globals.css";
import Header from "@/src/components/Header";

const oldStandardFont = Old_Standard_TT({
  weight: "400",
  variable: "--font-oldStandard",
});

export const metadata: Metadata = {
  title: "Cofertility",
  description: "Cofertility AI Search - Donor search made easy",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oldStandardFont.variable}`}>
      <body>
        <Header />
        <main className="bg-[#ffffff]">{children}</main>
      </body>
    </html>
  );
}
