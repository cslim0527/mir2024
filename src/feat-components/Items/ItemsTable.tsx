"use client";

import { Item, ItemType } from "@/src/types/item";
import { comma, ifErrorNoImg } from "@/src/utils/common";
import styled from "styled-components";

interface ItemsTableProps {
  type: ItemType;
  data: Item[];
}

const ItemsTable = ({ data, type }: ItemsTableProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>이미지</th>
          <th>이름</th>
          <th>필요레벨</th>
          <th>정확도</th>
          <th>방어력</th>
          <th>방어력</th>
          <th>마항력</th>
          <th>가격</th>
          <th>속성</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, level, acc, def, atk, rep, price, etc }, index) => (
          <tr key={`item-row-${index}`}>
            <td>
              <img
                src={`/assets/images/items/${type}/${name}.gif`}
                alt={name}
                onError={ifErrorNoImg}
              />
            </td>
            <td className="name">{name}</td>
            <td>{level}</td>
            <td>{acc}</td>
            <td>{def}</td>
            <td>{atk}</td>
            <td>{rep}</td>
            <td>{comma(price)}</td>
            <td>{etc}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ItemsTable;

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

    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      width: 55px;
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
