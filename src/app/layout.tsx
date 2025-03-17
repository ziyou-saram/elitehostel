import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "@/app/globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Elite Hostel – уютный и доступный хостел в старом центре города",
  description: "Бронируйте комфортные номера в Elite Hostel. Мы предлагаем уютные комнаты, удобное расположение и отличные условия проживания.",
  keywords: "хостел, бюджетное жилье, гостиница, бронирование, недорогой отель, центр города, Elite Hostel",
  authors: [{ name: "Elite Hostel", url: "https://elitehostel.kz" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${onest.variable} antialiased scroll-smooth`}
      >
        <main className="max-w-7xl mx-auto grid gap-16 px-4 md:px-6 scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );
}
