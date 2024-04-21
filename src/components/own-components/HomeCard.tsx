import React from "react";
import { IHomeCardItem } from "@/types";
import { FaHome } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import Link from "next/link";

function HomeCard({ ClassName, title, tagline, Icon, route }: IHomeCardItem) {
  return (
    <Link
      href={route}
      className={`cursor-pointer flex flex-col min-h-[260px] rounded-[14px] w-full p-6 items-start justify-between ${ClassName}`}
    >
      <span className="p-2 text-3xl rounded bg-white/15">
        <Icon></Icon>
      </span>

      <div className="flex flex-col gap-2 ">
        <h1 className="text-2xl font-extrabold max-sm:text-3xl">{title}</h1>
        <h2 className="text-xl font-normal max-sm:text-1xl">{tagline}</h2>
      </div>
    </Link>
  );
}

export default HomeCard;
