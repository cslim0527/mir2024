import { SyntheticEvent } from "react";

export const comma = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const ifErrorNoImg = (
  e: SyntheticEvent<HTMLImageElement, Event>,
  size?: [number, number]
) =>
  (e.currentTarget.src = size
    ? `https://dummyimage.com/${size[0]}x${size[1]}/000/fff&text=No+Image`
    : "https://dummyimage.com/180x42/000/fff&text=No+Image");
