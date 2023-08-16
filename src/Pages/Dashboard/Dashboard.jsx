import Search from "antd/es/input/Search";

const Dashboard = () => {
  return (
    <div className=" h-[100vh]">
      <section className=" grid grid-cols-[20rem_1fr]">
        <div className=" bg-white h-[100vh] text-center">
          <div className=" leading-[4rem]">
          <h1 className=" text-[2rem] leading-3 shadow-sm pb-[1rem] mt-[2rem]">Instructor<br /> <span className=" text-[9px]">DASHBOARD</span></h1>
          <p className="m-auto mt-[3rem] rounded-[0.5rem] bg-blue-400 border w-[8rem]">Dashboard</p>
          <p>Course</p>
          <p>Student</p>
          <p>Programme</p>
          <p >Settings</p>
          </div>
        </div>
        <div className=" bg-slate-300 h-[100vh] grid grid-rows-[6rem_6rem_1fr_1fr]">
          <main className=" grid grid-cols-[1fr_1fr]">
            <div className=" p-[2rem]">
              <span className=" text-[13px]">hi teepee,</span>
              <h1 className=" text-[1.5rem] font-medium"> Welcome to sail innovation lab!</h1>
            </div>
            <div className=" m-[auto]">
              <Search className=" w-[20rem]"  placeholder=" Search"/>
            </div>
          </main>
          <main className=" grid grid-cols-4">
            <div className=" bg-slate-100 rounded-[1rem] m-[1rem]"></div>
            <div className=" bg-slate-100 rounded-[1rem] m-[1rem]"></div>
            <div className=" bg-slate-100 rounded-[1rem] m-[1rem]"></div>
            <div className=" bg-slate-100 rounded-[1rem] m-[1rem]"></div>
          </main>
          <main className="grid grid-cols-2">
            <div className=" border bg-slate-100 rounded-[2rem] m-[1rem]"></div>
            <div className=" border bg-slate-100 rounded-[2rem] m-[1rem]"></div>
          </main>
          <main className=" grid grid-cols-[1fr_25rem]">
            <div className=" bg-slate-100 rounded-[2rem] m-[1rem]"></div>
            <div className=" bg-slate-100 rounded-[2rem] m-[1rem]"></div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
