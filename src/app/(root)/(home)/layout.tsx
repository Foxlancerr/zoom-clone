import Navbar from "@/components/own-components/Navbar";
import Sidebar from "@/components/own-components/Sidebar";
import React, { ReactNode } from "react";

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <Navbar></Navbar>
      <div className="flex">
        <Sidebar></Sidebar>
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 bg-dark-2 ">
          <div className="w-full"> {children}</div>
        </section>
      </div>
    </main>
  );
}

export default HomeLayout;
