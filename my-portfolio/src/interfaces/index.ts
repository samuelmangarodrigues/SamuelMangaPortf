import { ReactNode } from "react";

export interface IPropsChildrenTitle {
  title: ReactNode;
  subTitle: ReactNode;
  myPic: string;
  altValue: string;
  myNetWorks: ReactNode;
}
export interface IPropsChildren {
  children: ReactNode;
}
export interface IMySkillsProps {
  skill_name: string;
  skill_img: string;
  skill_description: string;
}

export interface IMyNetWorks {
  network_name: string;
  network_img: string;
  network_link: string;
}
