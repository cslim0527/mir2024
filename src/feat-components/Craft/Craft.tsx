"use client";

import PotionTable from "./PotionTable";
import WeaponTable from "./WeaponTable";
import HerbsTable from "./HerbsTable";

const Craft = () => {
  return (
    <>
      <div className="title-area">
        <div className="title">
          <span>시약 만드는법</span>
        </div>
        <p style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          가방에 만들고 싶은 시약의 재료를 가지고 <b>시약상</b>에 가서
          <b>&quot;### 만들어 줘&quot;</b>
          하시면 재료는 없어지고 원하는 시약이 40개 만들어집니다.
        </p>

        <div className="title">
          <span>시약 재료</span>
        </div>
        <PotionTable />
      </div>

      <div className="title-area">
        <div className="title">
          <span>무기 만드는법</span>
        </div>
        <p style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          가방에 만들고 싶은 무기의 재료를 가지고 <b>대장간</b>에 가서
          <b>&quot;### 만들어 줘&quot;</b> 하시면 재료는 없어지고 원하는 무기가
          만들어집니다.
        </p>

        <div className="title">
          <span>무기 재료</span>
        </div>
        <WeaponTable />
      </div>

      <div className="title-area">
        <div className="title">
          <span>약초의 종류</span>
        </div>

        <HerbsTable />
      </div>
    </>
  );
};

export default Craft;
