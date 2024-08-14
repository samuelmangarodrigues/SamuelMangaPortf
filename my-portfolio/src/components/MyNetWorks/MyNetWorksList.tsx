import MyNetWorks from "./MyNetWorks";
import { myNetworks } from "@/utils/my-networks";

const MyNetWorkList = () => {
  return (
    <div className="flex justify-center">
      {myNetworks.map((net) => (
        <MyNetWorks
          network_img={net.network_img}
          network_link={net.network_link}
          network_name={net.network_name}
        />
      ))}
    </div>
  );
};
export default MyNetWorkList;
