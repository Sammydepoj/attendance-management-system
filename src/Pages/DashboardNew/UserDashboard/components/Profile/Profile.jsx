import image from "../Profile/profile-image.avif";
import useGetUserInfo from "../../../../../hooks/useGetUserInfo";
import { Spin } from "antd";
const UserProfile = () => {
  const { userInfo, loading } = useGetUserInfo("getUserInfo");

  return (
    <Spin spinning={loading}>
      <div className="  mx-9  m-3 flex gap-[4rem] justify-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <img
            src={image}
            alt="image-profile"
            className="h-[14rem] w-[14rem]  p-5 rounded-md"
          />
          <hr className="w-full mt-[12px]" />
          <h2 className=" bg-slate-100 p-4 rounded-md font-semibold text-blue-800">
            {userInfo?.firstName + " " + userInfo?.lastName}
            <span> - {userInfo?.role}</span>
          </h2>
        </div>

        <div className="grid gap-4 mt-8">
          <div className="flex gap-8 bg-slate-100 p-4 rounded-md font-medium text-blue-800">
            <p className="">Full name : </p>
            <p>{userInfo?.firstName + " " + userInfo?.lastName}</p>
          </div>
          <div className="flex gap-8 bg-slate-100 p-4 rounded-md font-medium text-blue-800">
            <p className="">Email : </p>
            <p>{userInfo?.email}</p>
          </div>
          {userInfo?.sex && (
            <div className="flex gap-8 bg-slate-100 p-4 rounded-md font-medium text-blue-800">
              <p className="">Gender : </p>
              <p>{userInfo?.sex}</p>
            </div>
          )}
          {userInfo?.lga && (
            <div className="flex gap-8 bg-slate-100 p-4 rounded-md font-medium text-blue-800">
              <p className="">Local Govt. Area : </p>
              <p>{userInfo?.lga}</p>
            </div>
          )}
          {userInfo?.programme && (
            <div className="flex gap-8 bg-slate-100 p-4 rounded-md font-medium text-blue-800">
              <p className="">Programme : </p>
              <p>{userInfo?.programme}</p>
            </div>
          )}
          {userInfo?.occupation && (
            <div className="flex gap-8 bg-slate-100 p-4 rounded-md font-medium text-blue-800">
              <p className="">Occupation : </p>
              <p>{userInfo?.occupation}</p>
            </div>
          )}
          {userInfo?.techStack && (
            <div className="flex gap-8  bg-slate-100 p-4 rounded-md font-medium text-blue-800">
              <p className="">Tech Stack : </p>
              <p>{userInfo?.techStack?.toUpperCase()}</p>
            </div>
          )}
        </div>
      </div>
    </Spin>
  );
};

export default UserProfile;
