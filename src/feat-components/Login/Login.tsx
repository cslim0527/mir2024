"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/src/providers/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useAuth();

  const handleSubmit = useCallback(async () => {
    const res = await handleLogin({ email, password });
    console.log("[login]", res);
  }, [email, password]);

  return (
    <div>
      <h1>로그인</h1>
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button type="button" onClick={handleSubmit}>
          로그인
        </button>
        <Link href="/member/join">회원가입</Link>
      </div>
    </div>
  );
};

export default Login;
