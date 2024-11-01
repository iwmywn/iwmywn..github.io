import { ReactNode } from "react";

interface LinkProps {
  to: string;
  label: string;
  children: ReactNode;
}

export default function Link({ to, label, children }: LinkProps) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className="text-[1.625rem] transition-all duration-300 hover:scale-125"
    >
      {children}
    </a>
  );
}
