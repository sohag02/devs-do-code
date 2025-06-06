import { Space_Grotesk, Syne } from "next/font/google"
import "./globals.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { metadata } from "./metadata"
import { SessionProvider } from "@/context/SessionContext";
import { Toaster } from "@/components/ui/toaster"

config.autoAddCss = false

const grotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-grotesk",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
})

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${grotesk.variable} ${syne.variable}`}>
      <body className={grotesk.className}>
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
}
