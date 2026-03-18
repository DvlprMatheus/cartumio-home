import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalProviders } from "../providers/global-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cartumio",
  description: "O Cartumio é um projeto de correio digital que resgata a experiência " +
    "afetiva do envio e recebimento de cartas, inspirada nos tempos antigos.",
  authors: [{ name: "Matheus Cruz", url: "https://github.com/DvlprMatheus" }],
  keywords: ["cartumio", "correio digital", "cartas", "tempos antigos", "projeto"],
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
