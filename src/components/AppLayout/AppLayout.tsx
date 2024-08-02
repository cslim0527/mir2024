"use client";

import styled from "styled-components";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AppLayout;

const Wrapper = styled.main`
  border: 1px solid red;
`;
