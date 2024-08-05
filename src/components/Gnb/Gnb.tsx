import { GNB_HEIGHT } from "@/src/constants/layout";
import styled from "styled-components";
import { useGnb } from "./hooks/useGnb";
import Link from "next/link";

const Gnb = () => {
  const { isDimmedOpen, handleToggleDimmed } = useGnb();
  return (
    <Wrapper
      onMouseLeave={() => handleToggleDimmed(false)}
      onMouseEnter={() => handleToggleDimmed(true)}
    >
      <MainMenu>
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
      </MainMenu>
      <SubMenu $isDimmedOpen={isDimmedOpen}>
        <ul>
          <li>
            <a href="#">공지사항</a>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/guide/skills">무공 및 마법</Link>
          </li>
          <li>
            <a href="#">지도 및 좌표</a>
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
            <a href="#">자유게시판</a>
          </li>
          <li>
            <a href="#">삽니다/팝니다</a>
          </li>
        </ul>
      </SubMenu>
    </Wrapper>
  );
};

export default Gnb;

const Wrapper = styled.nav`
  width: 100%;
  height: ${GNB_HEIGHT}px;
  margin-bottom: 40px;
`;

const SubMenu = styled.div<{ $isDimmedOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  transition: all 0.3s ease;
  height: ${(props) => (props.$isDimmedOpen ? "240px" : 0)};
  overflow: hidden;
  position: relative;
  z-index: 1;
  ul {
    width: 100%;
    text-align: center;
    padding: 4px 0;

    a {
      padding: 8px;
    }
  }

  a {
    display: block;
    color: #7d7d7d;
    font-weight: bold;
    font-size: 15px;

    &:hover {
      color: #fff;
    }
  }
`;

const MainMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.9);

  & > li {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: ${GNB_HEIGHT}px;
  }

  & > li > a {
    color: #fff;
    font-weight: bold;
    font-size: 17px;
  }
`;
