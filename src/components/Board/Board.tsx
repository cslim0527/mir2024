import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import useBoard from "./hooks/useBoard";

export default function Board() {
  const {
    subject,
    content,
    handleSubmit,
    handleChangeSubject,
    handleChangeContent,
  } = useBoard();

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image", "video", "formula"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ],
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <input
        type="text"
        className="subject"
        placeholder="제목를 입력해주세요."
        value={subject}
        onChange={handleChangeSubject}
      />

      <ReactQuill
        theme="snow"
        modules={modules}
        value={content}
        onChange={handleChangeContent}
      />

      <div className="write-controls">
        <button type="submit" className="btn btn-dark">
          취소
        </button>

        <button type="submit" className="btn btn-red">
          작성
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  padding: 16px;
  background-color: #fff;

  input {
    height: 40px;
    width: 100%;
    font-size: 14px;
    padding: 7px 14px;
    border: 1px solid #ccc;
  }

  input:focus {
    border-color: #333;
    outline: 0;
    border-width: 1px;
  }

  .subject {
    margin-bottom: 10px;
  }

  .write-controls {
    gap: 10px;
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
  }
`;
