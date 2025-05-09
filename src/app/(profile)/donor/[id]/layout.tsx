import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cofertility",
  description: "Cofertility AI Search - Donor search made easy",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-[#faf9f5]">{children}</div>;
}
