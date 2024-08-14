import { mySkills } from "@/utils/my-skills";
import MySkills from "./MySkill";

const MySkillsList = () => {
  return (
    <div className="flex flex-wrap">
      {mySkills.map((skill) => (
        <MySkills
          skill_description={skill.skill_description}
          skill_img={skill.skill_img}
          skill_name={skill.skill_name}
        />
      ))}
    </div>
  );
};

export default MySkillsList;
