"use client";
import { HEADER_HEIGHT } from "@/src/constants/layout";

import styled from "styled-components";
import Header from "../TopBar";
import Gnb from "../Gnb";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <VisualBanner />

      <Gnb />
      {children}
    </Wrapper>
  );
};

export default AppLayout;

const Wrapper = styled.main`
  width: 1180px;
  max-height: 100vh;
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
