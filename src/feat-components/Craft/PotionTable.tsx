"use client";

import { ifErrorNoImg } from "@/src/utils/common";
import { POTION_DATA } from "@/src/data/craft";

const PotionTable = () => {
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
    </table>
  );
};

export default PotionTable;
