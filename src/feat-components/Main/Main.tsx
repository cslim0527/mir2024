"use client";

import Link from "next/link";
import useMain from "./hooks/useMain";
import { useAuth } from "@/src/providers/AuthProvider";
import styles from "./Main.module.scss";

const Main = () => {
  const { handleClickDiscord } = useMain();
  const { user, isAuthenticated, handleLogOut } = useAuth();

  return (
    <div
      className={styles["main-area"]}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className={styles.starter}>
        <button className="discord" type="button" onClick={handleClickDiscord}>
          <span>디스코드</span>
        </button>
        <p>클라이언트 문의는 디스코드로!</p>
      </div>

      <div className={styles["user-status"]}>
        {isAuthenticated && user ? (
          <>
            <span>{user.email}</span>
            <button onClick={() => handleLogOut()}>로그아웃</button>
          </>
        ) : (
          <>
            <span>
              일부 컨텐츠를 이용하려면
              <br />
              로그인이 필요해요!
            </span>
            <Link href="/member/login">로그인</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
