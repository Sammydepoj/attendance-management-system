import { FiUsers } from "react-icons/fi";
import DemoColumn from "./Chart/Chart";
import RecentClockIn from "./ClockInHistory/RecentClockIn";
import useGetParticipantInfo from "../../../hooks/useGetParticipants";
const Details = () => {
  const { participantsInfo } = useGetParticipantInfo();
  console.log(participantsInfo);

  const items = [
    {
      icon: <FiUsers />,
      title: "Total Participant",
      value: participantsInfo?.length,
      textColor: "#A3AED0",
    },
    {
      icon: <FiUsers />,
      title: "Total Clocked-In Participant",
      value: "80",
      textColor: "#A3AED0",
    },
    {
      icon: <FiUsers />,
      title: "Total Absent Participant",
      value: "80",
      textColor: "#A3AED0",
    },
    {
      icon: <FiUsers />,
      title: "Total Clocked-Out Participant",
      value: "16",
      color: "rgb(96 165 250)",
      textColor: "white",
    },
  ];
  return (
    <div className="">
      <div>
        <div className="flex justify-evenly rounded-lg mb-10">
          {items.map((item, index) => (
            <div
              style={{ backgroundColor: item.color }}
              key={index}
              className=" bg-white shadow px-[2rem] py-[1rem] m-2 w-[8rem] md:w-fit rounded-lg"
            >
              {item.icon}
              <h1
                style={{ color: item.textColor }}
                className="font-bold flex items-center gap-2 "
              >
                {item.title}
              </h1>
              <p className=" text-gray-600 font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className=" w-full flex flex-wrap md:flex-nowrap gap-[2rem] md:gap-[4rem] overflow-x-scroll ">
          <RecentClockIn />
          <DemoColumn />
        </div>
      </div>
    </div>
  );
};

export default Details;
