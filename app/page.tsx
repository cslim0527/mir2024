"use client";

import AppLayout from "@/src/components/AppLayout";
import Main from "@/src/feat-components/Main";

export default function MainPage() {
  return <AppLayout isNoScroll={true} children={<Main />} />;
}
