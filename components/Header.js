import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';
import { BsDownload } from "react-icons/bs";


const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={'/'}>
            <Image
            src={'/logo.svg'}
            width={220}
            height={48}
            alt="logo"
            priority={true}
            />
          </Link>
         <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 md:gap-x-4">
         <Socials />
          <a href={"/public/document/Resume.docx"} download>
          <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Resume
            </span>
            <BsDownload className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] " />
          </button>
        </a>
         </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
