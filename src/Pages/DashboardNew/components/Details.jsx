import { FaVideoSlash } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { TbCurrencyYen } from "react-icons/tb";
import DemoColumn from "./Chart/Chart";
import RecentClockIn from "./RecentClockIn";
const Details = () => {
  return (
    <div className="">
      <div>
        <div className="grid grid-cols-4 gap-4 rounded-lg">
          <div className=" bg-white shadow p-4 m-8 rounded-lg  ml-8 mr-16  h-24">
            <h1 className="font-bold text-[--green] flex items-center gap-2 ">
              Total Participants
            </h1>
            <p className=" text-gray-600 font-bold">100</p>
          </div>
          <div className="bg-white shadow p-4 m-8 rounded-lg  ml-8 mr-16">
            <h1 className=" font-bold text-[--green] flex items-center gap-2">
              <FaVideoSlash className="text-3xl" />
              Total Clocked-In Participants
            </h1>
            <p className=" text-gray-600 font-bold">80</p>
          </div>
          <div className="bg-white shadow p-4 m-8 rounded-lg  ml-8 mr-16">
            <h1 className="  font-bold text-[--green] flex items-center gap-2">
              <FiUsers className="text-3xl" />
              Total Absent Participants
            </h1>
            <p className=" text-gray-600 font-bold">20</p>
          </div>
          <div className=" shadow p-4 m-8 rounded-lg  ml-8 mr-16 bg-[--green]">
            <h1 className=" font-bold text-white flex">
              <TbCurrencyYen className="text-3xl" />
              Total clocked Out Participants
            </h1>
            <p className="  font-bold text-white flex items-center gap-2">
              540.50
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-4 flex-wrap justify-around mt-4">
          <RecentClockIn />
          <DemoColumn />
        </div>
      </div>
    </div>
  );
};

export default Details;
