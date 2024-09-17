"use client";

import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
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
import db from "@/src/network/db";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export type ErrorResponse = {
  error: FirebaseError;
};

export type MemberGrade = "member" | "admin" | "super";

export interface AuthContextType {
  user: User | null;
  grade: MemberGrade | null;
  isAuthenticated: boolean;
  handleLogin: (params: LoginParams) => Promise<UserCredential | ErrorResponse>;
  handleLogOut: (refresh?: boolean) => void;
  handleJoin: (params: JoinParams) => Promise<UserCredential | ErrorResponse>;
  handleEmailVerification: () => Promise<boolean | ErrorResponse>;
  handleDeleteUser: () => Promise<boolean | ErrorResponse>;
}

const AuthContext = createContext<AuthContextType>({
  user: {} as User,
  grade: "member",
  isAuthenticated: false,
  handleLogin: async (params: LoginParams) =>
    Promise.resolve({} as UserCredential),
  handleLogOut: (refresh?: boolean) => {},
  handleJoin: async (params: JoinParams) =>
    Promise.resolve({} as UserCredential),
  handleEmailVerification: async () => Promise.resolve(true),
  handleDeleteUser: async () => Promise.resolve(true),
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
  const [member, setMember] = useState<DocumentData | null>(null);
  const isAuthenticated = useMemo(() => !!user, [user]);
  const grade = useMemo(() => member && member.grade, [member]);

  const getMember = useCallback(async () => {
    if (!user) {
      return null;
    }

    const q = query(
      collection(db, "member"),
      where("email", "==", user?.email)
    );
    const querySnapshot = await getDocs(q);

    let member: DocumentData = {};
    querySnapshot.forEach((doc) => {
      member = { id: doc.id, ...doc.data() };
    });
    return member;
  }, [user]);

  const handleLogin = useCallback(async ({ email, password }: LoginParams) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      return { error } as ErrorResponse;
    }
  }, []);

  const handleLogOut = useCallback((refresh?: boolean) => {
    signOut(auth);

    if (refresh) {
      window.location.reload();
    }
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
      await sendEmailVerification(auth.currentUser!);
      return true;
    } catch (error) {
      return { error } as ErrorResponse;
    }
  }, []);

  const handleDeleteUser = useCallback(async () => {
    try {
      await deleteUser(auth.currentUser!);
      return true;
    } catch (error) {
      return { error } as ErrorResponse;
    }
  }, []);

  useEffect(() => {
    const initMember = async () => {
      const member = await getMember();
      console.log("[init]", member);
      setMember(member);
    };

    initMember();
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("[user]", user);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        grade,
        isAuthenticated,
        handleLogin,
        handleLogOut,
        handleJoin,
        handleEmailVerification,
        handleDeleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
