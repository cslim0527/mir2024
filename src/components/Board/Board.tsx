import React from "react";
import styles from "./Board.module.scss";
import useBoard from "./hooks/useBoard";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

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
    <form className={styles["board-form"]} onSubmit={handleSubmit}>
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
    </form>
  );
}
