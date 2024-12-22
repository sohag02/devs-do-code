import type { Metadata } from "next"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Providers } from "@/components/providers"
import dynamic from 'next/dynamic'
import "./globals.css"

const Navbar = dynamic(() => import('@/components/navbar').then(mod => mod.Navbar), {
  ssr: false
})

export const metadata: Metadata = {
  title: "Devs Do Code",
  description: "A collaborative platform for developers to code, learn, and build together",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`${GeistSans.className} bg-[#121212] text-white antialiased`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
