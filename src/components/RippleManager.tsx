import useRippleEffect from "../hooks/useRippleEffect";

interface RippleEffectProps {
  x: number;
  y: number;
}

function RippleEffect({ x, y }: RippleEffectProps) {
  return (
    <span
      className="ripple pointer-events-none absolute h-4 w-4 animate-ripple bg-[url('/favicon.svg')] bg-contain bg-center bg-no-repeat"
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    />
  );
}

export default function RippleManager() {
  const ripples = useRippleEffect();

  return (
    <>
      {ripples.map((ripple) => (
        <RippleEffect key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}
    </>
  );
}
