import { Table, Spin } from "antd";
import useGetParticipantInfo from "../../hooks/useGetParticipants";

const Participants = () => {
  const { participantsInfo, loading } = useGetParticipantInfo();

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
    {
      title: "Programme",
      dataIndex: "programme",
      key: "programme",
    },
  ];

  const data = participantsInfo?.map((participant, index) => {
    return {
      key: participant.id,
      sn: index + 1,
      firstName: participant.firstName,
      lastName: participant.lastName,
      email: participant.email,
      programme: participant.programme,
    };
  });

  return (
    <Spin spinning={loading}>
      <div className="overflow-x-auto">
        <Table columns={columns} dataSource={data} />
      </div>
    </Spin>
  );
};

export default Participants;
