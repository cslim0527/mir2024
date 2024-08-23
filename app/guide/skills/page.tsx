import AppLayout from "@/src/components/AppLayout";
import Skill from "@/src/feat-components/Skill";
import { Suspense } from "react";

const SkillsPage = () => {
  return (
    <AppLayout>
      <Suspense>
        <Skill />
      </Suspense>
    </AppLayout>
  );
};

export default SkillsPage;
