"use client";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import useBoard from "@/src/components/Board/hooks/useBoard";
import { timeStampToDate } from "@/src/utils/common";
import Permission from "@/src/components/Permission/Permission";
import styles from "./NoticeRead.module.scss";

interface BoardReadProps {
  article: any;
}

export default function NoticeRead({ article }: BoardReadProps) {
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
    <div className={styles["notice-read"]}>
      <div className="header">
        <h2>{article.subject}</h2>
        <span>{timeStampToDate(article.created_at)}</span>
      </div>
      <div
        className="board-read-status"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <button type="button" className="btn btn-dark" onClick={handleBack}>
          뒤로가기
        </button>

        <Permission permissionList={["admin", "super"]}>
          <button type="button" className="btn btn-red" onClick={handleDelete}>
            삭제
          </button>
        </Permission>
      </div>
    </div>
  );
}
