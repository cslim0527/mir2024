"use client";

import { HEADER_HEIGHT } from "@/src/constants/layout";
import styled from "styled-components";

interface HeaderProps {}

const TopBar = (props: HeaderProps) => {
  return (
    <Wrapper>
      <div>
        <h1>
          <a href="#">미르2024</a>
        </h1>
      </div>

      <AsideMenus>
        <ul>
          <li>
            <a href="#">고객지원</a>
          </li>
          <li>
            <a href="#">내 계정</a>
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
