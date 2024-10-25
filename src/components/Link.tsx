import { ReactNode } from "react";

interface LinkProps {
  to: string;
  label: string;
  children: ReactNode;
}

export default function Link({ to, label, children }: LinkProps) {
  return (
    <li className="flex h-9 w-9 items-center justify-center">
      <a
        href={to}
        target="_blank"
        rel="noopener"
        aria-label={label}
        className="text-2xl transition-all duration-300 hover:scale-125"
      >
        {children}
      </a>
    </li>
  );
}
