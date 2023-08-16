import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


const LogoutButton = () => {
    const Navigate = useNavigate()
  const logoutHandler = () => {
        localStorage.removeItem("token");
        Navigate("/", {
        replace: true,
    });
};
  return (
    <div>
      <button className="flex items-center mt-[30rem] gap-4 p-4  text-slate-400 text-xl"
        onClick={logoutHandler}
      >
        <BiLogOut />
        <p>Log Out</p>
      </button>
    </div>
  );
};

export default LogoutButton;
