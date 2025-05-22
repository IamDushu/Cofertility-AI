import type { Metadata } from "next";
import { Old_Standard_TT } from "next/font/google";
import "../globals.css";
// import Header from "../../components/Header";
// import { AnimatedSearchInput } from "@/src/components/AnimatedSearchInput";
// import { BackgroundGradient } from "@/src/components/BackgroundGradient";
// import { SidebarComponent } from "@/src/components/SidebarComponent";
import { Analytics } from "@vercel/analytics/next";
import { Lamp } from "@/src/components/Lamp";

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
  subsets: ["latin"],
  variable: "--font-oldStandard",
});

export const metadata: Metadata = {
  title: "Cofertility",
  description: "Cofertility AI Search - Donor search made easy",
};

export default function RootLayout({}: // children,
Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oldStandardFont.variable}`}>
      <body>
        <Lamp />
        {/* <SidebarComponent>
          <main className="bg-[#f5f4ee] w-[100vw]">
            <Header />
            <div className="w-full p-5 pb-10 sticky top-21 z-50 ">
              <BackgroundGradient containerClassName="w-fit mx-auto p-0.5 rounded-full">
                <AnimatedSearchInput
                  placeholders={[
                    "donors who are passionate about animals",
                    "donors interested in art",
                    "donors who love dogs",
                    "donors with red hair",
                    "donors not interested in having kids",
                    "donors who are introverts",
                    "donors who like Italian food",
                    "donors who have not donated eggs before",
                    "donors who are vegetarian",
                    "donors who are teachers",
                    "donors with blue eyes",
                    "donors who have medical background",
                    "donors who are very good at maths",
                    "donors with Jewish ancestry on the maternal side",
                    "donors who have dimples",
                    "donors with olive complexion",
                    "donors with a master's degree",
                    "donors with excellent vision",
                    "donors with siblings",
                  ]}
                />
              </BackgroundGradient>
            </div>
            {children}
          </main>
        </SidebarComponent> */}
        <Analytics />
      </body>
    </html>
  );
}
