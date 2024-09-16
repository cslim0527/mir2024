"use client";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import useBoard from "@/src/components/Board/hooks/useBoard";

interface BoardReadProps {
  article: any;
}

export default function NoticeRead({ article }: BoardReadProps) {
  console.log("[article]", article);
  const router = useRouter();
  const { deleteArticle } = useBoard();

  const handleBack = useCallback(() => {
    router.back();
  }, []);

  const handleDelete = useCallback(async () => {
    const isConfirmed = confirm("정말 게시물을 삭제하시겠습니까?");
    if (isConfirmed) {
      await deleteArticle("forum", article.id);
      handleBack();
    }
  }, []);

  if (article === undefined) {
    return <>게시글이 없습니다.</>;
  }

  return (
    <div style={{ background: "#fff", padding: "30px" }}>
      <div
        style={{
          borderBottom: "2px solid #eee",
          fontWeight: "bold",
          fontSize: "1.5rem",
          padding: "12px 12px 6px 0",
          marginBottom: "12px",
        }}
      >
        {article.subject}
      </div>
      <div
        className="board-read-status"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button type="button" className="btn btn-dark" onClick={handleBack}>
          뒤로가기
        </button>

        <button type="button" className="btn btn-red" onClick={handleDelete}>
          삭제
        </button>
      </div>
    </div>
  );
}
