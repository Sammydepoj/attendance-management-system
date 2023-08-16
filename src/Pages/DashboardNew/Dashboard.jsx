const Dashboard = () => {
    return (
        <div className="grid grid-cols-[15rem_1fr]">
            <div className="h-[100svh] bg-red-700"></div>
            <div className="bg-blue-800">
                <div className="flex justify-between p-4">
                    <div className="">
                        <p>Hi Dixit</p>
                        <h1> Welcome to Sovia</h1>
                    </div>
                    <div className="">
                        <input type="text" name="" id=""  placeholder="Search"/>
                    </div>
                </div>
                    <div className="border h-[80svh]"></div>
            </div>
        </div>
    )
}

export default Dashboard