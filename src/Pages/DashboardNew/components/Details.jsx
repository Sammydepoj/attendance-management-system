import { FiUsers } from "react-icons/fi";
import DemoColumn from "./Chart/Chart";
import RecentClockIn from "./ClockInHistory/RecentClockIn";
import useGetParticipantInfo from "../../../hooks/useGetParticipants";
// import useGetUserInfo from "../../../hooks/useGetUserInfo";

const Details = () => {
  const { participantsInfo } = useGetParticipantInfo();
  // const { userInfo: participantsClockinHistory } =
  //   useGetUserInfo("clockinHistory");
  // console.log(userInfo);
  // console.log(participantsClockinHistory);
  const present = participantsInfo?.filter((present) => present.clockInStatus);

  const absent = participantsInfo?.filter((absent) => !absent.clockInStatus);

  const clockOuts = participantsInfo?.filter(
    (clockOut) => clockOut.clockInStatus == false
  );

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
      value: present.length,
      textColor: "#A3AED0",
    },
    {
      icon: <FiUsers />,
      title: "Total Absent Participant",
      value: absent.length,
      textColor: "#A3AED0",
    },
    {
      icon: <FiUsers />,
      title: "Total Clocked-Out Participant",
      value: clockOuts.length,
      color: "rgb(96 165 250)",
      textColor: "white",
    },
  ];
  return (
    <div className="">
      <div>
        <div className="flex flex-wrap  gap-[1rem] rounded-lg mb-10">
          {items.map((item, index) => (
            <div
              style={{ backgroundColor: item.color }}
              key={index}
              className=" bg-white shadow px-[1rem] py-[1rem] m-2 rounded-lg"
            >
              <span className="flex items-center gap-2">
                {item.icon}
                <h1
                  style={{ color: item.textColor }}
                  className="font-bold flex items-center gap-2 "
                >
                  {item.title}
                </h1>
              </span>
              <p className=" text-gray-600 font-bold text-center">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className=" flex flex-wrap lg:flex-nowrap gap-[2rem] md:gap-[4rem] pl-4">
          <RecentClockIn participantsInfo={present} />
          <DemoColumn />
        </div>
      </div>
    </div>
  );
};

export default Details;
