import useGetParticipantInfo from "../../../../hooks/useGetParticipants";

export const useChartData = () => {
  const { participantsInfo } = useGetParticipantInfo();
  // console.log(participantsInfo[0])
  const present = participantsInfo?.filter((present) => present.clockInStatus);

  const absent = participantsInfo?.filter((absent) => !absent.clockInStatus);

  const clockOuts = participantsInfo?.filter(
    (clockOut) => clockOut.clockInStatus == false
  );

  return [
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
  ];
};
