
import { FaVideoSlash } from "react-icons/fa";
import { FiUsers } from "react-icons/fi"
import { BsArrowRightShort } from "react-icons/bs"
import { TbCurrencyYen } from "react-icons/tb"
import { MdGraphicEq } from "react-icons/md"
import { BiSearch } from "react-icons/bi"
import Sidebar from "./components/SideBar";
const Dashboard = () => {
    return (
        <div className="grid grid-cols-[15rem_1fr]">
            <div className="bg-[--white]">
                <Sidebar />
            </div>
            <div >
                <div className="flex justify-between p-4">
                    <div className="">
                        <p className=" text-black-600 font-bold">Hi Dixit.</p>
                        <h1 className=" text-xl font-bold text-[--green]"> Welcome to Sovia!</h1>
                    </div>
                    <div className="bg-[--blur] shadow w-44 rounded-lg h-11">
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="border rounded px-4 py-2 pr-12 w-full"
                                    placeholder="Search"
                                />
                                <div className="absolute top-0 right-0 h-full flex items-center px-3">
                                    <BiSearch className="text-gray-400" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="border">
                    <div >
                        <div className="grid grid-cols-4 gap-4 rounded-lg">
                            <div className=" bg-white shadow p-4 m-8 rounded-lg  ml-8 mr-16  h-24">
                                <h1 className="font-bold text-[--green] flex items-center gap-2 "> Live courses</h1>
                                <p className=" text-gray-600 font-bold">13</p>
                            </div>
                            <div className="bg-white shadow p-4 m-8 rounded-lg  ml-8 mr-16">
                                <h1 className=" font-bold text-[--green] flex items-center gap-2" > <FaVideoSlash className="text-3xl" />Videos</h1>
                                <p></p>
                            </div>
                            <div className="bg-white shadow p-4 m-8 rounded-lg  ml-8 mr-16">
                                <h1 className="  font-bold text-[--green] flex items-center gap-2"><FiUsers className="text-3xl" />Student</h1>
                                <p></p>
                            </div>
                            <div className=" shadow p-4 m-8 rounded-lg  ml-8 mr-16 bg-[--green]">
                                <h1 className=" font-bold text-white ">Earning</h1>
                                <p className="  font-bold text-white flex items-center gap-2"> <TbCurrencyYen className="text-3xl" /> 540.50</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="flex gap-0">
                            <div className="bg-white shadow rounded-lg  h-[22rem] w-[60%] m-16 ml-8 mr-16">
                                <h1 className="font-bold text-[--green] mt-5 ml-5 text-black text-2xl">Top Courses</h1>
                                <div className="flex">
                                    <div>
                                        <p className="font-bold text-black flex items-center gap-2 mt-5 ml-5"> <FaVideoSlash className="text-2xl text-[--gold]" /> History of india </p>
                                        <p className=" text-black ml-5 text-20">#34561</p>
                                    </div>
                                    <div className="ml-96 mt-5 ">
                                        <p className="text-[--green]"> $2567.89</p>
                                        <p className="text-[--gray]"> 131 subscribers</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div>
                                        <p className="font-bold text-black flex items-center gap-2 mt-5 ml-5"> <FaVideoSlash className="text-2xl text-[--gold]" /> History of india </p>
                                        <p className=" text-black ml-5 text-20">#34561</p>
                                    </div>
                                    <div className="ml-96 mt-5 ">
                                        <p className="text-[--green]"> $2567.89</p>
                                        <p className="text-[--gray]"> 131 subscribers</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div>
                                        <p className="font-bold text-black flex items-center gap-2 mt-5 ml-5"> <FaVideoSlash className="text-2xl text-[--gold]" /> History of india </p>
                                        <p className=" text-black ml-5 text-20">#34561</p>
                                    </div>
                                    <div className="ml-96 mt-5 ">
                                        <p className="text-[--green]"> $2567.89</p>
                                        <p className="text-[--gray]"> 131 subscribers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white shadow rounded-lg  h-[22rem] w-[60%] m-16">
                                <h1 className="font-bold text-black mt-3 ml-3 text-3xl">Upcoming Tasks</h1>
                                <div className="border-l-4 border-[--green] p-3 ml-3 mt-3">
                                    <p>Enviroment Discuss</p>
                                    <p>01:00-02:00</p>
                                </div>
                                <div className="border-l-4 border-[--green] p-4 ml-3 mt-3">
                                    <p>Enviroment Discuss</p>
                                    <p>01:00-02:00</p>

                                </div>
                                <div className="border-l-4 border-[--green] p-4 ml-3 mt-3">
                                    <p>Enviroment Discuss</p>
                                    <p>01:00-02:00</p>
                                </div>

                                <p className="ml-[80%] text-[--green] flex items-center font-bold">View all tasks <BsArrowRightShort /></p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex ">
                            <div className="bg-white shadow rounded-lg w-[65%] h-72 m-16 ml-8 mr-16">
                                <p className=" text-[--green] font-bold ml-3 mt-3">Viewership      New subscribers     Earnings  </p>
                                <p className=" ml-[80%] text-[--green]"><MdGraphicEq /></p>
                                <p className="text-black font-bold ml-3 mt-3 text-xl">1,130 hours</p>
                            </div>
                            <div className="bg-white shadow rounded-lg w-[35%] h-72 m-16 ml-8 mr-16">
                                <h1 className="text-xl font-bold text-[--green] ml-3 mt-3 " >Discusssion box</h1>
                                <p className="text-black mt-3 ml-3 font">Recent</p>
                                <p className="w-9 h-9 shadow rounded-full flex items-center justify-center ml-3 mt-3"></p>
                                <p className="w-9 h-9 shadow rounded-full flex items-center justify-center ml-3 mt-3"></p>
                                <p className="w-9 h-9 shadow rounded-full flex items-center justify-center ml-3 mt-3"></p>
                                <p className="ml-[80%] text-[--green] flex items-center font-bold">View all <BsArrowRightShort /></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard