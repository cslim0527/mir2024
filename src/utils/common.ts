import { SyntheticEvent } from "react";

export const comma = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const ifErrorNoImg = (e: SyntheticEvent<HTMLImageElement, Event>) =>
  (e.currentTarget.src = "/assets/images/no_img.gif");

/**
 * 주어진 시간(밀리초) 동안 대기하는 딜레이 함수
 * @param {number} ms - 대기 시간 (밀리초)
 * @returns {Promise} - 딜레이가 끝난 후 해결되는 Promise
 */
export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
