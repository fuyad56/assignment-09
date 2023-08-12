import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-[80px]">
        <div className="bg-white rounded-lg shadow-md h-auto px-[80px] pt-[80px] pb-[40px] w-[30rem]">
          <form
            action=""
            className="flex flex-col justify-between items-center"
          >
            <h1 className="text-3xl">Put your email and message bellow</h1>
            <input
              type="email"
              placeholder="Email address"
              className="pl-2 h-10 w-full border-b-2 border-black  mt-8"
            />
            <input type="text" placeholder="Description" className="pl-2 h-[100px] w-full border-2 rounded-md  border-black  mt-8" />
            <input
              type="button"
              value="Login"
              className="h-10 w-full mt-6 px-[16px] py-[8px] rounded bg-[#FF6E40] text-white cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
