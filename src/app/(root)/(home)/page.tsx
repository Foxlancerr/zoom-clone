import HomeCard from "@/components/own-components/HomeCard";
import HomeHero from "@/components/own-components/HomeHero";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { homeCardLinks } from "@/constants";
import HomeFlipList from "@/components/own-components/HomeFlipList";

function page() {
  return (
    <section>
      <HomeHero></HomeHero>
      <HomeFlipList></HomeFlipList>
    </section>
  );
}

export default page;
