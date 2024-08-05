"use client";

import styled from "styled-components";
import PotionTable from "./PotionTable";
import WeaponTable from "./WeaponTable";
import HerbsTable from "./HerbsTable";

const Craft = () => {
  return (
    <>
      <div
        style={{
          background: "#fff",
          borderRadius: "3px",
          border: "1px solid #999",
          marginBottom: "80px",
        }}
      >
        <Title>
          <span>시약 만드는법</span>
        </Title>
        <p style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          가방에 만들고 싶은 시약의 재료를 가지고 <b>시약상</b>에 가서
          <b>"### 만들어 줘"</b>
          하시면 재료는 없어지고 원하는 시약이 40개 만들어집니다.
        </p>

        <Title>
          <span>시약 재료</span>
        </Title>
        <PotionTable />
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "3px",
          border: "1px solid #999",
          marginBottom: "80px",
        }}
      >
        <Title>
          <span>무기 만드는법</span>
        </Title>
        <p style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          가방에 만들고 싶은 무기의 재료를 가지고 <b>대장간</b>에 가서{" "}
          <b>"### 만들어 줘"</b> 하시면 재료는 없어지고 원하는 무기가
          만들어집니다.
        </p>

        <Title>
          <span>무기 재료</span>
        </Title>
        <WeaponTable />
      </div>

      <div
        style={{
          background: "#fff",
          borderRadius: "3px",
          border: "1px solid #999",
        }}
      >
        <Title>
          <span>약초의 종류</span>
        </Title>

        <HerbsTable />
      </div>
    </>
  );
};

export default Craft;

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
