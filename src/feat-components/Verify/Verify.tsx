"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import useVerify from "./hooks/useVerify";
import { LineWave } from "react-loader-spinner";

const Verify = () => {
  const {
    password,
    handleChangePassword,
    errors,
    handleResetPassword,
    isPending,
  } = useVerify();
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
          비밀번호 재설정
        </h1>
      </div>
      <div>
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
          <ConfirmButton type="button" onClick={handleResetPassword}>
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
              "비밀번호 설정"
            )}
          </ConfirmButton>

          {errors && <ErrorBox>{errors}</ErrorBox>}
        </div>
      </div>
    </Wrapper>
  );
};

export default Verify;

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

const ConfirmButton = styled.button`
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
