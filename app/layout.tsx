import type { Metadata } from "next";
// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
// import dynamic from 'next/dynamic'
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SessionProvider } from "@/context/SessionContext";

// const Navbar = dynamic(() => import('@/components/navbar').then(mod => mod.Navbar), {
//   ssr: false
// })

export const metadata: Metadata = {
  title: "Devs Do Code",
  description:
    "A collaborative platform for developers to code, learn, and build together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` bg-[#121212] text-white antialiased`}>
        <SessionProvider>
            <Navbar />
            {children}
        </SessionProvider>
      </body>
    </html>
  );
}
