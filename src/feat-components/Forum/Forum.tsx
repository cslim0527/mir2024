import Link from "next/link";

const Forum = () => {
  return (
    <div>
      <h2>자유게시판</h2>
      <div>게시판 목록</div>
      <Link href="/community/forum/create">글쓰기</Link>
    </div>
  );
};

export default Forum;
