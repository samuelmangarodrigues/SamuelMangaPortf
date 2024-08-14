import { IPropsChildren } from "@/interfaces";

const ContainerApp = ({ children }: IPropsChildren) => {
  return <div className="bg-slate-950">{children}</div>;
};
export default ContainerApp;
