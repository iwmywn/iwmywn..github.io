import "./index.css";
import Info from "./components/Info";
import RandomQuote from "./components/RandomQuote";
import RippleEffect from "./components/RippleEffect";
import useRippleEffect from "./hooks/useRippleEffect";
import { memo } from "react";

const MemoizedInfo = memo(Info);
const MemoizedRandomQuote = memo(RandomQuote);

export default function App() {
  const ripples = useRippleEffect();

  return (
    <>
      <main className="flex min-h-screen animate-color-change flex-col items-center justify-center gap-y-4 text-white">
        <MemoizedInfo />
        <MemoizedRandomQuote />
      </main>
      {ripples.map((ripple) => (
        <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}
    </>
  );
}
