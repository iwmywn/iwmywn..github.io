import useRippleEffect from "../hooks/useRippleEffect";

export default function RippleEffect() {
  const ripples = useRippleEffect();

  return (
    <>
      {ripples.map(({ id, x, y }) => (
        <span
          key={id}
          className="ripple pointer-events-none absolute h-4 w-4 animate-ripple bg-[url('/favicon.svg')] bg-contain bg-center bg-no-repeat"
          style={{
            top: `${y}px`,
            left: `${x}px`,
          }}
        />
      ))}
    </>
  );
}
