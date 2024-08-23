import { Suspense } from "react";
import AppLayout from "@/src/components/AppLayout";
import Items from "@/src/feat-components/Items";

const ItemsPage = () => {
  return (
    <AppLayout>
      <Suspense>
        <Items />
      </Suspense>
    </AppLayout>
  );
};

export default ItemsPage;
