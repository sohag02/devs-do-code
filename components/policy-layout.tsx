"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PolicyLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function PolicyLayout({
  children,
  title,
  description,
}: PolicyLayoutProps) {
  const pathname = usePathname();

  const sidebarLinks = [
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/refunds", label: "Refunds & Cancellations" },
    { href: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="container px-4 md:px-6 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar - Mobile Dropdown */}
          <div className="md:hidden">
            <select
              value={pathname}
              onChange={(e) => (window.location.href = e.target.value)}
              className="w-full p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-white"
            >
              {sidebarLinks.map((link) => (
                <option key={link.href} value={link.href}>
                  {link.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sidebar - Desktop */}
          <aside className="hidden md:block sticky top-20 h-fit">
            <nav className="space-y-2 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    block w-full px-4 py-2 rounded-lg text-sm transition-colors
                    ${
                      pathname === link.href
                        ? "bg-blue-500 text-white"
                        : "text-white hover:bg-blue-500/20"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="w-full min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Breadcrumb */}
              <div className="mb-6 flex items-center space-x-1 text-sm text-white/60">
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Devs Do Code
                </Link>
                <span>/</span>
                <span className="text-white">{title}</span>
              </div>
              <div className="text-center space-y-4">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  initial={fadeIn.initial}
                  animate={fadeIn.animate}
                  transition={fadeIn.transition}
                >
                  {title}
                </motion.h1>
                <motion.p
                  className="text-lg text-white/80 max-w-2xl mx-auto"
                  initial={fadeIn.initial}
                  animate={fadeIn.animate}
                  transition={{ ...fadeIn.transition, delay: 0.1 }}
                >
                  {description}
                </motion.p>
              </div>
              <div className="pb-12 pt-8">
                <div className="prose prose-invert max-w-none">{children}</div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>

      <Footer />

    </div>
  );
}
