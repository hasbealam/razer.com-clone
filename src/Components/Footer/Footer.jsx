import { useEffect, useState } from "react";
import { GridFooterLayout } from "./GridFooterLayout";
import { AccordionFooter } from "./AccordionFooter";

export function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>{windowWidth < 768 ? <AccordionFooter /> : <GridFooterLayout />}</div>
  );
}
