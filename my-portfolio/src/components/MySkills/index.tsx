import { IMySkillsProps } from "@/interfaces";

const MySkills = ({
  skill_description,
  skill_img,
  skill_name,
}: IMySkillsProps) => {
  return (
    <div className="flex flex-col">
      <img className="w-6" src={skill_img} alt={skill_name} />
      <div>{skill_name}</div>
      <span>{skill_description}</span>
    </div>
  );
};

export default MySkills;
