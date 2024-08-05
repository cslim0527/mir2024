import { ItemType } from "@/src/types/item";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

export const useItems = () => {
  const { push } = useRouter();
  const params = useSearchParams();
  const handleChangeJob = useCallback((job: ItemType) => {
    push(`/guide/items?job=${job}`);
  }, []);

  const currentJob = useMemo(
    () => (params.get("job") || "common") as ItemType,
    [params]
  );
  return { currentJob, handleChangeJob };
};
