import { IconType } from "react-icons";

export interface ISidebarLinkItem {
  label: string;
  route: string;
  icon: IconType;
}
export type ISideBarLinks = ISidebarLinkItem[];

export interface IHomeCardItem {
  title: string;
  tagline: string;
  route: string;
  Icon: IconType;
  ClassName: string;
}
export type IHomeCardLinks = IHomeCardItem[];
