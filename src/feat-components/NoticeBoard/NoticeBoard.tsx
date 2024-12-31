"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./NoticeBoard.module.scss";
import useBoard from "@/src/components/Board/hooks/useBoard";
import { DocumentData } from "firebase/firestore";
import { timeStampToDate } from "@/src/utils/common";
import Permission from "@/src/components/Permission/Permission";

export default function NoticeBoard() {
  const { getBoardData } = useBoard();
  const [data, setData] = useState<DocumentData[]>();
  useEffect(() => {
    const init = async () => {
      const data = await getBoardData("forum");
      setData(data);
      console.log("[data]", data);
    };

    init();
  }, []);

  return (
    <div className={styles["notice-board"]}>
      <section className="notice">
        <div className="page-title">
          <div className="container">
            <h3>공지사항</h3>
          </div>
        </div>

        <div id="board-search">
          <div className="container">
            <div className="search-window">
              <form action="">
                <div className="search-wrap">
                  <label htmlFor="search" className="blind">
                    공지사항 내용 검색
                  </label>
                  <input
                    id="search"
                    type="search"
                    name=""
                    placeholder="검색어를 입력해주세요."
                    value=""
                  />
                  <button type="submit" className="btn btn-dark">
                    검색
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="board-controls">
          <Permission permissionList={["admin", "super"]}>
            <Link href="/community/notice/write" className="btn btn-dark">
              글쓰기
            </Link>
          </Permission>
        </div>

        <div id="board-list">
          <div className="container">
            <table className="board-table">
              <thead>
                <tr>
                  <th scope="col" className="th-num">
                    번호
                  </th>
                  <th scope="col" className="th-title">
                    제목
                  </th>
                  <th scope="col" className="th-date">
                    등록일
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.length > 0 &&
                  data.map((article, index) => {
                    return (
                      <tr key={`notice-${article.created_at}`}>
                        <td>{index + 1}</td>
                        <th>
                          <a href={`/community/notice/${article.id}`}>
                            {article.subject}
                          </a>
                        </th>
                        <td>{timeStampToDate(article.created_at)}</td>
                      </tr>
                    );
                  })}

                {!data ||
                  (data.length === 0 && (
                    <tr>
                      <td colSpan={3}>작성된 내용이 없습니다.</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
