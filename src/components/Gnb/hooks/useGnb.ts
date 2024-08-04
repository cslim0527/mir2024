import { useState } from "react";

export const useGnb = () => {
  const [isDimmedOpen, setIsDimmedOpen] = useState(false);
  const handleToggleDimmed = (open: boolean) => {
    setIsDimmedOpen(open);
  };

  return { isDimmedOpen, handleToggleDimmed };
};
