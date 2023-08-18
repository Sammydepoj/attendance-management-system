import { FiUsers } from "react-icons/fi";
import DemoColumn from "./Chart/Chart";
import RecentClockIn from "./ClockInHistory/RecentClockIn";
const Details = () => {
  const items = [
    {
      icon: <FiUsers />,
      title: "Total Participant",
      value: "100",
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
    <div className=" overflow-x-hidden">
      <div>
        <div className="flex justify-evenly flex-wrap rounded-lg mb-10">
          {items.map((item, index) => (
            <div style={{ backgroundColor: item.color }} key={index} className=" bg-white shadow p-4 m-4 w-[12rem] rounded-lg  h-28">
              {item.icon}
              <h1 style={{ color : item.textColor }} className="font-bold flex items-center gap-2 ">
               {item.title}
              </h1>
              <p className=" text-gray-600 font-bold">{item.value}</p>
            </div>
          ))}
         
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
