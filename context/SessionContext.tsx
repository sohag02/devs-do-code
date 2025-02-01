"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { fetchUser } from "@/lib/fetchUser";

interface User {
  id: string;
  name: string;
  email: string;
  provider: string;
  plan: string;
  picture: string | null;
  totalInputTokens: number;
  totalOutputTokens: number;
  createdAt: Date;
  updatedAt: Date;
}

interface SessionContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUser();
      setUser(userData);
      setLoading(false);
    };

    loadUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        window.location.href = "/";
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <SessionContext.Provider value={{ user, loading, logout: handleLogout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
