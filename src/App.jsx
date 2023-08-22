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
import UserDashboard from "./Pages/DashboardNew/UserDashboard/UserDashboard";
import UserDetails from "./Pages/DashboardNew/UserDashboard/components/UserDetails";
import UserProfile from "./Pages/DashboardNew/UserDashboard/components/Profile/Profile";
// import ProtectedRoutes from "./ProtectedRoute";
// function isLoggedIn() {
//   // const isAuthenticated = !!localStorage.getItem("token");
//   // return isAuthenticated;
// }
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
      path: "/user/dashboard/",
      errorElement: (
        <div className="h-[100svh] grid items-center justify-center">
          <h1>Page Not Found</h1>
          <button className="">
            <Link to={"/user/dashboard/details"}>Go to Dashboard</Link>
          </button>
        </div>
      ),
      element: <UserDashboard />,
      children: [
        {
          path: "/user/dashboard/",
          element: <UserDetails />,
        },
        {
          path: "/user/dashboard/profile",
          element: <UserProfile />,
        },
      ],
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
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
