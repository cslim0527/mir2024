import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ErrorResponse, useAuth } from "@/src/providers/AuthProvider";
import { delay } from "@/src/utils/common";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function useVerify() {
  const router = useRouter();
  const search = useSearchParams();
  const [password, setPassword] = useState("");
  const { handleJoin, handleLogOut } = useAuth();
  const [errors, setErrors] = useState("");
  const [isPending, setIsPending] = useState(false);
  const email = useMemo(() => search.get("email"), []);

  useEffect(() => {
    if (!email) {
      alert("정상적인 접근이 아닙니다.");
    }
  }, []);

  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleResetPassword = useCallback(async () => {
    if (!email) return;
    // 리셋
    setIsPending(true);
    setErrors("");

    const res = await handleJoin({ email, password });
    await delay(1000);

    if ("operationType" in res && res.operationType === "signIn") {
      alert("비밀번호가 재설정 되었습니다.");
      router.push("/");
    } else {
      const { error } = res as ErrorResponse;
      setErrors(
        error.message.split("Firebase:")?.[1] || "관리자에게 문의해주세요."
      );
      setIsPending(false);
    }
  }, [password, email]);

  return {
    password,
    handleChangePassword,
    errors,
    isPending,
    handleResetPassword,
  };
}
