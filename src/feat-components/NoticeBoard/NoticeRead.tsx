"use client";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import useBoard from "@/src/components/Board/hooks/useBoard";
import { timeStampToDate } from "@/src/utils/common";
import styled from "styled-components";
import Permission from "@/src/components/Permission/Permission";

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
    <ReadWrapper>
      <ReadHeader>
        <h2>{article.subject}</h2>
        <span>{timeStampToDate(article.created_at)}</span>
      </ReadHeader>
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
    </ReadWrapper>
  );
}

const ReadWrapper = styled.div`
  background-color: #fff;
  padding: 30px;
`;

const ReadHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 3px solid #eee;
  font-weight: "bold";
  font-size: 1.5rem;
  padding: 12px 12px 6px 0;
  margin-bottom: 12px;

  span {
    font-size: 14px;
  }
`;
