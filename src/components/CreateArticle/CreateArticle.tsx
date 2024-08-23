"use client";

import db from "@/src/network/db";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateArticle = () => {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async () => {
    const forumCollection = collection(db, "forum");
    await addDoc(forumCollection, {
      subject,
      content,
      author: "동방불패",
      created_at: new Date().getTime(),
    });
    alert("저장되었습니다.");
    setSubject("");
    setContent("");
    // router.push("/community/forum");
  };
  return (
    <>
      <form>
        <div>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div>
          <textarea name="" id="" onChange={(e) => setContent(e.target.value)}>
            {content}
          </textarea>
        </div>

        <div>
          <button type="button" onClick={handleSubmit}>
            작성하기
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateArticle;
