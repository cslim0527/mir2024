import AppLayout from "@/src/components/AppLayout";
import { Boards } from "@/src/components/Board/hooks/useBoard";
import NoticeRead from "@/src/feat-components/NoticeBoard/NoticeRead";
import db from "@/src/network/db";
import { doc, getDoc } from "firebase/firestore";
import { headers } from "next/headers";

const ForumCreatePage = async () => {
  const articleId = headers().get("x-pathname")?.split("/").at(-1) || "";

  const getArticle = async (boardName: Boards, id: string) => {
    const docRef = doc(db, boardName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data(), id };
    } else {
      console.log("No such document!");
    }
  };

  const article = await getArticle("forum", articleId);
  return (
    <AppLayout>
      <NoticeRead article={article} />
    </AppLayout>
  );
};

export default ForumCreatePage;
