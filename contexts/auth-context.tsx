"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  name: string;
  email: string;
  role: "cliente" | "vendedor";
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers = [
  {
    id: "1",
    name: "Vendedor",
    email: "vend",
    password: "1234",
    role: "vendedor" as const,
  },
  {
    id: "2",
    name: "Cliente",
    email: "cliente",
    password: "1234",
    role: "cliente" as const,
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verificar si hay un usuario en el localStorage al cargar la página
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simular una llamada a la API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const foundUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
      router.push("/");
    } else {
      throw new Error("Credenciales inválidas");
    }
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
