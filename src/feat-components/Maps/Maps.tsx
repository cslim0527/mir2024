"use client";

import { useMaps } from "./hooks/useMaps";
import Portal from "@/src/components/Portal";
import Dimmed from "@/src/components/Dimmed";
import { ifErrorNoImg } from "@/src/utils/common";
import styles from "./Maps.module.scss";

interface CastleModalProps {
  src?: string;
  handleToggleModal: (open: boolean) => void;
}

const CastleModal = ({ src, handleToggleModal }: CastleModalProps) => {
  if (!src) return null;
  return (
    <article className={styles.modal}>
      <button
        className="close-button"
        type="button"
        onClick={() => handleToggleModal(false)}
      >
        그만보기
      </button>
      <img src={src} alt="" onError={(e) => ifErrorNoImg(e, [700, 470])} />
    </article>
  );
};

const Maps = () => {
  const { handleClick, castleSrc, isModalOpen, handleToggleModal } = useMaps();

  return (
    <>
      <Portal>
        {isModalOpen && (
          <>
            <Dimmed handleClose={() => handleToggleModal(false)} />
            <CastleModal
              src={castleSrc}
              handleToggleModal={handleToggleModal}
            />
          </>
        )}
      </Portal>
      <div className={styles["full-map"]}>
        <div className="title">전체지도</div>

        <div className="maps">
          <div className="sub-title">
            비천성, 농안성, 남소성,백암성, 장백성, 마계성을 클릭하시면 성내부
            지도를 확인 할 수 있습니다.
          </div>
          <img src="/assets/images/maps/full_map.gif" useMap="#image-map" />

          <map name="image-map" onClick={handleClick}>
            <area
              target=""
              alt="비천성"
              title="비천성"
              href=""
              coords="22,137,59,109,88,132,49,167"
              shape="poly"
            />
            <area
              target=""
              alt="농안성"
              title="농안성"
              href=""
              coords="256,228,297,197,327,225,284,251"
              shape="poly"
            />
            <area
              target=""
              alt="남소성"
              title="남소성"
              href=""
              coords="249,392,288,360,318,381,281,414"
              shape="poly"
            />
            <area
              target=""
              alt="백암성"
              title="백암성"
              href=""
              coords="140,487,182,454,211,478,169,514"
              shape="poly"
            />
            <area
              target=""
              alt="장백성"
              title="장백성"
              href=""
              coords="583,43,623,9,655,34,614,65"
              shape="poly"
            />
            <area
              target=""
              alt="마계성"
              title="마계성"
              href=""
              coords="589,300,634,267,656,293,617,325"
              shape="poly"
            />
          </map>
        </div>
      </div>
    </>
  );
};

export default Maps;
