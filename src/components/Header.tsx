"use client";

import Image from "next/image";
// import SearchInput from "./SearchInput";
import logo from "@/public/logo.svg";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col items-center sticky top-0 z-50 ">
      <div className="bg-[#1e5951] w-full h-16 flex flex-col items-center justify-center py-10">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            height={31}
            width={250}
            className="w-[123px] h-[24px] sm:w-[165px] sm:h-[32px] md:w-[180px] md:h-[35px]"
          />
        </Link>

        <p className="text-white font-main text-[18px] italic">Vibe Match</p>
      </div>
    </header>
  );
}

export default Header;
