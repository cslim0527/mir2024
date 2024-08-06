"use client";

import { useCallback, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "@/src/network/auth";
import { useAuth } from "@/src/providers/AuthProvider";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleJoin } = useAuth();

  const handleSubmit = useCallback(async () => {
    const res = await handleJoin({ email, password });
    console.log("[logout]", res);
  }, [email, password]);

  return (
    <div>
      <h1>회원가입</h1>
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
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Join;
