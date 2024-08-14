import { IPropsChildrenTitle } from "@/interfaces";

const Title = ({ title, subTitle }: IPropsChildrenTitle) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-thin text-5xl text-center m-10">{title}</h1>
      <h1 className="font-thin text-3xl text-center mt-1">{subTitle}</h1>
    </div>
  );
};
export default Title;
