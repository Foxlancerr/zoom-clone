"use client";
import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import MetMeLogo from "./Logo";
import { sideBarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathName = usePathname();
  return (
    <section className=" w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <RiMenu3Line className="text-4xl cursor-pointer sm:hidden"></RiMenu3Line>
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1 w-3/5">
          <MetMeLogo></MetMeLogo>
          <SheetClose asChild>
            <section className="flex flex-1 flex-col gap-2 mt-10">
              {sideBarLinks.map((item) => {
                return (
                  <SheetClose asChild key={item.route}>
                    <Link
                      key={item.label}
                      href={item.route}
                      className={`flex gap-3 items-center justify-start rounded p-4 hover:bg-blue-1 ${
                        pathName == item.route && "bg-blue-1"
                      }`}
                    >
                      <span className="text-2xl">
                        <item.icon />
                      </span>
                      <p className="text-lg font-semibold">{item.label}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
