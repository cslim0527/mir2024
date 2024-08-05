"use client";

import styled from "styled-components";
import HairTable from "./HairTable";

const Hair = () => {
  return (
    <>
      <div
        style={{
          background: "#fff",
          borderRadius: "3px",
          border: "1px solid #999",
        }}
      >
        <Title>
          <span>헤어스타일</span>
        </Title>
        <HairTable />
      </div>
    </>
  );
};

export default Hair;

const Title = styled.div`
  font-size: 18px;
  padding: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }

  b {
    font-weight: bold;
    color: #6f6863;
  }
`;
