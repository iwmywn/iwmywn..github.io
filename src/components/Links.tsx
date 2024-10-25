import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "./Link";

export default function Links() {
  return (
    <ul className="flex flex-nowrap gap-x-5">
      <Link to="https://github.com/iwmywn" label="Visit GitHub profile">
        <FaGithub />
      </Link>
      <Link
        to="https://www.facebook.com/iwmy.wn"
        label="Visit Facebook profile"
      >
        <FaFacebook />
      </Link>
      <Link
        to="https://www.instagram.com/iwmy_wn"
        label="Visit Instagram profile"
      >
        <FaInstagram />
      </Link>
      <Link to="mailto:itsmethu2408@gmail.com" label="Send an email">
        <IoMdMail />
      </Link>
    </ul>
  );
}
