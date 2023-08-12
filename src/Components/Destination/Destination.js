import React, { useState } from "react";
import Map from "../../images/Map.png";
import Bus from "../../images/Frame-1.png";
import User from "../../images/peopleicon.png";

const Destination = () => {
  const [shuffle, setShuffle] = useState(true);

  const handleShuffle = () => {
    setShuffle(!shuffle);
  };

  return (
    <div className="flex justify-around items-center w-[85%] mx-auto mt-20 tablet:flex-row laptop:justify-between mobile:flex-col">
      {shuffle
        ? <div className="flex justify-between flex-col items-center bg-[#eeeeee] px-[70px] py-[80px] rounded-lg shadow-lg md:w-[22rem]">
            <form action="">
              <div className="flex flex-col my-2">
                <label htmlFor="" className="my-2">
                  Pick From
                </label>
                <input
                  type="text"
                  value={"Mirpur 1"}
                  className="h-10 pl-2 w-[300px] rounded-md"
                />
              </div>
              <div className="flex flex-col my-2">
                <label htmlFor="" className="my-2">
                  Pick To
                </label>
                <input
                  type="text"
                  value={"Dhanmodi"}
                  className="h-10 pl-2 w-[300px] rounded-md"
                />
              </div>
              <input
                onClick={handleShuffle}
                type="button"
                value="Search"
                className="h-10 w-full mt-5 rounded bg-[#FF6E40] text-white cursor-pointer"
              />
            </form>
          </div>
        : <div className="bg-[#EEEEEE] w-[22rem] rounded-lg shadow-lg tablet:h-[500px] mobile:w-[300px]">
            <div className="bg-[#FF6E40] m-4 p-4 mt-8 rounded-lg mb-6">
              <p className="text-2xl font-bold pb-3">Mirpur 1</p>
              <p className="text-2xl font-bold pt-3">Dhanmondi</p>
            </div>
            <div>
              <div className="bg-white py-5 mx-4 rounded-lg flex justify-around items-center mb-6">
                <img src={Bus} alt="" className="w-[60px]" />
                <div className="flex justify-between items-center w-[70px]">
                  <p className="font-bold text-[1rem]">car</p>
                  <img src={User} alt="" className="w-[30px]" />
                </div>
                <p className="font-bold text-[1rem]">$ 65</p>
              </div>
              <div className="bg-white py-5 mx-4 rounded-lg flex justify-around items-center mb-6">
                <img src={Bus} alt="" className="w-[60px]" />
                <div className="flex justify-between items-center w-[70px]">
                  <p className="font-bold text-[1rem]">car</p>
                  <img src={User} alt="" className="w-[30px]" />
                </div>
                <p className="font-bold text-[1rem]">$ 65</p>
              </div>
              <div className="bg-white py-5 mx-4 rounded-lg flex justify-around items-center mb-8">
                <img src={Bus} alt="" className="w-[60px]" />
                <div className="flex justify-between items-center w-[70px]">
                  <p className="font-bold text-[1rem]">car</p>
                  <img src={User} alt="" className="w-[30px]" />
                </div>
                <p className="font-bold text-[1rem]">$ 65</p>
              </div>
            </div>
          </div>}
      <div>
        <img className="md:w-[27rem] tablet:w-[100%] tablet:ml-[30px] mobile:mt-6 mobile:w-[300px]" src={Map} alt="" />
      </div>
    </div>
  );
};

export default Destination;
