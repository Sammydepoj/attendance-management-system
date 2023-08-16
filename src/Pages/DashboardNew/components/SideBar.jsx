import { BiSolidDashboard } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { FiSettings, FiUsers } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { AiOutlineVideoCamera, AiOutlineWallet } from "react-icons/ai";
const Sidebar = () => {
 const navItems = [
   {
     name: "Dashboard",
     icon: <BiSolidDashboard />,
     link: "",
   },
   {
     name: "Courses",
     icon: <CgNotes />,
     link: "",
   },
   {
     name: "Students",
     icon: <FiUsers />,


     link: "",
   },


   {
     name: "Discussion",
     icon: <GoCommentDiscussion />,
     link: "",
   },
   {
     name: "Live class",
     icon: <AiOutlineVideoCamera />,
   },
   {
     name: "Transaction",
     icon: <AiOutlineWallet />,
   },
   {
     name: "Settings",
     icon: <FiSettings />,
     link: "",
   },
 ];


 return (
   <div>
     <div className=" flex p-4 gap-4 text-green-500 items-center">
       <div className=" bg-green-500 h-[3rem] w-[3rem] rounded-md"></div>
       <div>
         <h1 className=" text-2xl font-semibold">Instructor</h1>
         <p className=" text-xs font-normal">DASHBOARD</p>
       </div>
     </div>


     <ul>
       {navItems.map((item, index) => {
         return (
           <li
             key={index}
             className=" text-xl text-slate-400 flex items-center gap-4 p-4"
           >
             {item.icon}
             <p>{item.name}</p>
           </li>
         );
       })}
     </ul>
   </div>
 );
};


export default Sidebar;



