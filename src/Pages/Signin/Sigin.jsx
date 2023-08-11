import React from "react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <form className="bg-orange-400 h-[70vh] w-[30vw]  rounded-md shadow-md">
        <div className="text-center pt-8 text-2xl">
          <h1>SIGN-IN </h1>
        </div>
        <div className="flex justify-center items-center flex-col  h-52 mt-10">
          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="p-3 border rounded w-[25vw]"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="p-3 border rounded w-[25vw]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
