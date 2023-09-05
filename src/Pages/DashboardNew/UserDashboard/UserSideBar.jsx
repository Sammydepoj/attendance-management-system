import { BiSolidDashboard } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import LogoutButton from "../components/LogoutButton";
import { useNavigate, useLocation } from "react-router";
const UserSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    {
      name: "Dashboard",
      icon: <BiSolidDashboard />,
      link: "/user/dashboard/",
    },
    // {
    //   name: "Clock-Ins",
    //   icon: <CgNotes />,
    //   link: "",
    // },
    {
      name: "Profile",
      icon: <FiUsers />,
      link: "/user/dashboard/profile",
    },

    // {
    //   name: "Participants",
    //   icon: <GoCommentDiscussion />,
    //   link: "",
    // },
  ];

  return (
    <div className=" border-r-[#e9e6e6] border h-screen md:px-4">
      <div className=" flex flex-wrap p-2 md:p-4 gap-4 text-[--green] justify-center items-center">
        <div className=" bg-[--green] w-[2rem] h-[2rem] sm:h-[3rem] sm:w-[3rem] rounded-md "></div>
        <div>
          <h1 className=" text-lg font-semibold md:text-2xl">Student</h1>
          <p className=" text-center text-xs font-normal">DASHBOARD</p>
        </div>
      </div>

      <div className=" flex flex-col gap-[20rem]">
        <ul className="mt-[2.4rem] mx-auto grid gap-4">
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
                  className={`text-xl flex items-center gap-4 p-2 sm:p-4 ${
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

export default UserSidebar;
