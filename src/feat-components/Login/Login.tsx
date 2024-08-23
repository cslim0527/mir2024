"use client";

import Link from "next/link";
import useLogin from "./hooks/useLogin";
import styled from "styled-components";
import { LineWave } from "react-loader-spinner";

const Login = () => {
  const {
    errors,
    email,
    password,
    isPending,
    isDisable,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
  } = useLogin();

  return (
    <Wrapper>
      <h1
        style={{
          paddingTop: "50px",
          paddingBottom: "25px",
          textAlign: "center",
        }}
      >
        로그인
      </h1>
      <div>
        <Input
          style={{ marginBottom: "8px" }}
          type="text"
          placeholder="이메일"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <Input
          style={{ marginBottom: "16px" }}
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handleChangePassword}
        />
      </div>

      <div>
        <LoginButton type="button" onClick={handleSubmit} disabled={isDisable}>
          {isPending ? (
            <LineWave
              visible={true}
              height="56"
              width="56"
              color="#fb5151"
              ariaLabel="line-wave-loading"
              wrapperStyle={{
                justifyContent: "center",
                transform: "translate(10px, -5px)",
              }}
              wrapperClass=""
              firstLineColor=""
              middleLineColor=""
              lastLineColor=""
            />
          ) : (
            "로그인"
          )}
        </LoginButton>

        <div
          style={{
            padding: "12px",
            textAlign: "right",
            fontSize: "15px",
            color: "#535768",
            letterSpacing: "-0.5px",
          }}
        >
          <Link href="/member/join">회원가입</Link>
        </div>

        {errors && <ErrorBox>{errors}</ErrorBox>}
      </div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  width: 450px;
  background-color: #fff;
  border: 1px solid #c6cfd8;
  margin: 60px auto 0 auto;
  padding: 20px;
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  height: 56px;
  background-color: #fff;
  border: 1px solid #c6cfd8;
  padding-left: 15px;
  padding-right: 32px;
  font-size: 1rem;
`;

const LoginButton = styled.button`
  border: 0;
  width: 100%;
  height: 56px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  background-color: #b1282c;
  cursor: pointer;
  &:disabled {
    color: #8a8a8a;
    background-color: #eee;
  }
`;

const ErrorBox = styled.div`
  padding: 16px;
  font-size: 12px;
  color: #96393f;
  border-radius: 4px;
  border: 1px solid #9d140d;
  background-color: #e3c0bc;
`;
