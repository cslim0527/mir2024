"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import useBoard from "@/src/components/Board/hooks/useBoard";
import { DocumentData } from "firebase/firestore";
import { format } from "date-fns";

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
    <Wrapper>
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
          <Link href="/community/notice/write" className="btn btn-dark">
            글쓰기
          </Link>
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
                        <td>
                          {format(new Date(article.created_at), "yyyy-MM-dd")}
                        </td>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px 0;
  background-color: #fff;

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  section.notice {
    padding: 80px 0;
  }

  .page-title {
    margin-bottom: 60px;
  }
  .page-title h3 {
    font-size: 28px;
    color: #333333;
    font-weight: 400;
    text-align: center;
  }

  .board-controls {
    padding: 15px;
    display: flex;
    justify-content: flex-end;
  }

  #board-search {
    margin: 0 15px;
  }

  #board-search .search-window {
    padding: 15px 0;
    background-color: #f9f7f9;
  }
  #board-search .search-window .search-wrap {
    position: relative;
    /*   padding-right: 124px; */
    margin: 0 auto;
    width: 80%;
    max-width: 564px;
  }
  #board-search .search-window .search-wrap input {
    height: 40px;
    width: 100%;
    font-size: 14px;
    padding: 7px 14px;
    border: 1px solid #ccc;
  }
  #board-search .search-window .search-wrap input:focus {
    border-color: #333;
    outline: 0;
    border-width: 1px;
  }
  #board-search .search-window .search-wrap .btn {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 108px;
    padding: 0;
    font-size: 16px;
  }

  .board-table {
    font-size: 13px;
    width: 100%;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .board-table a {
    color: #333;
    display: inline-block;
    line-height: 1.4;
    word-break: break-all;
    vertical-align: middle;
  }
  .board-table a:hover {
    text-decoration: underline;
  }
  .board-table th {
    text-align: center;
  }

  .board-table .th-num {
    width: 100px;
    text-align: center;
  }

  .board-table .th-date {
    width: 200px;
  }

  .board-table th,
  .board-table td {
    padding: 14px 0;
  }

  .board-table tbody td {
    border-top: 1px solid #e7e7e7;
    text-align: center;
  }

  .board-table tbody th {
    padding-left: 28px;
    padding-right: 14px;
    border-top: 1px solid #e7e7e7;
    text-align: left;
  }

  .board-table tbody th p {
    display: none;
  }

  .btn {
    display: inline-flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    font-size: 15px;
    font-weight: 400;
    background: transparent;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    text-transform: uppercase;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .btn-dark {
    background: #555;
    color: #fff;
  }

  .btn-dark:hover,
  .btn-dark:focus {
    background: #373737;
    border-color: #373737;
    color: #fff;
  }

  .btn-dark {
    background: #555;
    color: #fff;
  }

  .btn-dark:hover,
  .btn-dark:focus {
    background: #373737;
    border-color: #373737;
    color: #fff;
  }

  /* reset */

  * {
    list-style: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .clearfix:after {
    content: "";
    display: block;
    clear: both;
  }
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .blind {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    margin: -1px;
    width: 1px;
    height: 1px;
  }
`;
