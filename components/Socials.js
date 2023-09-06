import Link from "next/link";
import {
  RiTwitterLine,
  RiInstagramLine,
  RiGithubLine,
  RiDribbbleLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://twitter.com/halfdobis"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiTwitterLine />
      </Link>
      <Link
        href="https://www.instagram.com/halfdobis"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://github.com/halfdobis"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href="https://dribbble.com/halfdobis"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiDribbbleLine />
      </Link>
      <Link
        href="https://www.linkedin.com/in/adaobi-ezenwa"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
