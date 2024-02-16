// import { LOGO_URL } from "../utils/constants";
import { FaShoppingCart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import Logo from "../assets/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <>
      <header
        className="flex text-light-text-color fixed top-0 left-0 overflow-y-hidden justify-between shadow-2xl items-center
       rounded-mg w-[100vw] z-[999] bg-header-bg-color sm:bg-yellow-400 lg:bg-green-200  font-[500]"
      >
        <div className="logo-container ">
          <Link to="/">
            <img
              src={Logo}
              alt="App_Logo"
              className="w-24 rounded-md mx-6 mt-2 shadow hover:shadow-2xl  cursor-pointer "
            />
          </Link>
        </div>

        <div className="flex items-center">
          <ul className=" flex  p-4 m-4">
            <li className="p-4">Online Status: {onlineStatus ? "✅" : "⛔"}</li>
            <li className="p-4  cursor-pointer font-bold hover:text-blue-600 ">
              <Link to="/" className="links">
                Home
              </Link>
            </li>

            <li className="p-4 cursor-pointer font-bold hover:text-blue-600 ">
              <Link to="/about" className="links">
                About
              </Link>
            </li>

            <li className="p-4 cursor-pointer font-bold hover:text-blue-600 ">
              <Link to="/contact" className="links">
                Contact
              </Link>
            </li>

            <li className="p-4 cursor-pointer font-bold hover:text-blue-600 ">
              <Link to="/Grocery" className="links">
                grocery
              </Link>
            </li>

            <li
              className="m-4 p-1 cursor-pointer 
              font-extrabold hover:text-blue-600 "
            >
              <Link to="/cart">
                <span className="text-red-500  text-[25px]">
                  <FaShoppingCart />
                </span>
              </Link>
            </li>

            <button
              className="loginBtn  flex items-center hover:shadow-3xl rounded-lg px-2 py-2 font-bold cursor-pointer"
              onClick={() => {
                btnReact === "Login"
                  ? setBtnReact("Logout")
                  : setBtnReact("Login");
                console.log(btnReact);
              }}
            >
              {btnReact}
              <span className="text-green-600">
                <GoDotFill />
              </span>
            </button>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
