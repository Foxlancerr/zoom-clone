import { ISideBarLinks } from "@/types";
import { FaHome } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";

export const sideBarLinks: ISideBarLinks = [
  {
    label: "Home",
    route: "/",
    icon: FaHome,
  },
  {
    label: "Upcomming",
    route: "/upcomming",
    icon: MdOutlineDateRange,
  },
  {
    label: "Previews",
    route: "/previews",
    icon: MdOutlineDateRange,
  },
  {
    label: "Recording",
    route: "/recording",
    icon: IoVideocam,
  },
  {
    label: "Personal Room",
    route: "/personal-rooms",
    icon: FiPlus,
  },
];
