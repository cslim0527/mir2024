"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Verify.module.scss";
import useVerify from "./hooks/useVerify";
import { LineWave } from "react-loader-spinner";

const Verify = () => {
  const {
    password,
    handleChangePassword,
    errors,
    handleResetPassword,
    isPending,
  } = useVerify();
  return (
    <div>
      <div className={styles["verify-area"]}>
        <Image
          style={{ borderRadius: "6px" }}
          width={50}
          height={50}
          src={`/assets/images/BI.jpg`}
          alt=""
        />
        <h1>비밀번호 재설정</h1>
      </div>
      <div>
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
            className="confirm-button"
            type="button"
            onClick={handleResetPassword}
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
              "비밀번호 설정"
            )}
          </button>

          {errors && <div className="error-box">{errors}</div>}
        </div>
      </div>
    </div>
  );
};

export default Verify;
