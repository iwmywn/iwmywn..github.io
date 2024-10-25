import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import LinkItem from "./LinkItem";

export default function Links() {
  return (
    <ul className="flex flex-nowrap gap-x-5">
      <LinkItem to="https://github.com/iwmywn" label="Visit GitHub profile">
        <FaGithub />
      </LinkItem>
      <LinkItem
        to="https://www.facebook.com/iwmy.wn"
        label="Visit Facebook profile"
      >
        <FaFacebook />
      </LinkItem>
      <LinkItem
        to="https://www.instagram.com/iwmy_wn"
        label="Visit Instagram profile"
      >
        <FaInstagram />
      </LinkItem>
      <LinkItem to="mailto:itsmethu2408@gmail.com" label="Send an email">
        <IoMdMail />
      </LinkItem>
    </ul>
  );
}
