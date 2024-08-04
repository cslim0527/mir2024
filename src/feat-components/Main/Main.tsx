import styled from "styled-components";

const Main = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Starter>
          <Discord type="button">
            <span>디스코드</span>
          </Discord>
          <p>클라이언트 문의는 디스코드로!</p>
        </Starter>

        <Login>
          <span>
            일부 컨텐츠를 이용하려면
            <br />
            로그인이 필요해요!
          </span>
          <a href="#">로그인</a>
        </Login>
      </div>
    </>
  );
};

const Starter = styled.div`
  width: 289px;
  height: 152px;
  position: relative;

  p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    height: 32px;
    line-height: 32px;
    color: #333;
    font-size: 13px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #c19d6b;
  }
`;

const Discord = styled.button`
  cursor: pointer;
  border: 0;
  outline: none;
  width: 100%;
  height: 100%;
  color: #312a29;
  font-size: 48px;
  font-weight: bold;
  background-color: #eb0a2a;

  span {
    display: block;
    transform: translateY(-8px);
  }
`;

const Login = styled.div`
  width: 289px;
  height: 152px;
  text-align: center;
  background-color: #252323;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;

  span {
    color: rgba(255, 255, 255, 0.8);
    font-size: 13px;
  }

  a {
    display: block;
    width: 100%;
    height: 46px;
    font-size: 24px;
    color: #fff;
    line-height: 46px;
    margin-top: 16px;
    background-color: #a28c6d;
  }
`;

export default Main;
