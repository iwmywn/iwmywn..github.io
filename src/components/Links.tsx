import socialLinks from "../data/socialLinks";

export default function Links() {
  return (
    <ul className="flex flex-nowrap gap-x-5">
      {socialLinks.map(({ href, label, icon }, index) => {
        const LinkIcon = icon;

        return (
          <li key={index} className="flex h-9 w-9 items-center justify-center">
            <a
              className="text-[1.625rem] transition-all duration-300 hover:scale-125"
              href={href}
              target="_blank"
              rel="noopener"
              aria-label={label}
            >
              <LinkIcon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
