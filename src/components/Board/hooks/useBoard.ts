import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from "react";
import db from "@/src/network/db";
import { useAuth } from "@/src/providers/AuthProvider";
import {
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { usePathname, useRouter } from "next/navigation";

export type Boards = "forum";

export default function useBoard() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const returnPageUrl = useMemo(() => pathname.split("write").at(0) || "/", []);

  const getArticle = useCallback(async (boardName: Boards, id: string) => {
    const docRef = doc(db, boardName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }, []);

  const deleteArticle = useCallback(async (boardName: Boards, id: string) => {
    const docRef = doc(db, boardName, id);
    await deleteDoc(docRef);
  }, []);

  const getBoardData = useCallback(async (boardName: Boards) => {
    const q = query(collection(db, boardName), orderBy("created_at", "desc"));
    const querySnapshot = await getDocs(q);

    const data: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  }, []);

  const handleChangeSubject = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSubject(e.currentTarget.value);
    },
    []
  );

  const handleChangeContent = useCallback((value: string) => {
    setContent(value);
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!user?.email) {
        alert("글 작성에 실패했습니다.");
        return;
      }

      const forumCollection = collection(db, "forum");
      await addDoc(forumCollection, {
        subject,
        content,
        author: user.email,
        created_at: new Date().getTime(),
      });
      alert("저장되었습니다.");
      setSubject("");
      setContent("");
      router.push(returnPageUrl);
    },
    [subject, content, user?.email, db]
  );
  return {
    subject,
    content,
    handleSubmit,
    handleChangeSubject,
    handleChangeContent,
    getBoardData,
    getArticle,
    deleteArticle,
  };
}
