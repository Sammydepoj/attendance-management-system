import { BiSolidDashboard } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import LogoutButton from "./LogoutButton";
import { useNavigate, useLocation } from "react-router";
const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    {
      name: "Dashboard",
      icon: <BiSolidDashboard />,
      link: "/dashboard/details",
    },
    {
      name: "Clock-Ins",
      icon: <CgNotes />,
      link: "/dashboard/details/clockins",
    },
    {
      name: "Profile",
      icon: <FiUsers />,

      link: "/dashboard/details/profile",
    },

    {
      name: "Participants",
      icon: <GoCommentDiscussion />,
      link: "/dashboard/details/participants",
    },
    // {
    //   name: "Live class",
    //   icon: <AiOutlineVideoCamera />,
    // },
    // {
    //   name: "Transaction",
    //   icon: <AiOutlineWallet />,
    // },
    // {
    //   name: "Settings",
    //   icon: <FiSettings />,
    //   link: "",
    // },
  ];

  return (
    <div className=" border-r-[#e9e6e6] border h-screen px-4 ">
      <div className=" flex flex-wrap  p-4 gap-4 text-[--green] items-center">
        <div className=" bg-[--green] h-[3rem] w-[3rem] rounded-md "></div>
        <div>
          <h1 className=" text-lg font-semibold md:text-2xl">Admin</h1>
          <p className=" text-xs font-normal">DASHBOARD</p>
        </div>
      </div>

      <div className=" flex flex-col gap-[10rem]">
        <ul className="mt-[2.4rem] mx-auto grid">
          {navItems.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  navigate(item.link, { replace: true });
                }}
                className={`${
                  location.pathname === item.link
                    ? "bg-[--green] font-bold rounded-lg"
                    : ""
                }`}
              >
                <li
                  className={`text-xl flex items-center gap-4 p-4 ${
                    location.pathname === item.link
                      ? "text-white"
                      : " text-slate-400"
                  }`}
                >
                  {item.icon}
                  <p className="hidden md:block">{item.name}</p>
                </li>
              </button>
            );
          })}
        </ul>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
