import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import AuthProvider from "@/src/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MIR 2024",
  description: "미르의전설 패왕전의 부활",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="portal" />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
