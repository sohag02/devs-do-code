"use client";

import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { fetchUser } from "@/lib/fetchUser";

interface User {
  userid: string;
  name: string;
  email: string;
  photo: string;
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
      setUser(userData.data.user);
      setLoading(false);
    };

    loadUser();
  }, []);

  const logout = () => {
    setUser(null);
    document.cookie = "access_token=; Max-Age=0;"; // Clear access token cookie
    document.cookie = "user_id=; Max-Age=0;"; // Clear user_id cookie
  };

  return (
    <SessionContext.Provider value={{ user, loading, logout }}>
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
