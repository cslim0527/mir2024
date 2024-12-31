"use client";

import { ifErrorNoImg } from "@/src/utils/common";

const HairTable = () => {
  return (
    <div className="table">
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
              <td
                className="hair-view"
                style={{
                  background: `url("/assets/images/hair/hair_bg.png") repeat`,
                  backgroundSize: "50px 50px",
                }}
              >
                <img
                  src={`/assets/images/hair/female/${index}.gif`}
                  alt=""
                  onError={ifErrorNoImg}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </div>
  );
};

export default HairTable;
