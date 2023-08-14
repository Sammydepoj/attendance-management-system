const StudentDetails = () => {
  return (
    <div className=" bg-gray-300 p-4 rounded-xl items-center ">
      <div className="items-center justify-between">
        <img
          src="src/assets/Linda-Osifo-2.jpg"
          alt=""
          className=" rounded-lg h-32 w-64"
        />
        <h1 className=" font-bold text-gray-800 mb-4">
          StudentDetails
          <button className="bg-transparent border border-gray-500 rounded-md py-1 px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-96">
            This year
          </button>
          <button className="bg-transparent border border-gray-500 rounded-md py-1 px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            download info
          </button>
        </h1>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thickbaby Africa
        </h1>
      </div>
      <div className="grid-grid-cols-1 gap-6 mb-6 lg-grid-cols-3 space-x-3 flex">
        <div className="px-4 py-5 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 trncate">ROLE</div>
          <div className="mt-1 text-sm font-medium text-gray-900">
            Student of Sail
          </div>
        </div>
        <div className="px-4 py-5 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 trncate">
            Phone Number
          </div>
          <div className="mt-1 text-sm font-medium text-gray-900">
            000000000000
          </div>
        </div>

        <div className="px-4 py-5 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 trncate">
            Email Address
          </div>
          <div className="mt-1 text-sm font-medium text-gray-900">
            asdfgghda\hhshj\dddddg@gmail.com
          </div>
        </div>
      </div>

      <div className="grid-grid-cols-1 gap-6 mb-6 lg-grid-cols-3 space-x-3 flex">
        <div className="px-4 py-5 bg-slate-600 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 trncate">
            total attendance
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            12,000
          </div>
        </div>

        <div className=" px-4 py-5 bg-slate-600 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 trncate">
            Checkin Time
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">08:46</div>
        </div>
        <div className="px-3 py-2 bg-slate-600 rounded-lg shadow w-36 h-15">
          <div className="text-sm font-medium text-gray-500 trncate">
            Checkin Time
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">08:46</div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
