import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/", {
      replace: true,
    });
  };
  return (
    <div className=" flex items-center">
      <button
        className="flex items-center  justify-center mt-[5.5rem] gap-4 p-4  text-slate-400 text-xl "
        onClick={logoutHandler}
      >
        <BiLogOut />
        <p>Log Out</p>
      </button>
    </div>
  );
};

export default LogoutButton;
