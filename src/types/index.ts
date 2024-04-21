import { IconType } from "react-icons";

export interface ISidebarLinkItem {
  label: string;
  route: string;
  icon: IconType;
}
export type ISideBarLinks = ISidebarLinkItem[]

