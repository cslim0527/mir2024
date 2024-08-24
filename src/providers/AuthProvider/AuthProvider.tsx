"use client";

import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  sendEmailVerification,
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
import { FirebaseError } from "firebase/app";

export type ErrorResponse = {
  error: FirebaseError;
};

export interface AuthContextType {
  isAuthenticated: boolean;
  handleLogin: (params: LoginParams) => Promise<UserCredential | ErrorResponse>;
  handleLogOut: () => void;
  handleJoin: (params: JoinParams) => Promise<UserCredential | ErrorResponse>;
  handleEmailVerification: () => Promise<void | ErrorResponse>;
  handleChangeVerified: (nextVerified: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  handleLogin: async (params: LoginParams) =>
    Promise.resolve({} as UserCredential),
  handleLogOut: () => {},
  handleJoin: async (params: JoinParams) =>
    Promise.resolve({} as UserCredential),
  handleEmailVerification: async () => Promise.resolve(),
  handleChangeVerified: () => {},
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
  const [isVerified, setIsVerified] = useState(false);
  const isAuthenticated = useMemo(() => !!user && isVerified, [user]);

  const handleLogin = useCallback(async ({ email, password }: LoginParams) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      return { error } as ErrorResponse;
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
      return { error } as ErrorResponse;
    }
  }, []);

  const handleEmailVerification = useCallback(async () => {
    try {
      const res = await sendEmailVerification(auth.currentUser!);
      return res;
    } catch (error) {
      return { error } as ErrorResponse;
    }
  }, []);

  const handleChangeVerified = useCallback((nextVerified: boolean) => {
    setIsVerified(nextVerified);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("[user]", user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogin,
        handleLogOut,
        handleJoin,
        handleEmailVerification,
        handleChangeVerified,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
