import { IconType } from "react-icons";

export interface ServiceInterface {
  title: string;
  Icon: IconType;
}

export interface ServiceCardPropsInterface {
  service: ServiceInterface;
}

export interface SkillsInterface {
  name: string;
  level: string;
  Icon: IconType;
}

export interface ProjectsInterface {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "node" | "express" | "next" | "mongo";
