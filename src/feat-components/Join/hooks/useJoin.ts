import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { ErrorResponse, useAuth } from "@/src/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { delay } from "@/src/utils/common";

export default function useJoin() {
  const router = useRouter();
  const { handleJoin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState("");

  const handleSubmit = useCallback(async () => {
    // 리셋
    setIsPending(true);
    setErrors("");

    // 회원가입 시도
    const res = await handleJoin({ email, password });
    await delay(1000);

    // 가입 결과 반영
    if ("operationType" in res && res.operationType === "signIn") {
      router.back();
    } else {
      const { error } = res as ErrorResponse;
      setErrors(
        error.message.split("Firebase:")?.[1] || "관리자에게 문의해주세요."
      );
      setIsPending(false);
    }
  }, [email, password]);

  const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const isDisable = useMemo(() => {
    return email.length === 0 || password.length === 0 || isPending;
  }, [email, password, isPending]);

  return {
    email,
    password,
    errors,
    isPending,
    isDisable,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  };
}
