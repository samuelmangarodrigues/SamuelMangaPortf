import { ReactNode } from "react";

export interface IPropsChildrenTitle {
  title: ReactNode;
  subTitle: ReactNode;
}
export interface IPropsChildren {
  children: ReactNode;
}
export interface IMySkillsProps {
  skill_name: string;
  skill_img: string;
  skill_description: string;
}
