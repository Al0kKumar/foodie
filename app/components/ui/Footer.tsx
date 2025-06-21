import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "./Icons"; // Removed InstagramIcon
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="flex lg:px-36 md:px-20 px-4 md:py-4 py-2 bg-[url(/footer-image.jpg)] text-white lg:h-72 md:h-64 h-56 w-full bg-cover bg-center bg-no-repeat overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full gap-6">
        {/* Logo */}
        <div><Logo /></div>

        {/* Made by Alok */}
        <div className="text-slate-300 text-center text-sm md:text-md">
          Made with ❤️ by <span className="text-red-300">Alok</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <Link href="https://github.com/Al0kKumar" target="_blank"><GithubIcon /></Link>
          <Link href="https://www.linkedin.com/in/alok-kumar09/" target="_blank"><LinkedinIcon /></Link>
        </div>

        {/* Footer bottom */}
        {/* <div className="flex justify-between w-full md:w-2/3 text-gray-400 text-xs md:text-sm">
          <p>All rights reserved</p>
          <div className="flex gap-4">
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
