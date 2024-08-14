import { IMyNetWorks } from "@/interfaces";

const MyNetWorks = ({
  network_img,
  network_link,
  network_name,
}: IMyNetWorks) => {
  return (
    <a
      target="_blank"
      href={network_link}
      className="text-slate-400 hover:text-white opacity-70 flex justify-center items-center mr-5 hover:opacity-100"
    >
      <img
        src={network_img}
        alt={network_name}
        className="h-10 w-10 rounded-full"
      />
      <span className="h-5">{network_name}</span>
    </a>
  );
};

export default MyNetWorks;
