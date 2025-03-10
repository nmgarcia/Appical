"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { User } from "@/types/user";
import { authService } from "@/services/authService";

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    userData: Omit<User, "_id" | "role"> & { password: string }
  ) => Promise<void>;
  registerVendor: (
    userData: Omit<User, "_id" | "role"> & { password: string }
  ) => Promise<void>;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const currentUser = await authService.getCurrentUser();
          setUser(currentUser);
        } catch (error) {
          console.error("Error al obtener el usuario actual:", error);
          localStorage.removeItem("token");
        }
      }
      setIsLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { token, user } = await authService.login(email, password);
      localStorage.setItem("token", token);
      setUser(user);
      router.push("/");
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    router.push("/");
  };

  const register = async (
    userData: Omit<User, "_id" | "role"> & { password: string }
  ) => {
    setIsLoading(true);
    try {
      const { token, user } = await authService.register(userData);
      localStorage.setItem("token", token);
      setUser(user);
    } catch (error) {
      console.error("Error de registro:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const registerVendor = async (
    userData: Omit<User, "_id" | "role"> & { password: string }
  ) => {
    setIsLoading(true);
    try {
      const { token, user } = await authService.registerVendor(userData);
      localStorage.setItem("token", token);
      setUser(user);
    } catch (error) {
      console.error("Error de registro de vendedor:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, registerVendor, isLoading }}
    >
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
