import { useState, useEffect, useCallback } from "react";
import { Pie } from "@ant-design/plots";
import useGetParticipantInfo from "../../../../hooks/useGetParticipants";

const DemoColumn = () => {
  const [data, setData] = useState([]);

  const { participantsInfo } = useGetParticipantInfo();
  const getChartData = useCallback(() => {
    // console.log(participantsInfo[0])
    const present = participantsInfo?.filter(
      (present) => present.clockInStatus
    );

    const absent = participantsInfo?.filter((absent) => !absent.clockInStatus);

    const clockOuts = participantsInfo?.filter(
      (clockOut) => clockOut.clockInStatus == false
    );
    setData([
      // {
      //   type: "Total Clocked-In Participants",
      //   value: participantsInfo.length,
      // },
      {
        type: "Total Present Participants",
        value: present?.length,
      },
      {
        type: "Total Absent Participants",
        value: absent?.length,
      },
      {
        type: "Total Clocked-Out Participants",
        value: clockOuts?.length,
      },
    ]);
  }, [participantsInfo]);

  useEffect(() => {
    getChartData();
  }, [getChartData]);
  // const { registerTheme } = G2;
  // registerTheme("custom-theme", {
  //   colors10: [
  //     "#025DF4",
  //     "#DB6BCF",
  //     "#2498D1",
  //     "#BBBDE6",
  //     "#4045B2",
  //     "#21A97A",
  //     "#FF745A",
  //     "#007E99",
  //     "#FFA8A8",
  //     "#2391FF",
  //   ],
  //   colors20: [
  //     "#025DF4",
  //     "#DB6BCF",
  //     "#2498D1",
  //     "#BBBDE6",
  //     "#4045B2",
  //     "#21A97A",
  //     "#FF745A",
  //     "#007E99",
  //     "#FFA8A8",
  //     "#2391FF",
  //     "#FFC328",
  //     "#A0DC2C",
  //     "#946DFF",
  //     "#626681",
  //     "#EB4185",
  //     "#CD8150",
  //     "#36BCCB",
  //     "#327039",
  //     "#803488",
  //     "#83BC99",
  //   ],
  // });
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "inner",
      offset: "-10%",
      content: "{percentage}",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
    theme: "custom-theme",
  };
  return (
    <div className=" my-8 w-[100%] md:m-0 md:w-[40%] overflow-x-scroll">
      <Pie {...config} />
    </div>
  );
};
export default DemoColumn;
