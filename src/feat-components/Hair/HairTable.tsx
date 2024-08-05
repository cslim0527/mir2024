"use client";

import styled from "styled-components";
import { ifErrorNoImg } from "@/src/utils/common";

const HairTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>번호</th>
          <th>남자머리</th>
          <th>번호</th>
          <th>여자머리</th>
        </tr>
      </thead>
      <tbody>
        {Array(22)
          .fill(null)
          .map((_, index) => (
            <tr key={`hair-row-${index}`}>
              <td>머리모양 {index}</td>
              <td className="hair-view">
                <img
                  src={`/assets/images/hair/male/${index}.gif`}
                  alt=""
                  onError={ifErrorNoImg}
                />
              </td>
              <td>머리모양 {index}</td>
              <td className="hair-view">
                <img
                  src={`/assets/images/hair/female/${index}.gif`}
                  alt=""
                  onError={ifErrorNoImg}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default HairTable;

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  tr {
    border: 1px solid #efefef;
  }

  th {
    padding: 8px;
    font-size: 14px;
    color: #6f6863;
    background-color: #efeeee;
  }

  td {
    padding: 10px 8px;
    font-size: 14px;
    color: #6f6863;

    &.hair-view {
      background: url("/assets/images/hair/hair_bg.png") repeat;
      background-size: 50px 50px;
    }
  }
`;
