interface RippleEffectProps {
  x: number;
  y: number;
}

export default function RippleEffect({ x, y }: RippleEffectProps) {
  return (
    <span
      className="ripple animate-ripple pointer-events-none absolute h-4 w-4 bg-[url('/favicon.svg')] bg-contain bg-center bg-no-repeat"
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    />
  );
}
