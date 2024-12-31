"use client";

import { ifErrorNoImg } from "@/src/utils/common";
import { WEAPON_DATA } from "@/src/data/craft";

const WeaponTable = () => {
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
        {WEAPON_DATA.map(({ name, description }, index) => (
          <tr key={`weapon-row-${index}`}>
            <td>
              <img
                src={`/assets/images/crafts/weapon/${name}.gif`}
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

export default WeaponTable;
