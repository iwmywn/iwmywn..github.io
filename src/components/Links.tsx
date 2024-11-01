import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "./Link";
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
      {socialLinks.map(({ href, label, icon }, index) => (
        <Link key={index} to={href} label={label}>
          {iconMap[icon]}
        </Link>
      ))}
    </ul>
  );
}
