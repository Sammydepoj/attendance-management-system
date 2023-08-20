import { Table } from "antd";
import { useState } from "react";
import useGetParticipantInfo from "../../hooks/useGetParticipants";

const Participants = () => {
  const { participantsInfo } = useGetParticipantInfo();

  const columns = [
    {
      title: "S/N",
      dataIndex: "sn",
      key: "sn",
    },

    {
      title: "First-Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last-Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  const data = participantsInfo.map((participant, index) => {
    return {
      key: participant.id,
      sn: index + 1,
      firstName: participant.firstName,
      lastName: participant.lastName,
      email: participant.email,
    };
  });

  
  return (
    <div className=" w-[23.5rem] overflow-x-auto md:w-fit md:mx-[2rem] lg:mx-[4rem]">
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Participants;
