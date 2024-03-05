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
        className="flex text-light-text-color fixed top-0 left-0 overflow-y-hidden justify-between shadow-2xl items-center
       rounded-mg w-[100vw] h-[12vw] lg:h-[7vw] md:h-[10vw] z-[999] bg-header-bg-color  font-[500]"
      >
        <div className="logo-container   w-[16vw]">
          <Link to="/">
            <img
              src={Logo}
              alt="App_Logo"
              className=" h-[20vw] lg:h-[11vw] mx-[50%] cursor-pointer "
            />
          </Link>
        </div>

        <div className="flex items-center">
          <ul className=" flex  p-4 m-4">
            {/* <li className="p-4">Online Status: {onlineStatus ? "✅" : "⛔"}</li> */}
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

            {/* <li className="p-4 cursor-pointer font-bold hover:text-blue-600 ">
              <Link to="/Grocery" className="links">
                grocery
              </Link>
            </li> */}

            <li
              className="m-4 p-1 cursor-pointer 
              font-extrabold hover:text-blue-600 "
            >
              <Link to="/cart">
                <span className="text-red-500  text-[25px]">
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
              className="loginBtn  flex items-center hover:shadow-3xl rounded-lg font-bold cursor-pointer"
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

            {/* <div className="sm:hidden inline-block z-50 border-2 border-red-500 cursor-pointer text-black font-extrabold">
              <span className="extrabold">
                <CgMenu />
              </span>

              <span>
                <CgClose />
              </span>
            </div> */}
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
