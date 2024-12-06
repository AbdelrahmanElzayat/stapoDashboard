// app/auth/layout.tsx
import { Almarai } from "next/font/google";
import "../globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={almarai.className}>
        <main className="min w-full h-screen">{children}</main>
      </body>
    </html>
  );
}
