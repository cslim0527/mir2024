"use client";

import styled from "styled-components";
import ItemsTable from "./ItemsTable";
import { useItems } from "./hooks/useItems";
import { Job } from "@/src/types/skill";
import { ITEM_DATA } from "@/src/data/item";

const Items = () => {
  const { currentJob, handleChangeJob } = useItems();
  return (
    <div>
      <div className="tabs">
        <ul>
          {Object.entries(ITEM_DATA).map((data) => (
            <li
              key={`item-${data[1].type}`}
              className={currentJob === data[0] ? "active" : ""}
              onClick={() => handleChangeJob(data[0] as Job)}
            >
              {data[1].type}
            </li>
          ))}
        </ul>
      </div>

      <div className="title-area">
        <div className="title">
          <img src="/assets/images/items/light/수우의투구.gif" alt="" />
          <span>아이템</span>
          <b>{ITEM_DATA[currentJob].type}</b>
        </div>
        <ItemsTable data={ITEM_DATA[currentJob].data} type={currentJob} />
      </div>
    </div>
  );
};

export default Items;

// const Title = styled.div`
//   font-size: 18px;
//   padding: 20px;
//   font-weight: 600;
//   display: flex;
//   align-items: center;

//   img {
//     margin: 0 4px;
//   }

//   span {
//     display: flex;
//     align-items: center;

//     &::after {
//       content: "";
//       display: block;
//       width: 2px;
//       height: 10px;
//       background-color: #99908a;
//       margin: 0 5px;
//     }
//   }

//   b {
//     font-weight: bold;
//     color: #6f6863;
//   }
// `;
