// import { LOGO_URL } from "../utils/constants";
import Logo from "../assets/logo.jpg";
import { useState } from "react";

const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");
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
            <li className="p-4  cursor-pointer font-bold hover:text-blue-600 ">
              Home
            </li>
            <li className="p-4 cursor-pointer font-bold hover:text-blue-600 ">
              About
            </li>
            <li className="p-4 cursor-pointer font-bold hover:text-blue-600">
              Contact Us
            </li>
            <li className="p-4 cursor-pointer font-bold hover:text-blue-600">
              Cart
            </li>

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
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
