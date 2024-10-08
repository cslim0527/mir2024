"use client";

import { LineWave } from "react-loader-spinner";
import useJoin from "./hooks/useJoin";
import styled from "styled-components";
import Image from "next/image";

const Join = () => {
  const {
    errors,
    email,
    isPending,
    isDisable,
    handleChangeEmail,
    handleSubmit,
    isEmailSend,
  } = useJoin();

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "30px",
          paddingBottom: "25px",
        }}
      >
        <Image
          style={{ borderRadius: "6px" }}
          width={50}
          height={50}
          src={`/assets/images/BI.jpg`}
          alt=""
        />
        <h1
          style={{
            textAlign: "center",
            marginTop: "16px",
          }}
        >
          회원가입
        </h1>
      </div>
      <div>
        <Input
          style={{ marginBottom: "8px" }}
          type="text"
          placeholder="이메일"
          value={email}
          onChange={handleChangeEmail}
          disabled={isEmailSend}
        />
      </div>

      <div>
        {!isEmailSend && (
          <LoginButton
            type="button"
            onClick={handleSubmit}
            disabled={isDisable}
          >
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
              "이메일 인증"
            )}
          </LoginButton>
        )}

        {errors && <ErrorBox>{errors}</ErrorBox>}
      </div>
      {isEmailSend && <SuccessBox>인증 메일 발송이 완료되었습니다.</SuccessBox>}
    </Wrapper>
  );
};

export default Join;

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

  &:disabled {
    color: #9b9b9b;
    background-color: #c6cfd8;
  }
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
  margin-top: 16px;
  padding: 16px;
  font-size: 12px;
  color: #96393f;
  border-radius: 4px;
  border: 1px solid #9d140d;
  background-color: #e3c0bc;
`;

const SuccessBox = styled.div`
  margin-top: 4px;
  padding: 16px;
  font-size: 12px;
  color: #399650;
  border-radius: 4px;
  border: 1px solid #0d9d5f;
  background-color: #bde3bc;
`;
