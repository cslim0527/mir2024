"use client";

import styled from "styled-components";

type Job = "fire" | "water" | "thunder" | "earth" | "dark" | "light";

type SkillData = Record<Job, SkillItem[]>;

interface SkillItem {
  name: string;
  level: number;
  training: number | null;
  description: string;
}

const SKILL_DATA: SkillData = {
  fire: [
    {
      name: "화염장",
      level: 15,
      training: 50000,
      description: "첫번째 공격 마법 900/250",
    },
    {
      name: "장열화염장",
      level: 35,
      training: 150000,
      description: "두번째 공격 마법 1800/350",
    },
    {
      name: "폭열권",
      level: 40,
      training: 500000,
      description: "바닥에서 화염이 폭출하는 첫번째 마법 4000/1200",
    },
    {
      name: "화염일격",
      level: 64,
      training: 150000,
      description: "필살기, 바로 앞에 있는 사람만 공격 가능 25000/8000",
    },
    {
      name: "화염금강장",
      level: 70,
      training: 200000,
      description: "세번째 공격 마법 4000/650",
    },
    {
      name: "천위폭열권",
      level: 80,
      training: 200000,
      description: "필살기, 바닥에서 화염이 폭출하는 두번째 마법 70000/20000",
    },
    {
      name: "천리전음",
      level: 80,
      training: null,
      description: "자신에 말을 멀리 알린다",
    },
    {
      name: "전수대법",
      level: 90,
      training: null,
      description: "마법을 전수한다",
    },
    {
      name: "불새",
      level: 90,
      training: 400000,
      description: "네번째 공격 마법 6000/900",
    },
    {
      name: "원자폭열권",
      level: 92,
      training: 400000,
      description: "필살기, 바닥에서 화염이 폭출하는 세번째 마법 100000/32000",
    },
    {
      name: "자폭단",
      level: 100,
      training: 500000,
      description: "필살기, 자기 스스로 자폭하면서 주위사람들을 공격하는 마법",
    },
    {
      name: "화룡맹장",
      level: 105,
      training: 700000,
      description: "다섯번째 공격 마법 9000/1500",
    },
    {
      name: "천왕불멸체",
      level: 120,
      training: 500000,
      description:
        "강한타격으로부터 자신을 보호하는 마법, 사용중 필살기 사용 불가",
    },
    {
      name: "금강초열권",
      level: 140,
      training: 400000,
      description: "화술사 필살기, 여섯번째 공격 마법",
    },
  ],
  water: [
    {
      name: "물의 공격",
      level: 10,
      training: 30000,
      description: "첫번째 체력회복 마법 15000/15000",
    },
    {
      name: "한빙장",
      level: 15,
      training: 50000,
      description: "첫번째 공격마법 1000/450",
    },
    {
      name: "원기회복",
      level: 35,
      training: 200000,
      description: "두번째 체력회복 마법 5000/1200",
    },
    {
      name: "해빙수",
      level: 45,
      training: 150000,
      description: "결빙 마법을 풀어주는 마법",
    },
    {
      name: "냉엽신공",
      level: 50,
      training: 200000,
      description: "파괴력을 증가시켜주는 마법 지속시간 220초",
    },
    {
      name: "결빙수",
      level: 55,
      training: 250000,
      description: "상대방을 얼리는 마법 지속시간 10초",
    },
    {
      name: "수력반탄공",
      level: 60,
      training: 500000,
      description: "체력보호 마법 지속시간 220초",
    },
    {
      name: "생명의소원",
      level: 66,
      training: 500000,
      description: "세번째 체력회복 마법 10000/1800",
    },
    {
      name: "천공주입",
      level: 70,
      training: 50000,
      description: "타인 마력회복 마법",
    },
    {
      name: "공력증강",
      level: 75,
      training: 50000,
      description: "자기 마력 회복 마법",
    },
    {
      name: "천우신조",
      level: 79,
      training: 1000000,
      description: "체력 50% 상승 마법 지속시간 205초",
    },
    {
      name: "천리전음",
      level: 80,
      training: null,
      description: "자신에 말을 멀리 알린다",
    },
    {
      name: "퇴마강기",
      level: 82,
      training: 500000,
      description:
        "마법 방어력 즉, 마법에 대한 저항력을 높이는 마법 지속시간 220초",
    },
    {
      name: "천사의노래",
      level: 84,
      training: 250000,
      description: "주위 사람들의 체력을 회복시켜주는 마법",
    },
    {
      name: "부활대공법",
      level: 85,
      training: 500000,
      description: "기절한 사람을 부활시켜주는 마법",
    },
    {
      name: "천수냉엽장",
      level: 87,
      training: 700000,
      description: "두번째 공격마법 3000/3000",
    },
    {
      name: "전수대법",
      level: 90,
      training: null,
      description: "마법을 전수한다",
    },
    {
      name: "불멸체",
      level: 90,
      training: 500000,
      description: "강한 타격으로 부터 자신을 보호하는 마법 지속시간 30초",
    },
    {
      name: "만월의축복",
      level: 94,
      training: 700000,
      description: "세번째 체력회복 마법 40000/9000",
    },
    {
      name: "중압",
      level: 100,
      training: 700000,
      description: "움직임을 느리게 만드는 마법 지속시간 60초",
    },
    {
      name: "미르의축복",
      level: 140,
      training: 700000,
      description: "네번째 체력회복 마법 100000/33000",
    },
  ],
  thunder: [
    {
      name: "벽력장",
      level: 15,
      training: 50000,
      description: "첫번째 공격 마법 900/250",
    },
    {
      name: "벽력탄",
      level: 35,
      training: 150000,
      description: "두번째 공격 마법 1800/350",
    },
    {
      name: "뇌전",
      level: 40,
      training: 500000,
      description: "첫번째 벼락공격 마법 5000/1500",
    },
    {
      name: "뢰정신장",
      level: 60,
      training: 150000,
      description: "필살기, 바로 앞에 있는 사람을 공격 가능 25000/8000",
    },
    {
      name: "뇌전살수",
      level: 70,
      training: 200000,
      description: "세번째 공격 마법 4000/6500",
    },
    {
      name: "뢰정벼락신공",
      level: 80,
      training: 200000,
      description: "필살기, 두번째 벼락공격 마법 45000/14000",
    },
    {
      name: "천리전음",
      level: 80,
      training: null,
      description: "자신에 말을 멀리 알린다",
    },
    {
      name: "전수대법",
      level: 90,
      training: null,
      description: "마법을 전수한다",
    },
    {
      name: "광섬전",
      level: 90,
      training: 400000,
      description: "네번째 공격 마법 6000/900",
    },
    {
      name: "뢰정일격",
      level: 92,
      training: 400000,
      description: "필살기, 세번째 공격 마법 30000/24000",
    },
    {
      name: "금강신체",
      level: 94,
      training: 500000,
      description:
        "강한 타격으로부터 자신을 보호하는 마법, 사용 중 필살기 사용 불가",
    },
    {
      name: "만마패천뢰공",
      level: 100,
      training: 600000,
      description: "필살기, 네번째 벼락공격 마법 200000/50000",
    },
    {
      name: "폭뢰",
      level: 140,
      training: 400000,
      description: "필살기, 다섯번째 공격 마법 50000/36000",
    },
  ],
  earth: [
    {
      name: "땅의 공격",
      level: 10,
      training: 30000,
      description: "첫번째 체력회복 마법 1500/1500",
    },
    {
      name: "철사장",
      level: 15,
      training: 50000,
      description: "첫번째 공격 마법 1000/450",
    },
    {
      name: "오행기공",
      level: 35,
      training: 200000,
      description: "두번째 체력회복 마법 5000/1500",
    },
    {
      name: "용해석",
      level: 40,
      training: 250000,
      description: "석화 해제 마법",
    },
    {
      name: "공간입구",
      level: 50,
      training: 500000,
      description: "지도사 전용마법",
    },
    {
      name: "선시력",
      level: 52,
      training: 30000,
      description: "공간출구 이름 확인 마법",
    },
    {
      name: "석화",
      level: 55,
      training: 250000,
      description: "모든 생물을 돌로 만드는 마법, 마비 효과",
    },
    {
      name: "오행마공",
      level: 60,
      training: 500000,
      description: "방어력 약화 마법 : 몹에게 사용 시 방어력 약해짐",
    },
    {
      name: "오행신공",
      level: 60,
      training: 500000,
      description: "오행마공 해제 마법, 지속시간 220초",
    },
    {
      name: "회복의바람",
      level: 66,
      training: 1000000,
      description: "세번째 체력회복 마법 8000/2000",
    },
    {
      name: "마공주입",
      level: 70,
      training: 500000,
      description: "타인 마력회복 마법",
    },
    {
      name: "황토대력장",
      level: 70,
      training: 1000000,
      description: "두번째 공격 마법 3000/3000",
    },
    {
      name: "운기조식",
      level: 75,
      training: 500000,
      description: "자기 마력 회복 마법",
    },
    {
      name: "황토대공신법",
      level: 79,
      training: 700000,
      description: "마력 50% 상승 마법, 지속시간 160초",
    },
    {
      name: "천리전음",
      level: 80,
      training: 100000,
      description: "자신에 말을 멀리 알린다.",
    },
    {
      name: "주화입마",
      level: 82,
      training: 500000,
      description: "독을 침투시켜 체력을 줄이는 마법, 지속시간 110초",
    },
    {
      name: "전수대법",
      level: 90,
      training: null,
      description: "마법을 전수한다.",
    },
    {
      name: "사활대공법",
      level: 90,
      training: 800000,
      description: "기절한 사람을 부활시켜주는 마법",
    },
    {
      name: "황토대력체",
      level: 92,
      training: 500000,
      description: "일정 시간 동안 타격을 덜 입는다, 지속시간 20초",
    },
    {
      name: "정령의축복",
      level: 94,
      training: 700000,
      description: "체력 회복 마법 25000/16000",
    },
    {
      name: "대지의봉인",
      level: 100,
      training: 700000,
      description: "마항력을 0으로 만드는 마법, 지속시간 40초",
    },
    {
      name: "분노의역류",
      level: 100,
      training: 800000,
      description: "필살기, 주위 사람들 모두를 공격하는 마법 ?/30000",
    },
    {
      name: "흑사장",
      level: 140,
      training: 700000,
      description: "금강불괴지신 해제시키는 마법, 지속시간 15초",
    },
  ],
  dark: [
    {
      name: "장창도법",
      level: 7,
      training: 12000,
      description: "정확도 40, 파괴 140, 방어 10, 민첩 0, 마항력 0",
    },
    {
      name: "벽사검법",
      level: 25,
      training: 40000,
      description: "정확도 20, 파괴 27, 방어 0, 민첩 0, 마항력 0",
    },
    {
      name: "무정 12도법",
      level: 50,
      training: 150000,
      description: "정확도 0, 파괴 550, 방어 0, 민첩 0, 마항력 0",
    },
    {
      name: "월광도법",
      level: 50,
      training: 150000,
      description: "정확도 40, 파괴 420, 방어 20, 민첩 60, 마항력 0",
    },
    {
      name: "지옥대혈식",
      level: 50,
      training: 150000,
      description: "정확도 0, 파괴 470, 방어 0, 민첩 80, 마항력 0",
    },
    {
      name: "구음진경",
      level: 70,
      training: 700000,
      description: "마력을 체력으로 바꾸는 내공심법",
    },
    {
      name: "일지공",
      level: 72,
      training: 155000,
      description: "음전사 첫 번째 필살기",
    },
    {
      name: "반월 18식",
      level: 75,
      training: 150000,
      description: "정확도 0, 파괴 500, 방어 50, 민첩 50, 마항력 0",
    },
    {
      name: "천리전음",
      level: 80,
      training: null,
      description: "자신의 글을 멀리 전한다.",
    },
    {
      name: "수어검",
      level: 85,
      training: 300000,
      description: "정확도 20, 파괴 650, 방어 0, 민첩 80, 마항력 0",
    },
    {
      name: "목어검",
      level: 85,
      training: 300000,
      description: "정확도 70, 파괴 600, 방어 20, 민첩 60, 마항력 0",
    },
    {
      name: "심어검",
      level: 85,
      training: 300000,
      description: "정확도 0, 파괴 560, 방어 0, 민첩 140, 마항력 40",
    },
    {
      name: "전수대법",
      level: 90,
      training: null,
      description: "무공을 전수한다.",
    },
    {
      name: "초상비",
      level: 92,
      training: 500000,
      description: "빨리 달릴 수 있다(달리면 체력이 찬다)",
    },
    {
      name: "흡자결",
      level: 95,
      training: 200000,
      description: "상대방에 체력을 흡수한다(마력 5000 필요)",
    },
    {
      name: "원혼일기공",
      level: 140,
      training: 400000,
      description: "음전사의 2번째 필살기",
    },
  ],
  light: [
    {
      name: "일광검법",
      level: 7,
      training: 12000,
      description: "정확도 30, 파괴력 110, 방어력 50, 마항력 0, 민첩 0",
    },
    {
      name: "잠룡대비식",
      level: 25,
      training: 40000,
      description: "정확도 30, 파괴력 110, 방어력 100, 마항력 0, 민첩 0",
    },
    {
      name: "독고구검보",
      level: 50,
      training: 150000,
      description: "정확도 40, 파괴력 330, 방어력 60, 마항력 0, 민첩 0",
    },
    {
      name: "비룡검법",
      level: 50,
      training: 150000,
      description: "정확도 10, 파괴력 400, 방어력 40, 마항력 0, 민첩 0",
    },
    {
      name: "십상검법",
      level: 50,
      training: 150000,
      description: "정확도 120, 파괴력 300, 방어력 20, 마항력 0, 민첩 0",
    },
    {
      name: "구양진경",
      level: 70,
      training: 700000,
      description: "마력을 체력으로 바꾼다",
    },
    {
      name: "신검합일 1초식",
      level: 72,
      training: 155000,
      description: "양전사 첫 번째 필살기",
    },
    {
      name: "본국검무 24반",
      level: 75,
      training: 150000,
      description: "정확도 20, 파괴력 420, 방어력 80, 마항력 0, 민첩 0",
    },
    {
      name: "천지전음",
      level: 80,
      training: null,
      description: "자신의 글을 멀리까지 전한다",
    },
    {
      name: "신검합일 2초식",
      level: 85,
      training: 300000,
      description: "정확도 200, 파괴력 520, 방어력 50, 마항력 0, 민첩 0",
    },
    {
      name: "건곤대나이신공",
      level: 85,
      training: 300000,
      description: "정확도 60, 파괴력 480, 방어력 90, 마항력 0, 민첩 60",
    },
    {
      name: "전수대법",
      level: 90,
      training: null,
      description: "상대방에게 무공을 전수",
    },
    {
      name: "허공답보",
      level: 92,
      training: 500000,
      description: "빨리 달릴 수 있다. 달리면 체력이 찬다",
    },
    {
      name: "신검합일 3초식",
      level: 95,
      training: 700000,
      description: "다중 공격 기능, 양전사 2번째 필살기",
    },
    {
      name: "태양첨령공",
      level: 140,
      training: 400000,
      description: "양전사 3번째 필살기",
    },
  ],
};

const Skill = () => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "3px",
        border: "10px solid #999",
        padding: "10px",
      }}
    >
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
          {SKILL_DATA.fire.map(({ name, level, training, description }) => (
            <tr key={`skill-row-${level}`}>
              <td>{name}</td>
              <td>{level}</td>
              <td>{training}</td>
              <td>{description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Skill;

const Table = styled.table`
  width: 100%;
  text-align: center;

  td {
    padding: 4px 10px;
  }
`;
