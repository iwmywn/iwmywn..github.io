import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import socialLinks from "../data/socialLinks";

const iconMap = {
  FaGithub: <FaGithub />,
  FaFacebook: <FaFacebook />,
  FaInstagram: <FaInstagram />,
  IoMdMail: <IoMdMail />,
};

export default function Links() {
  return (
    <ul className="flex flex-nowrap gap-x-5">
      {socialLinks.map(({ href, label, iconName }, index) => (
        <li key={index} className="flex h-9 w-9 items-center justify-center">
          <a
            className="text-[1.625rem] transition-all duration-300 hover:scale-125"
            href={href}
            target="_blank"
            rel="noopener"
            aria-label={label}
          >
            {iconMap[iconName]}
          </a>
        </li>
      ))}
    </ul>
  );
}
