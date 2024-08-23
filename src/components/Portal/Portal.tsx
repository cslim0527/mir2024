import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

interface PortalProps {
  children: React.ReactNode;
}

export default function Portal({ children }: PortalProps) {
  const [isCSR, setIsCSR] = useState(false);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (typeof window === "undefined") return <></>;
  if (!isCSR) return <></>;

  const node = document.getElementById("portal") as Element;
  return ReactDOM.createPortal(children, node);
}
