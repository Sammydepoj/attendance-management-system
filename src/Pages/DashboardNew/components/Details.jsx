import { FaVideoSlash } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsArrowRightShort } from "react-icons/bs";
import { TbCurrencyYen } from "react-icons/tb";
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
        <div className="flex gap-0">
          <div className="bg-white shadow rounded-lg  h-[20rem] w-[60%] m-16 ml-8 mr-16">
            <h1 className="font-bold text-[--green] mt-5 ml-5 text-black text-2xl">
              Top Courses
            </h1>
            <div>
              <p className="font-bold text-black flex items-center gap-2 mt-5 ml-5">
                {" "}
                <FaVideoSlash className="text-2xl text-[--gold]" /> History of
                india{" "}
              </p>
              <p className=" text-black ml-5 text-20">#34561</p>
            </div>
            <div>
              <p></p>
              <p></p>
            </div>
            <div className="main"></div>
            <p className="font-bold  text-black flex items-center gap-2 mt-5 ml-5">
              {" "}
              <FaVideoSlash className="text-2xl text-[--gold]" /> History of
              india{" "}
            </p>
            <p className=" text-black ml-5">#34561</p>
            <p className="font-bold  text-black flex items-center gap-2 mt-5 ml-5">
              {" "}
              <FaVideoSlash className="text-2xl text-[--gold]" /> History of
              india{" "}
            </p>
            <p className=" text-black ml-5">#34561</p>
          </div>
          <div className="bg-white shadow rounded-lg  h-[20rem] w-[60%] m-16">
            <h1 className="font-bold text-black mt-3 ml-3 text-3xl">
              Upcoming Tasks
            </h1>
            <p className="border-l-4 border-[--green] p-4 ml-3 mt-3">
              Enviroment Discuss
            </p>
            <p className="border-l-4 border-[--green] p-4 ml-3 mt-3">
              Enviroment Discuss
            </p>
            <p className="border-l-4 border-[--green] p-4 ml-3 mt-3">
              Enviroment Discuss
            </p>
            <p className="ml-[80%] text-[--green] flex items-center font-bold">
              View all tasks <BsArrowRightShort />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
