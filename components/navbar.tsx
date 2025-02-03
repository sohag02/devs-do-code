"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "@/context/SessionContext";
import UserIcon from "@/components/user-icon";

const items = [
  { name: "About", href: "/about" },
  { name: "Docs", href: "/docs" },
  { name: "Pricing", href: "/pricing" },
  { name: "Playground", href: "/playground" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, logout } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-500/20 bg-black/50 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent">
                Devs Do Code
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {user ? (
              <Link
                href="/dashboard"
                className="hidden md:inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 ease-in-out"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/signin"
                className="hidden md:inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 ease-in-out"
              >
                Login
              </Link>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size={"icon"} className="bg-transparent hover:bg-transparent">
                  <UserIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-24 bg-gray-800">
                <DropdownMenuItem
                  onClick={logout}
                  className="hover:bg-gray-700 text-white hover:cursor-pointer"
                >
                  <LogOut className="h-5 w-5" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden" size="icon">
                  <Menu className="h-5 w-5 text-white" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-gray-900"
              >
                <div className="flex items-center justify-end m-2 hover:bg-white/10 hover:cursor-pointer">
                  <SheetClose asChild>
                    <X className="h-5 w-5 text-white" />
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4 m-4">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200 ease-in-out"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 ease-in-out"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign Up
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
