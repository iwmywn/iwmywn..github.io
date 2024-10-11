import { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  to: string;
}

export default function LinkItem({ to, children }: LinkProps) {
  return (
    <li className="flex h-9 w-9 items-center justify-center rounded-full">
      <a href={to} target="_blank">
        {children}
      </a>
    </li>
  );
}
