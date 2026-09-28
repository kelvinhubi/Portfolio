import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      if (cursor.current)
        cursor.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
    };
    const enter = () => setActive(true);
    const leave = () => setActive(false);
    window.addEventListener("mousemove", move);
    const targets = document.querySelectorAll("a, button");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", enter);
      target.addEventListener("mouseleave", leave);
    });
    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", enter);
        target.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div ref={cursor} className={`cursor ${active ? "cursor-active" : ""}`} />
  );
}
