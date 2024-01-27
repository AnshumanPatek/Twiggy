import Logo from "../assets/logo.jpg";

const Header = () => {
  return (
    <>
      <header className="flex justify-between shadow-xl ">
        <div className="log0">
          <img
            src={Logo}
            alt="App_Logo"
            className="w-20 mx-4 mt-2 rounded-[20px] "
          />
        </div>

        <div className=" flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4  hover:text-blue-600 ">Home</li>
            <li className="px-4 hover:text-blue-600 ">About</li>
            <li className="px-4 hover:text-blue-600">Contact Us</li>
            <li className="px-4 hover:text-blue-600">Cart</li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
