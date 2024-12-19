'use client'

import { Footer } from '@/components/footer'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}
