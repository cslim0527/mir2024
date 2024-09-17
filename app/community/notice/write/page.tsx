import AppLayout from "@/src/components/AppLayout";
import NoticeWrite from "@/src/feat-components/NoticeBoard/NoticeWrite";
import { Suspense } from "react";

const ForumCreatePage = () => {
  return (
    <AppLayout>
      <Suspense>
        <NoticeWrite />
      </Suspense>
    </AppLayout>
  );
};

export default ForumCreatePage;
