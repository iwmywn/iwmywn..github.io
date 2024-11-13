import socialLinks from "../data/socialLinks";

export default function Info() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <span className="select-none whitespace-nowrap text-3xl font-bold">
        Hoàng Anh Tuấn
      </span>

      <ul className="flex flex-nowrap gap-x-5">
        {socialLinks.map(({ href, label, icon: Icon }, index) => {
          return (
            <li
              key={index}
              className="flex h-9 w-9 items-center justify-center"
            >
              <a
                className="text-[1.625rem] transition-all duration-300 hover:scale-125"
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
