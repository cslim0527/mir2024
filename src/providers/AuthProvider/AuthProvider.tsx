"use client";

import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "@/src/network/auth";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface AuthContextType {
  isAuthenticated: boolean;
  handleLogin: (params: LoginParams) => Promise<UserCredential | unknown>;
  handleLogOut: () => void;
  handleJoin: (params: JoinParams) => Promise<UserCredential | unknown>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  handleLogin: async (params: LoginParams) => Promise.resolve({}),
  handleLogOut: () => {},
  handleJoin: async (params: JoinParams) => Promise.resolve({}),
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("AuthProvider 외부 스코프에서 사용 할 수 없습니다.");
  }

  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export type LoginParams = {
  email: string;
  password: string;
};

export type JoinParams = LoginParams;

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = useMemo(() => !!user, [user]);

  const handleLogin = useCallback(async ({ email, password }: LoginParams) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      return error;
    }
  }, []);

  const handleLogOut = useCallback(() => {
    signOut(auth);
  }, []);

  const handleJoin = useCallback(async ({ email, password }: JoinParams) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("[user]", user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, handleLogin, handleLogOut, handleJoin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
