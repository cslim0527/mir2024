"use client";

import Link from "next/link";
import styles from "./Topbar.module.scss";
import { useAuth } from "@/src/providers/AuthProvider";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface HeaderProps {}

const TopBar = (props: HeaderProps) => {
  const pathname = usePathname();
  const { handleLogOut, isAuthenticated } = useAuth();
  const isJoinPage = useMemo(() => pathname === "/member/join", []);

  return (
    <aside className={styles["top-bar"]}>
      <div>
        <h1>
          <a href="/">미르2024</a>
        </h1>
      </div>

      <div className="top-bar-menu">
        <ul>
          <li>
            {!isJoinPage && isAuthenticated ? (
              <button
                className="logout-button"
                type="button"
                onClick={() => handleLogOut()}
              >
                로그아웃
              </button>
            ) : (
              <Link href="/member/login">로그인</Link>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default TopBar;
