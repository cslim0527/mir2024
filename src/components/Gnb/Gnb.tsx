import Link from "next/link";
import classNames from "classnames";
import { useGnb } from "./hooks/useGnb";
import styles from "./Gnb.module.scss";

const Gnb = () => {
  const { isDimmedOpen, handleToggleDimmed } = useGnb();
  return (
    <nav
      className={styles.gnb}
      onMouseLeave={() => handleToggleDimmed(false)}
      onMouseEnter={() => handleToggleDimmed(true)}
    >
      <ul className="main-menu">
        <li>
          <a href="#">새소식</a>
        </li>
        <li>
          <Link href="/guide/skills">가이드</Link>
        </li>
        <li>
          <a href="#">문파</a>
        </li>
        <li>
          <a href="#">커뮤니티</a>
        </li>
      </ul>
      <div className={classNames("sub-menu", { open: isDimmedOpen })}>
        <ul>
          <li>
            <Link href="/community/notice">공지사항</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/guide/skills">무공 및 마법</Link>
          </li>
          <li>
            <Link href="/guide/maps">지도 및 좌표</Link>
          </li>
          <li>
            <Link href="/guide/items">아이템</Link>
          </li>
          <li>
            <Link href="/guide/hair">머리모양</Link>
          </li>
          <li>
            <Link href="/guide/monster">몬스터</Link>
          </li>
          <li>
            <Link href="/guide/craft">시약/무기만들기</Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">문파광장</a>
          </li>
          <li>
            <a href="#">문파홍보</a>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/community/forum">자유게시판</Link>
          </li>
          <li>
            <a href="#">삽니다/팝니다</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Gnb;
