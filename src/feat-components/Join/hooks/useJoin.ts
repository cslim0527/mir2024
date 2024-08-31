import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { ErrorResponse, useAuth } from "@/src/providers/AuthProvider";
import { delay } from "@/src/utils/common";
import { v4 as uuidv4 } from "uuid";

export default function useJoin() {
  const { handleJoin, handleEmailVerification, handleDeleteUser } = useAuth();
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState("");
  const [isEmailSend, setIsEmailSend] = useState(false);

  const temporaryJoin = useCallback(async () => {
    // 리셋
    setIsPending(true);
    setErrors("");

    // 임의 회원가입 시도
    const uuid = uuidv4();
    const res = await handleJoin({ email, password: uuid });
    await delay(1000);

    // 가입 결과 반영
    if ("operationType" in res && res.operationType === "signIn") {
      return true;
    } else {
      const { error } = res as ErrorResponse;
      setErrors(
        error.message.split("Firebase:")?.[1] || "관리자에게 문의해주세요."
      );
      setIsPending(false);
    }
  }, [email, handleJoin]);

  const handleSubmit = useCallback(async () => {
    const tempJoinResult = await temporaryJoin();
    const verifyResult = tempJoinResult && (await handleEmailVerification());
    if (verifyResult === true) {
      handleDeleteUser();
      setIsEmailSend(true);
    }
  }, [temporaryJoin, handleEmailVerification]);

  const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const isDisable = useMemo(() => {
    return email.length === 0 || isPending;
  }, [email, isPending]);

  return {
    email,
    errors,
    isPending,
    isDisable,
    handleChangeEmail,
    handleSubmit,
    isEmailSend,
  };
}
