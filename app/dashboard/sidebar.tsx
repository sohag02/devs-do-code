"use client";
import Link from "next/link";
import { Key, BarChart } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const items = [
  { href: "/dashboard/api-keys", icon: <Key size={20} />, label: "API Keys" },
  { href: "/dashboard/usage", icon: <BarChart size={20} />, label: "Usage" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#1A1A1A]/80 border-r border-[#2A2A2A] backdrop-blur-xl">
      <div className="sticky top-0 p-6">
        <h2 className="text-xl font-semibold mb-6 text-white/90">Dashboard</h2>
        <nav className="space-y-1">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={item.href}
                className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors
                  ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-white border border-blue-500/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span>{item.label}</span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="sidebar-indicator"
                    className="ml-auto w-1 h-4 bg-blue-500 rounded-full"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
