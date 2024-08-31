import AppLayout from "@/src/components/AppLayout";
import Verify from "@/src/feat-components/Verify";
import { Suspense } from "react";

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
