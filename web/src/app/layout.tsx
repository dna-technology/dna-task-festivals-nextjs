import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from '@/app/components/Header';
import './global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Festivals",
  description: "Buy a ticket for your desired festival!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div style={{ padding: 8 }}>
            {children}
        </div>
      </body>
    </html>
  );
}
