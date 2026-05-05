import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      className="pointer-events-none fixed -z-10 h-[500px] w-[500px] rounded-full opacity-40 blur-[100px] transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
        background: "radial-gradient(circle, oklch(0.86 0.22 145 / 0.3), transparent 60%)",
      }}
    />
  );
}
