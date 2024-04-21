import Link from "next/link";
import React from "react";
import { IoVideocam } from "react-icons/io5";

function MetMeLogo({ mobile }: { mobile?: boolean }) {
  return (
    <Link href="/" className="relative items-center flex gap-3">
      <span className="p-2 bg-blue-1 rounded">
        <IoVideocam className="text-3xl text-white"></IoVideocam>
      </span>
      <h1 className={`text-4xl ${mobile && "max-sm:hidden"}`}>
        Met<span className="text-blue-1 font-extrabold">Me</span>
      </h1>
    </Link>
  );
}

export default MetMeLogo;
