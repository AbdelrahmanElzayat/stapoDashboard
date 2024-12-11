import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Almarai } from "next/font/google";
import "../globals.css";
import SideBar from "@/components/layout/SideBar";
import Header from "@/components/layout/Header";
import { MenuProvider } from "@/utils/MenuContext";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";


const inter = Inter({ subsets: ["latin"] });
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Stapo",
  description: "Stapo Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${almarai.className} bg-backgroundPrimary overflow-x-hidden`}
      >
        <MenuProvider>
          <div className="flex gap-8 px-4 py-4">
            <SideBar />
            <div className="main-content px-6 py-5 flex flex-col items-start flex-1 bg-white rounded-xl overflow-hidden">
              <Header />
              <main className="w-full">{children}</main>
            </div>
          </div>
        </MenuProvider>
      </body>
    </html>
  );
}
