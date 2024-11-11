import { useState, useEffect } from "react";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export default function useRippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const newRipple = {
        x: clientX,
        y: clientY,
        id: Date.now(),
      };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id),
        );
      }, 600);
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return ripples;
}
