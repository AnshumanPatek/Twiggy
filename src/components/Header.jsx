// import { LOGO_URL } from "../utils/constants";
import Logo from "../assets/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiSignalWifiOffLine } from "react-icons/ri";
import { MdOutlineOnlinePrediction } from "react-icons/md";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <>
      <header className="flex justify-between  m-[5px] flex-wrap px-[20px ] border-2 border-solid  items-center">
        <div className="logo ">
          <img
            src={Logo}
            alt="App_Logo"
            className=" shadow hover:shadow-2xl w-[100px] cursor-pointer m-2 rounded-[20px] "
          />
        </div>

        <div>
          <ul className=" flex text-[24px] list-none shadow hover:shadow-2xl rounded-md p-4 m-4">
            <Link to="/">
              <li className="p-4  cursor-pointer font-bold hover:text-blue-600 ">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="p-4 cursor-pointer font-bold hover:text-blue-600 ">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="p-4 cursor-pointer font-bold hover:text-blue-600">
                Contact Us
              </li>
            </Link>
            <Link to="/cart">
              <li className="p-4 cursor-pointer font-bold hover:text-blue-600">
                Cart
              </li>
            </Link>

            <button
              className="bg-pink-500 hover:bg-blue-300 rounded-xl px-2 py-2 font-bold cursor-pointer"
              onClick={() => {
                btnReact === "Login"
                  ? setBtnReact("Logout")
                  : setBtnReact("Login");
                console.log(btnReact);
              }}
            >
              {btnReact}
            </button>

            <div className="px-4">
              <ul>
                <li className="flex p-4">
                  OnlineStatus:
                  {onlineStatus ? (
                    <MdOutlineOnlinePrediction className="bg-green-300 size-[30px] " />
                  ) : (
                    <RiSignalWifiOffLine className="bg-red-500 size-[30px]" />
                  )}
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
