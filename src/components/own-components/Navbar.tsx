import Link from "next/link";
import React from "react";
import { IoVideocam } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="relative items-center flex gap-3">
        <span className="p-2 bg-blue-1 rounded">
        <IoVideocam className="text-3xl text-white"></IoVideocam>
        </span>
        <h1 className="text-4xl">
          Met<span className="text-blue-1 font-extrabold">Me</span>
        </h1>
      </Link>
      <div>profile</div>
    </nav>
  );
}

export default Navbar;
