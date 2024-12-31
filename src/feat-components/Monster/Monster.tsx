"use client";

import styled from "styled-components";
import MonsterTable from "./MosterTable";

const Monster = () => {
  return (
    <>
      <div className="title-area">
        <div className="title">
          <span>몬스터</span>
        </div>
        <MonsterTable />
      </div>
    </>
  );
};

export default Monster;
