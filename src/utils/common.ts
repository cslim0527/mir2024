import { SyntheticEvent } from "react";

export const comma = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const ifErrorNoImg = (e: SyntheticEvent<HTMLImageElement, Event>) =>
  (e.currentTarget.src = "/assets/images/no_img.gif");
