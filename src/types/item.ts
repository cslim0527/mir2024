import { Job } from "./skill";

export type ItemType = Job | "common";

export type ItemData = Record<ItemType, ItemDetail>;

export interface ItemDetail {
  type: string;
  data: Item[];
}

// https://namu.wiki/w/%EC%8A%A4%ED%83%AF?rev=68#s-2.3.4 (스탯 용어)
export interface Item {
  imgSrc: string;
  name: string;
  level: number;
  acc: number; // 정확도
  def: number; // 방어력
  atk: number; // 파괴력
  rep: number; // 마항력
  price: number;
  etc: string;
}
