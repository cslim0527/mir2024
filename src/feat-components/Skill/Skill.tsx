"use client";

import styled from "styled-components";
import SkillTable from "./SkillTable";
import { SKILL_DATA } from "@/src/constants/skill";
import { useSkill } from "./hooks/useSkill";
import { Job } from "@/src/types/skill";

const Skill = () => {
  const { currentJob, handleChangeJob } = useSkill();
  console.log("[currentJob]", currentJob);
  return (
    <div>
      <Tabs>
        <ul>
          {Object.entries(SKILL_DATA).map((data) => (
            <li
              className={currentJob === data[0] ? "active" : ""}
              onClick={() => handleChangeJob(data[0] as Job)}
            >
              {data[1].job}
            </li>
          ))}
        </ul>
      </Tabs>

      <div
        style={{
          background: "#fff",
          borderRadius: "3px",
          border: "1px solid #999",
        }}
      >
        <Title>
          <img src="/assets/images/icon_skill.gif" alt="" />
          <span>무공</span>
          <b>{SKILL_DATA[currentJob].job}</b>
        </Title>
        <SkillTable data={SKILL_DATA[currentJob].skill} />
      </div>
    </div>
  );
};

export default Skill;

const Title = styled.div`
  font-size: 18px;
  padding: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;

  img {
    margin: 0 4px;
  }

  span {
    display: flex;
    align-items: center;

    &::after {
      content: "";
      display: block;
      width: 2px;
      height: 10px;
      background-color: #99908a;
      margin: 0 5px;
    }
  }

  b {
    font-weight: bold;
    color: #6f6863;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  ul {
    display: flex;
    background: #fff;
    border-radius: 3px;
    border: 1px solid #999;
    padding: 10px;
  }

  li {
    cursor: pointer;
    font-weight: bold;
    color: #6f6863;
    padding: 8px 12px;
    &.active {
      color: #333;
      text-decoration: underline;
    }
  }
`;
