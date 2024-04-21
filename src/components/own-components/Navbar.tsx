import Link from "next/link";
import React from "react";
import { IoVideocam } from "react-icons/io5";
import MobileNav from "./MobileNav";
import MetMeLogo from "./Logo";

function Navbar() {
  return (
    <nav className="flex justify-between fixed z-50 w-full items-center bg-dark-1 px-6 py-4 lg:px-10">
      <MetMeLogo mobile></MetMeLogo>
      <div className="flex justify-between gap-2">
        <h1>Login</h1>
        <h1>user</h1>
        <MobileNav></MobileNav>
      </div>
    </nav>
  );
}

export default Navbar;
