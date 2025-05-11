import type { Metadata } from "next";
import { Old_Standard_TT } from "next/font/google";
import "../globals.css";
import Header from "../../components/Header";
import { AnimatedSearchInput } from "@/src/components/AnimatedSearchInput";
import { BackgroundGradient } from "@/src/components/BackgroundGradient";
import { SidebarComponent } from "@/src/components/SidebarComponent";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const oldStandardFont = Old_Standard_TT({
  weight: "400",
  variable: "--font-oldStandard",
});

export const metadata: Metadata = {
  title: "Cofertility",
  description: "Cofertility AI Search - Donor search made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oldStandardFont.variable}`}>
      <body>
        <SidebarComponent>
          <main className="bg-[#f5f4ee]">
            <Header />
            <div className="w-full p-5 pb-10 sticky top-21 z-50 ">
              {/* <SearchInput /> */}
              <BackgroundGradient containerClassName="w-fit mx-auto p-0.5 rounded-full">
                <AnimatedSearchInput
                  placeholders={[
                    "donors who have wavy hair",
                    "donors who are interested in maths",
                    "donors who like cycling",
                  ]}
                />
              </BackgroundGradient>
            </div>
            {children}
          </main>
        </SidebarComponent>
      </body>
    </html>
  );
}
