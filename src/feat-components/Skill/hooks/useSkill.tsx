import { Job } from "@/src/types/skill";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

export const useSkill = () => {
  const { push } = useRouter();
  const params = useSearchParams();
  const handleChangeJob = useCallback(
    (job: Job) => {
      push(`/guide/skills?job=${job}`);
    },
    [push]
  );

  const currentJob = useMemo(
    () => (params.get("job") || "fire") as Job,
    [params]
  );
  return { currentJob, handleChangeJob };
};
