import { IPropsChildrenTitle } from "@/interfaces";

const Title = ({
  title,
  subTitle,
  altValue,
  myPic,
  myNetWorks,
}: IPropsChildrenTitle) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src={myPic} alt={altValue} className="h-60 w-60 rounded-full" />
      <h1 className="font-thin text-5xl text-center m-10">{title}</h1>
      <h1 className="font-thin text-3xl text-center mt-1 mb-6">{subTitle}</h1>
      {myNetWorks}
    </div>
  );
};
export default Title;
