// import MySkills from "@/components/MySkills";
import Title from "@/components/Title/Title";
import MySkillsList from "@/components/MySkills/MySkillsList";
import MyNetWorkList from "@/components/MyNetWorks/MyNetWorksList";

const HomePage = () => {
  return (
    <>
      <Title
        title="Samuel Manga Rodrigues"
        subTitle="Full Stack Developer"
        myPic="src\assets\foto_minha.jpg"
        altValue="Samuel Manga Foto"
        myNetWorks={<MyNetWorkList />}
      />
      <MySkillsList />
    </>
  );
};
export default HomePage;
