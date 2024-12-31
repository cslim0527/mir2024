"use client";

import Link from "next/link";
import useLogin from "./hooks/useLogin";
import styles from "./Login.module.scss";
import { LineWave } from "react-loader-spinner";
import Image from "next/image";

const Login = () => {
  const {
    errors,
    email,
    password,
    isPending,
    isDisable,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  } = useLogin();

  return (
    <div>
      <div className={styles["login-area"]}>
        <Image
          style={{ borderRadius: "6px" }}
          width={50}
          height={50}
          src={`/assets/images/BI.jpg`}
          alt=""
        />
        <h1
          style={{
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          로그인
        </h1>
      </div>
      <div>
        <input
          style={{ marginBottom: "8px" }}
          type="text"
          placeholder="이메일"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <input
          style={{ marginBottom: "16px" }}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handleChangePassword}
        />
      </div>

      <div>
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
            "로그인"
          )}
        </button>

        <div
          style={{
            padding: "12px",
            textAlign: "right",
            fontSize: "15px",
            color: "#535768",
            letterSpacing: "-0.5px",
          }}
        >
          <Link href="/member/join">회원가입</Link>
        </div>

        {errors && <div className="error-box">{errors}</div>}
      </div>
    </div>
  );
};

export default Login;
