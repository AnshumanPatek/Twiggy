import { FaShoppingCart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <>
      <header
        // className="flex text-light-text-color fixed top-0 left-0 overflow-y-hidden justify-between shadow-2xl items-center
        // rounded-mg w-[100vw] h-[12vw] lg:h-[7vw] md:h-[10vw] z-[999] bg-header-bg-color  font-[500]"
        className="bg-header-bg-color flex md:grid md:grid-flow-col md:grid-cols-12 m-2  h-[10vw] lg:h-[9vw] md:h-[10vw]"
      >
        <div
          // className="logo-container   w-[16vw]"
          className="col-start-3 col-span-2 md:w-full w-[20%]"
        >
          <Link to="/">
            <img
              src={Logo}
              alt="App_Logo"
              className="border shadow-lg h-[14vw]  md:h-[12vw] lg:h-[9vw]  rounded-[50%] cursor-pointer "
            />
          </Link>
        </div>

        <div
          //  className="flex items-center"
          className="col-start-5 col-span-7 w-[100%]"
        >
          <ul
            //  className=" flex  p-4 m-4"
            className="flex text-gray-600 shadow-lg w-full p-2 items-center md:justify-end  justify-between h-[14vw] sm:h-[12vh] lg:h-[6vw] md:h-[10vw]"
          >
            {/* <li className="p-4">Online Status: {onlineStatus ? "✅" : "⛔"}</li> */}
            <li className="md:p-4 cursor-pointer hover:bg-orange-600 rounded-lg hover:text-white  font-bold ">
              <Link to="/" className="links">
                Home
              </Link>
            </li>

            <li className="cursor-pointer md:p-4 font-bold rounded-lg hover:bg-orange-600 hover:text-white">
              <Link to="/about" className="links">
                About
              </Link>
            </li>

            <li className="cursor-pointer md:p-4 font-bold rounded-lg hover:bg-orange-600 hover:text-white ">
              <Link to="/contact" className="links">
                Contact
              </Link>
            </li>

            {/* <li className="p-4 cursor-pointer font-bold hover:text-blue-600 ">
              <Link to="/Grocery" className="links">
                grocery
              </Link>
            </li> */}

            <li
              className="cursor-pointer 
              font-extrabold md:p-4 hover:text-blue-600"
            >
              <Link to="/cart">
                <span className="text-red-500 flex text-[25px]">
                  <FaShoppingCart />
                </span>
                [
                {cartItems.length === 1
                  ? `${cartItems.length}`
                  : `${cartItems.length}`}
                ]
              </Link>
            </li>

            <button
              className="loginBtn md:p-4  flex items-center hover:shadow-3xl rounded-lg font-bold hover:bg-orange-600 hover:text-white cursor-pointer"
              onClick={() => {
                btnReact === "Login"
                  ? setBtnReact("Logout")
                  : setBtnReact("Login");
                // console.log(btnReact);
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
