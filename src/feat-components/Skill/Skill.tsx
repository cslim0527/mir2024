"use client";

import styled from "styled-components";
import SkillTable from "./SkillTable";
import { SKILL_DATA } from "@/src/data/skill";
import { useSkill } from "./hooks/useSkill";
import { Job } from "@/src/types/skill";
import Image from "next/image";

const Skill = () => {
  const { currentJob, handleChangeJob } = useSkill();
  return (
    <div>
      <div className="tabs">
        <ul>
          {Object.entries(SKILL_DATA).map((data) => (
            <li
              key={`item-${data[1].job}`}
              className={currentJob === data[0] ? "active" : ""}
              onClick={() => handleChangeJob(data[0] as Job)}
            >
              {data[1].job}
            </li>
          ))}
        </ul>
      </div>

      <div className="title-area">
        <div className="title">
          <img src="/assets/images/icon_skill.gif" alt="" />
          <span>무공</span>
          <b>{SKILL_DATA[currentJob].job}</b>
        </div>
        <SkillTable data={SKILL_DATA[currentJob].skill} />
      </div>
    </div>
  );
};

export default Skill;
