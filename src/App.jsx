/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sigin from "./Pages/Signin/Sigin";
import SignUp from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/DashboardNew/Dashboard";
import Details from "./Pages/DashboardNew/components/Details";
import { Link } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import ClockInHistory from "./Pages/DashboardNew/components/ClockInHistory/ClockInHistory";
import Participants from "./Pages/Participants/Participants";

function App() {
  const router = createBrowserRouter([
    {
      element: <Sigin />,
      path: "/",
    },
    {
      element: <SignUp />,
      path: "/signup",
    },
    {
      element: <Dashboard />,
      path: "/dashboard/details",
      errorElement: (
        <div className="h-[100svh] grid items-center justify-center">
          <h1>Page Not Found</h1>
          <button className="">
            <Link to={"/dashboard/details"}>Go to Dashboard</Link>
          </button>
        </div>
      ),
      children: [
        {
          path: "/dashboard/details",
          element: <Details />,
        },
        {
          path: "/dashboard/details/profile",
          element: <Profile />,
        },
        {
          path: "/dashboard/details/clockins",
          element: <ClockInHistory />,
        },
         {
          path: "/dashboard/details/participants",
          element: <Participants />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
