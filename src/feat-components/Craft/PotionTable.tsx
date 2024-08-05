"use client";

import styled from "styled-components";
import { ifErrorNoImg } from "@/src/utils/common";
import { POTION_DATA } from "@/src/data/craft";

const PotionTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>이미지</th>
          <th>이름</th>
          <th>재료,효능,효과</th>
        </tr>
      </thead>
      <tbody>
        {POTION_DATA.map(({ name, description }, index) => (
          <tr key={`potion-row-${index}`}>
            <td>
              <img
                src={`/assets/images/crafts/potion/${name}.gif`}
                alt=""
                onError={ifErrorNoImg}
              />
            </td>
            <td>{name}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PotionTable;

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
  }
`;
