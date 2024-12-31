"use client";
import Header from "../TopBar";
import Gnb from "../Gnb";
import classNames from "classnames";
import "@/src/styles/common.scss";
import styles from "./AppLayout.module.scss";

interface AppLayoutProps {
  children: React.ReactNode;
  isNoScroll?: boolean;
  isFlatMode?: boolean;
}

const AppLayout = ({
  children,
  isNoScroll = false,
  isFlatMode = false,
}: AppLayoutProps) => {
  return (
    <div
      className={classNames(styles["app-layout"], { "no-scroll": isNoScroll })}
    >
      <Header />

      {!isFlatMode && (
        <>
          <section className="visual-banner" />

          <Gnb />
        </>
      )}

      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
