import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex-between w-full z-50 bg-dark-1 px-6 lg:px-10">
      <Link href="/" className="flex gap-1 items-center">
        <Image
          src={"../icons/logo.svg"}
          width={32}
          height={32}
          alt="logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] p-2 font-extrabold text-white max-sm:hidden">
          SkyConnect
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* Clerk Managment */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
