"use client";

import Link from "next/link";
import styled from "styled-components";
import { HEADER_HEIGHT } from "@/src/constants/layout";
import { useAuth } from "@/src/providers/AuthProvider";

interface HeaderProps {}

const TopBar = (props: HeaderProps) => {
  const { handleLogOut, isAuthenticated } = useAuth();
  return (
    <Wrapper>
      <div>
        <h1>
          <a href="/">미르2024</a>
        </h1>
      </div>

      <AsideMenus>
        <ul>
          <li>
            {isAuthenticated ? (
              <button type="button" onClick={() => handleLogOut()}>
                로그아웃
              </button>
            ) : (
              <Link href="/member/login">로그인</Link>
            )}
          </li>
        </ul>
      </AsideMenus>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 0 60px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #ffffffb3;
    font-size: 14px;
    font-weight: normal;

    &:hover {
      color: #ffffff;
    }
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const AsideMenus = styled.div`
  & > ul {
    display: flex;
    gap: 10px;
  }
`;
