import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import LinkItem from "./LinkItem";

export default function Links() {
  return (
    <ul className="flex gap-5">
      <LinkItem to="https://github.com/iwmywn">
        <FaGithub fontSize={25} />
      </LinkItem>
      <LinkItem to="https://www.facebook.com/iwmy.wn">
        <FaFacebook fontSize={25} />
      </LinkItem>
      <LinkItem to="https://www.instagram.com/iwmy_wn">
        <FaInstagram fontSize={25} />
      </LinkItem>
      <LinkItem to="mailto:itsmethu2408@gmail.com">
        <IoMdMail fontSize={25} />
      </LinkItem>
    </ul>
  );
}
