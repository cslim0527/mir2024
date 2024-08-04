"use client";

import { SkillItem } from "@/src/types/skill";
import styled from "styled-components";

interface SkillTableProps {
  data: SkillItem[];
}

const SkillTable = ({ data }: SkillTableProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>이름</th>
          <th>필요레벨</th>
          <th>총수련치</th>
          <th>설명</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, level, training, description }, index) => (
          <tr key={`skill-row-${index}`}>
            <td className="name">{name}</td>
            <td>{level}</td>
            <td>{training}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SkillTable;

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
      width: 200px;
    }

    &:nth-child(2) {
      width: 110px;
    }

    &:nth-child(3) {
      width: 145px;
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
