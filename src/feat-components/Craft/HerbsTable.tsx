"use client";

import { ifErrorNoImg } from "@/src/utils/common";
import { HERBS_DATA } from "@/src/data/craft";
import Image from "next/image";

const HerbsTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>이미지</th>
          <th>이름</th>
          <th>재료,효능,효과</th>
        </tr>
      </thead>
      <tbody>
        {HERBS_DATA.map(({ name, description }, index) => (
          <tr key={`potion-row-${index}`}>
            <td>
              <img
                src={`/assets/images/crafts/herbs/${name}.gif`}
                alt=""
                onError={ifErrorNoImg}
              />
            </td>
            <td>{name}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HerbsTable;
