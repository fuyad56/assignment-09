import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSignOut = () => {
    setLoggedInUser((loggedInUser.success = false));
  };

  const [menu, setMenu] = useState(true);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex justify-between items-center laptop:h-[80px] w-[85%] mx-auto tablet:h-[60px] sm:h-[45px] mobile:h-[40px]">
      <h1 className="laptop:text-3xl font-bold tablet:text-2xl">Fast Travels.</h1>
      <div className="w-[40%] flex justify-between items-center tablet:hidden sm:hidden laptop:block desktop:block laptop:w-auto 2desktop:block mobile:hidden">
        <Link to={"/home"} className="text-[1rem] font-medium text-black ml-[60px]">
          Home
        </Link>
        <Link
          to={loggedInUser.email ? "/destination" : "/login"}
          className="text-[1rem] font-medium text-black ml-[60px]"
        >
          Destination
        </Link>
        <Link to={"/blog"} className="text-[1rem] font-medium text-black ml-[60px]">
          Blog
        </Link>
        <Link to={"/contact"} className="text-[1rem] font-medium text-black ml-[60px]">
          Contact
        </Link>
        <Link
          to={"/login"}
          onClick={handleSignOut}
          className="text-[1rem] font-medium text-white bg-[#FF6E40] px-[20px] py-[10px] rounded ml-[60px]"
        >
          {loggedInUser.success ? "Welcome!" : "Login"}
        </Link>
      </div>
      <button
        className="laptop:hidden"
        onClick={handleMenu}
      >
        {menu ? <AiOutlineMenu /> : <AiOutlineClose />}
        {!menu ?
          <div className="w-[40%] flex justify-between items-center rounded-laptop tablet:absolute tablet:left-[30%] tablet:top-[20%] tablet:flex-col  tablet:h-[300px] tablet:py-10 tablet:bg-[#f7f7f7] sm:absolute sm:left-[30%] sm:top-[20%] sm:flex-col sm:h-[250px] sm:py-6 sm:bg-[#f7f7f7] mobile:absolute mobile:top-[20%] mobile:left-[33%] mobile:flex-col mobile:bg-[#f7f7f7] mobile:py-6 mobile:h-[250px]">
            <Link to={"/home"} className="text-[1rem] font-medium text-black">
              Home
            </Link>
            <Link
              to={loggedInUser.email ? "/destination" : "/login"}
              className="text-[1rem] font-medium text-black"
            >
              Destination
            </Link>
            <Link to={"/blog"} className="text-[1rem] font-medium text-black">
              Blog
            </Link>
            <Link
              to={"/contact"}
              className="text-[1rem] font-medium text-black"
            >
              Contact
            </Link>
            <Link
              to={"/login"}
              onClick={handleSignOut}
              className="text-[1rem] font-medium text-white bg-[#FF6E40] px-[20px] py-[10px] rounded"
            >
              {loggedInUser.success ? <p>Welcome!</p> : <p>Login</p>}
            </Link>
          </div> : <></>}
      </button>
    </div>
  );
};

export default Header;
