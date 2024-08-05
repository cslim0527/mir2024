import { useEffect, useState } from "react";

export interface UseCoords {
  id: string;
}

type Coords =
  | {
      width: number;
      height: number;
      top: number;
      left: number;
    }[]
  | null;

export const useCoords = ({ id }: UseCoords) => {
  const [coords, setCoords] = useState<Coords>(null);
  useEffect(() => {
    const areas = document.querySelectorAll(`#${id} area`);
    if (!areas.length) return;

    const result = [];
    for (let j = 0; j < areas.length; j += 1) {
      const area = areas[j] as HTMLAreaElement;
      const coords = area.coords.split(",").map(Number);

      let xCoords = [];
      let yCoords = [];

      for (let i = 0; i < coords.length; i += 2) {
        xCoords.push(coords[i]);
        yCoords.push(coords[i + 1]);
      }

      const minX = Math.min(...xCoords);
      const maxX = Math.max(...xCoords);
      const minY = Math.min(...yCoords);
      const maxY = Math.max(...yCoords);

      const width = maxX - minX;
      const height = maxY - minY;
      const positionX = minX;
      const positionY = minY;

      result.push({
        width,
        height,
        top: positionY,
        left: positionX,
      });
    }

    setCoords(result);
  }, [id]);

  return { coords };
};
