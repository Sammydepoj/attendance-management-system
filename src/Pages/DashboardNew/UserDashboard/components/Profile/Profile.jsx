import image from "../Profile/profile-image.avif";
import useGetUserInfo from "../../../../../hooks/useGetUserInfo";
import { Spin } from "antd";
const UserProfile = () => {
  const { userInfo, loading } = useGetUserInfo("getUserInfo");

  return (
    <Spin spinning={loading}>
      <div className="  mx-9  m-3">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt="image-profile"
            className="h-[10rem] p-5 rounded-[8rem]"
          />

          <h2>
            {userInfo?.firstName + " " + userInfo?.lastName}
            <span> - {userInfo?.role}</span>
          </h2>
        </div>
        <h4 className="ml-5">Accounts</h4>
        <hr className="w-full mt-[12px]" />
        <div className="grid gap-4 mt-8">
          <div className="grid grid-cols-[10rem_10rem]">
            <p className="">Full name : </p>
            <p>{userInfo?.firstName + " " + userInfo?.lastName}</p>
          </div>
          <div className="grid grid-cols-[10rem_10rem]">
            <p className="">Email : </p>
            <p>{userInfo?.email}</p>
          </div>
          {userInfo?.sex && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Gender : </p>
              <p>{userInfo?.sex}</p>
            </div>
          )}
          {userInfo?.lga && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Local Govt. Area : </p>
              <p>{userInfo?.lga}</p>
            </div>
          )}
          {userInfo?.programme && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Programme : </p>
              <p>{userInfo?.programme}</p>
            </div>
          )}
          {userInfo?.occupation && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Occupation : </p>
              <p>{userInfo?.occupation}</p>
            </div>
          )}
          {userInfo?.techStack && (
            <div className="grid grid-cols-[10rem_10rem]">
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
