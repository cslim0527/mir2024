"use client";

import styled from "styled-components";
import HairTable from "./HairTable";

const Hair = () => {
  return (
    <>
      <div className="title-area">
        <div className="title">
          <span>헤어스타일</span>
        </div>
        <HairTable />
      </div>
    </>
  );
};

export default Hair;
