import { Suspense } from "react";
import AppLayout from "@/src/components/AppLayout";
import Verify from "@/src/feat-components/Verify";

const VerifyPage = () => {
  return (
    <AppLayout isFlatMode>
      <Suspense fallback={<div></div>}>
        <Verify />
      </Suspense>
    </AppLayout>
  );
};

export default VerifyPage;
