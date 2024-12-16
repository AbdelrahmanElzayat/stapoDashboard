// app/auth/layout.tsx
import { Almarai } from "next/font/google";
import "../globals.css";
import FooterAuth from "@/components/layout/FooterAuth";
import style from './login/login.module.css'
const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${almarai.className} ${style.bodyAuth}`}>
        <main className="min w-full h-screen">{children}</main>
        <FooterAuth />
      </body>
    </html>
  );
}
