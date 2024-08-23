"use client";

import { MONSTER_DATA } from "@/src/data/monster";
import { comma, ifErrorNoImg } from "@/src/utils/common";
import Image from "next/image";
import styled from "styled-components";

const MonsterTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>이미지</th>
          <th>이름</th>
          <th>경험치</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        {MONSTER_DATA.map(({ name, exp, description }, index) => (
          <tr key={`monster-row-${index}`}>
            <td>
              <Image
                src={`/assets/images/monster/${name}.gif`}
                alt={name}
                onError={ifErrorNoImg}
              />
            </td>
            <td className="name">{name}</td>
            <td>{exp}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MonsterTable;

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

    &:first-child {
      width: 160px;
    }

    &:nth-child(2) {
      width: 140px;
    }
  }

  td {
    padding: 10px 8px;
    font-size: 14px;
    color: #6f6863;

    &.name {
      font-weight: bold;
    }
  }
`;
