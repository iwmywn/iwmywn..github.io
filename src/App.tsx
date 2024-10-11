import "./index.css";
import Info from "./components/Info";
import RandomQuote from "./components/RandomQuote";
import RippleEffect from "./components/RippleEffect";
import React, { useState } from "react";

const MemoizedInfo = React.memo(Info);
const MemoizedRandomQuote = React.memo(RandomQuote);

export default function App() {
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const handleClick = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const newRipple = {
      x: clientX,
      y: clientY,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <main
      className="flex min-h-screen animate-color-change flex-col items-center justify-center gap-y-4 text-white"
      onClick={handleClick}
    >
      {ripples.map((ripple) => (
        <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}
      <MemoizedInfo />
      <MemoizedRandomQuote />
    </main>
  );
}
