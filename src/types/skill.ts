export type Job = "fire" | "water" | "thunder" | "earth" | "dark" | "light";

export interface JobDetail {
  job: string;
  skill: SkillItem[];
}

export type JobData = Record<Job, JobDetail>;

export interface SkillItem {
  name: string;
  level: number;
  training: number | null;
  description: string;
}
