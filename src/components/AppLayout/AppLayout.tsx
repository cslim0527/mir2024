"use client";
import { HEADER_HEIGHT } from "@/src/constants/layout";

import styled from "styled-components";
import Header from "../TopBar";
import Gnb from "../Gnb";

interface AppLayoutProps {
  children: React.ReactNode;
  isNoScroll?: boolean;
}

const AppLayout = ({ children, isNoScroll = false }: AppLayoutProps) => {
  return (
    <Wrapper
      style={{ maxHeight: isNoScroll ? "100vh" : "auto", minHeight: "100vh" }}
    >
      <Header />
      <VisualBanner />

      <Gnb />
      <main style={{ padding: "0 40px" }}>{children}</main>
    </Wrapper>
  );
};

export default AppLayout;

const Wrapper = styled.main`
  width: 1180px;
  margin: 0 auto;
  padding-top: ${HEADER_HEIGHT}px;
  background: url("/assets/images/bg.jpeg") no-repeat;
  background-size: 100% auto;
  background-position: 0 -100px;
  overflow: hidden;
`;

const VisualBanner = styled.section`
  width: 100%;
  height: 92px;
  background: url("/assets/images/original_banner.gif") no-repeat;
  background-size: 100%;
`;
