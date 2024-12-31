"use client";

import { LineWave } from "react-loader-spinner";
import useJoin from "./hooks/useJoin";
import Image from "next/image";
import styles from "./Join.module.scss";

const Join = () => {
  const {
    errors,
    email,
    isPending,
    isDisable,
    handleChangeEmail,
    handleSubmit,
    isEmailSend,
  } = useJoin();

  return (
    <div>
      <div className={styles["join-area"]}>
        <Image
          style={{ borderRadius: "6px" }}
          width={50}
          height={50}
          src={`/assets/images/BI.jpg`}
          alt=""
        />
        <h1>회원가입</h1>
      </div>
      <div>
        <input
          style={{ marginBottom: "8px" }}
          type="text"
          placeholder="이메일"
          value={email}
          onChange={handleChangeEmail}
          disabled={isEmailSend}
        />
      </div>

      <div>
        {!isEmailSend && (
          <button
            className="login-button"
            type="button"
            onClick={handleSubmit}
            disabled={isDisable}
          >
            {isPending ? (
              <LineWave
                visible={true}
                height="56"
                width="56"
                color="#fb5151"
                ariaLabel="line-wave-loading"
                wrapperStyle={{
                  justifyContent: "center",
                  transform: "translate(10px, -5px)",
                }}
                wrapperClass=""
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
              />
            ) : (
              "이메일 인증"
            )}
          </button>
        )}

        {errors && <div className="error-box">{errors}</div>}
      </div>
      {isEmailSend && (
        <div className="success-box">인증 메일 발송이 완료되었습니다.</div>
      )}
    </div>
  );
};

export default Join;
