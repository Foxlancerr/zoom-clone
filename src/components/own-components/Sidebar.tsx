"use client"
import { sideBarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
    const pathName = usePathname()
    console.log(pathName)
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-3">
        {sideBarLinks.map((item) => {
          return (
            <Link key={item.label} href={item.route} className={`flex gap-3 items-center justify-start rounded p-4 hover:bg-blue-1 ${pathName == item.route && "bg-blue-1"}`}>
              <span className="text-2xl">
                <item.icon />
              </span>
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Sidebar;
