import { useCallback, useState } from "react";

export const useMaps = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [castleSrc, setCastleSrc] = useState<string>();
  const handleClick = useCallback((e: any) => {
    e.preventDefault();
    const castleName = e.target.title;
    if (castleName) {
      setIsModalOpen(true);
      setCastleSrc(`/assets/images/maps/${castleName}.gif`);
    }
  }, []);

  const handleToggleModal = useCallback((open: boolean) => {
    setIsModalOpen(open);
  }, []);

  return { handleToggleModal, handleClick, castleSrc, isModalOpen };
};
