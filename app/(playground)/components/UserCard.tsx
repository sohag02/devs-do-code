"use client";
import { User as UserIcon, LogOut } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { SessionProvider, useSession, signOut } from "next-auth/react";
import { useState } from "react";

interface UserCardProps {
  isOpen?: boolean;
}

function User({ isOpen }: UserCardProps) {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!session) {
    return null;
  }

  return (
    <DropdownMenu open={isDropdownOpen}>
      <div
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <DropdownMenuTrigger asChild>
          <div
            className={`flex ${
              isOpen ? "w-full" : ""
            } flex-row items-center justify-start gap-2 rounded-lg p-4 hover:bg-[#3A3A3A] hover:cursor-pointer`}
          >
            <div className="w-10 h-10 rounded-full">
              {session?.user?.image ? (
                <Image
                  src={session?.user?.image}
                  alt={session?.user?.name as string}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              ) : (
                <UserIcon size={24} />
              )}
            </div>
            <div className={`text-center overflow-hidden transition-all ${isOpen ? "" : "hidden"}`}>
              <span className="text-sm truncate font-semibold">
                {session?.user?.name}
              </span>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52 rounded-lg bg-[#3A3A3A] p-2 shadow-lg">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            <LogOut /> Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}

export default function UserCard({ isOpen }: UserCardProps) {
  return (
    <SessionProvider>
      <User isOpen={isOpen} />
    </SessionProvider>
  );
}
