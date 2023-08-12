import React, { useContext } from "react";
import BG from "../../images/Bg-1.png";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const backgroundStyle = {
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "auto",
    height: "100vh"
  };

  const data = [
    {
      id: "1",
      name: "Bike",
      image: "https://i.ibb.co/zNjK1SR/Frame.png",
      money: 55,
      quantity: 4
    },
    {
      id: "2",
      name: "Car",
      image: "https://i.ibb.co/ZftzCNg/Frame-2.png",
      money: 50,
      quantity: 4
    },
    {
      id: "3",
      name: "Bus",
      image: "https://i.ibb.co/zHPFZ83/Frame-1.png",
      money: 60,
      quantity: 4
    },
    {
      id: "4",
      name: "Train",
      image: "https://i.ibb.co/ctfwQq2/Group.png",
      money: 45,
      quantity: 4
    }
  ];

  const navigate = useNavigate();
  const handleDestination = item => {
    if (loggedInUser.email) {
      navigate("/destination");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className="flex justify-center items-center tablet:pl-0 mobile:justify-center laptop:h-full laptop:p-0 h-[80vh] mobile:pl-0"
      style={backgroundStyle}
    >
      <div className="flex laptop:flex-row tablet:px-[25px] justify-between mobile:justify-center tablet:flex-wrap tablet:flex-row laptop:flex-nowrap laptop:w-[70%] mobile:w-full w-[60%] mobile:flex-row mobile:flex-wrap">
        {data.map((item, index) =>
          <div
            onClick={handleDestination}
            key={index}
            className="bg-white p-5 flex flex-col justify-between items-center rounded-xl shadow-md hover:scale-[1.2] duration-500 tablet:w-[30%] mobile:w-[35%] mobile:m-[15px] mobile:justify-center"
          >
            <img src={item.image} alt="" className="w-[200px]" />
            <h3 className="py-6 text-[1.2rem] font-bold">
              {item.name}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
